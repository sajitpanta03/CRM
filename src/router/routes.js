const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("components/eventForm.vue") },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },

  // {
  //   path: "/calender",
  //   component: () => import("pages/CalenderCom.vue"),
  // },
];

export default routes;
