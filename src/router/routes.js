// import MainPage from '@layout/main/MainPage'
export default [
  {
    path: '/',
    redirect: { name: 'main' }
  },
  {
    name: 'login',
    path: '/login',
    component: resolve => require(['@layout/login/Login'], resolve)
  },
  {
    name: 'register',
    path: '/register',
    component: resolve => require(['@layout/register/Register'], resolve)
  },
  {
    name: 'main',
    path: '/main',
    meta: {
      requiresAuth: true
    },
    component: resolve => require(['@layout/main/MainPage'], resolve),
    children: [{
      name: 'home',
      path: 'home',
      component: resolve => require(['@layout/home/Home'], resolve)
    }, {
      name: 'articles',
      path: 'articles',
      component: resolve => require(['@layout/articles/Articles'], resolve)
    }, {
      name: 'archives',
      path: 'archives',
      component: resolve => require(['@layout/archives/Archives'], resolve)
    }, {
      name: 'about',
      path: 'about',
      component: resolve => require(['@layout/about/About'], resolve)
    }]
  }
]
