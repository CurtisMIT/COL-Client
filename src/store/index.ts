import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '../types/index'
import { listings } from './modules/listings'
import { individual } from './modules/individual'
import { submit } from './modules/submit'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    listings,
    individual,
    submit
  }
}

export default new Vuex.Store<RootState>(store);

