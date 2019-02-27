/** @format */

// const HelloWorld = r => require.ensure([], () => r(require('@/components/pages/elements/HelloWorld')), 'helloword')
const HelloWorld = resolve =>
  require(['@/components/pages/elements/hello-world'], resolve);
const Table = resolve =>
  require(['@/components/pages/elements/table'], resolve);
const VueRouter = resolve =>
  require(['@/components/pages/elements/router/vue-router'], resolve);
const FlyProfile = resolve =>
  require(['@/components/pages/elements/router/fly-profile'], resolve);
const VueProfile = resolve =>
  require(['@/components/pages/elements/router/vue-profile'], resolve);
const ThirdProfile = resolve =>
  require(['@/components/pages/elements/router/third-profile'], resolve);

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
