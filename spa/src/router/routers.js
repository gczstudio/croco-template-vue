/** @format */

// const HelloWorld = r => require.ensure([], () => r(require('@/components/pages/HelloWorld')), 'helloword')
const HelloWorld = resolve =>
  require(['@/components/pages/HelloWorld'], resolve);
const Table = resolve => require(['@/components/pages/Table'], resolve);
const VueRouter = resolve =>
  require(['@/components/pages/router/VueRouter'], resolve);
const FlyProfile = resolve =>
  require(['@/components/pages/router/FlyProfile'], resolve);
const VueProfile = resolve =>
  require(['@/components/pages/router/VueProfile'], resolve);
const ThirdProfile = resolve =>
  require(['@/components/pages/router/ThirdProfile'], resolve);

export default [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  {
    path: '/router',
    name: 'VueRouter',
    component: VueRouter,
    children: [
      {
        // FlyProfile 会被渲染在 User 的 <router-view> 中
        path: 'fly',
        component: FlyProfile,
        children: [
          {
            path: ':id',
            component: ThirdProfile
          }
        ]
      },
      {
        path: 'vue',
        component: VueProfile
      }
    ]
  },
  { path: '/table', name: 'Table', component: Table }
];
