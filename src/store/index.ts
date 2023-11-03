import { User } from '@/models/User'
import { createStore,Commit } from 'vuex'
import UserModule from './UserModule'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    User:UserModule
  }
})
