import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "worksHomePage",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "worksHomePage" */ "@/views/WorksHomePage.vue"
        // /* webpackChunkName: "test" */ "@/views/test.vue"

      )
  },
  {
    path: "/:slug/:workSlug",
    name: "workPages",
    props: true,
    component: () =>
      import(/* webpackChunkName: "workPages" */ "@/views/WorkPages.vue")
  },
  {
    path: "/resume#:slug",
    name: "resumePage",
    props: true,
    component: () =>
      import(/* webpackChunkName: "resumePage" */ "@/views/ResumePage.vue")
  },
  {
    path: "/resume",
    name: "resume",
    props: true,
    component: () =>
      import(/* webpackChunkName: "resumePage" */ "@/views/ResumePage.vue")
  },
  {
    path: "/contact",
    name: "contactPage",
    props: true,
    component: () =>
      import(/* webpackChunkName: "contactPage" */ "@/views/ContactPage.vue")
  },
  {
    path: "/404",
    alias: "*",
    name: "notFoundPage",
    component: () =>
      import(/* webpackChunkName: "notFoundPage" */ "@/views/NotFoundPage")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
