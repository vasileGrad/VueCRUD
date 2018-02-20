
require('./bootstrap');

window.Vue = require('vue');

window.VueRouter = require('vue-router').default;

window.VueAxios = require('vue-axios').default;

window.Axios = require('axios').default;

let AppLayout= require('./components/App.vue');

// Include all page template

// show the list post template
const ListPosts=Vue.component('ListPosts', require('./components/ListPosts.vue'));

// add post template
const AddPost=Vue.component('AddPost', require('./components/AddPost.vue'));

// edit post template
const EditPost=Vue.component('EditPost', require('./components/EditPost.vue'));

// delete post template
const DeletePost=Vue.component('DeletePost', require('./components/DeletePost.vue'));

// view single post template
const ViewPost=Vue.component('ViewPost', require('./components/ViewPost.vue'));


// registering Modules
Vue.use(VueRouter, VueAxios, axios);


const routes = [
  {
  	name: 'ListPosts',
  	path: '/',
  	component: ListPosts
  },
  {
  	name: 'AddPost',
  	path: '/add-post',
  	component: AddPost
  },
  {
  	name: 'EditPost',
  	path: '/edit/:id',
  	component: EditPost
  },
  {
  	name: 'DeletePost',
  	path: '/delete-post',
  	component: DeletePost
  },
  {
  	name: 'ViewPost',
  	path: '/view/:id',
  	component: ViewPost
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(
 Vue.util.extend(
 { router },
 AppLayout
 )
).$mount('#app');
