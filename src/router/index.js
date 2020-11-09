import Vue from 'vue'
import Router from "vue-router";
import Body from '../components/body'


/* sample page */
import SamplePage from '../pages/sample_page'


// component

Vue.use(Router)

const routes = [
{ path: '', redirect: { name: 'default' }},
{
  path: '/dashboard',
  component: Body,
  children: [
  {
    path: 'default',
    name: 'default',
    component: SamplePage,
    meta: {
      title: 'Dashboard',
    }
  },
  ]
}];


const router = new Router({
  routes,
  base: '/',
  mode: 'history',
  linkActiveClass: "active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

export default router
