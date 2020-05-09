import Vue from 'vue';
import VueRouter from 'vue-router';
import DoSCG from '@/components/DoSCG';
import GetXYZ from '@/components/GetXYZ';
import GetBC from '@/components/GetBC';
import GetDirection from '@/components/GetDirection';
import Sunhakoch from '@/components/Sunhakoch';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Sunhakoch',
      component: Sunhakoch,
    },
    {
      path: '/doSCG',
      name: 'DOSCG',
      component: DoSCG,
    },
    {
      path: '/getXYZ',
      name: 'GetXYZ',
      component: GetXYZ,
    },
    {
      path: '/getBC',
      name: 'GetBC',
      component: GetBC,
    },
    {
      path: '/getDirection',
      name: 'GetDirection',
      component: GetDirection,
    },
  ],
});
