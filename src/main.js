import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import VueFlashMessage from 'vue-flash-message'
import App from './App.vue'
import router from '@/core/Routes/index.js'
import store from '@/store/index.ts'
// import store from './store'
import './registerServiceWorker'

// import { CHECK_AUTH } from './store/actions.type'
// import ApiService from './common/api.service'
// import DateFilter from './common/date.filter'
// import ErrorFilter from './common/error.filter'

Vue.config.productionTip = false
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3000/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const token = localStorage.getItem('app-token')
  if (token === null || token === undefined) {
    return headers
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null
    }
  }
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

// Install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})
// Vue.filter('date', DateFilter)
// Vue.filter('error', ErrorFilter)

// ApiService.init()

// Ensure we checked auth before each page load.
// router.beforeEach((to, from, next) =>
//   Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
// )
Vue.use(BootstrapVue)
Vue.use(Vuex)
// use flashmessage to show message
Vue.use(VueFlashMessage)
new Vue({
  router,
  apolloProvider,
  store,
  render: h => h(App)
}).$mount('#app')
