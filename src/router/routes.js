import HomePage from "pages/HomePage";

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/cottage',
    component: () => import('pages/CottagePage.vue')
  },
  {
    path: '/cottage/add',
    component: () => import('pages/AddCottagePage.vue')
  },
  {
    path: '/cottage/my',
    component: () => import('pages/MyCottagesPage.vue')
  },
  {
    path: '/cottage/change/:id',
    component: () => import('pages/ChangeCottagePage.vue')
  },
  {
    path: '/favorites',
    component: () => import('pages/FavoritesPage.vue')
  },
  {
    path: '/settings',
    component: () => import('pages/SettingPage.vue')
  },
  {
    path: '/support',
    component: () => import('pages/SupportPage.vue')
  },
  {
    path: '/change-password',
    component: () => import('pages/ChangePasswordPage.vue')
  },
  {
    path: '/profile',
    component: () => import('pages/UserProfilePage')
  },
]

export default routes
