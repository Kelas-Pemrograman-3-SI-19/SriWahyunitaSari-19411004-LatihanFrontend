
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/Index.vue') },
      { path: 'input', name: 'inputKegiatan', component: () => import('pages/Input.vue') },
      { path: 'edit/:id', name: 'editKegiatan', component: () => import('pages/Edit.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
