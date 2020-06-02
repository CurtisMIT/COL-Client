import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '../types/index'
import { listings } from './modules/listings'
import { individual } from './modules/individual'
import { submitHeader } from './modules/submit/header'
import { submitAbout } from './modules/submit/about'
import { submitJob } from './modules/submit/job'

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
    // submit's modules
      submitHeader,
      submitAbout,
      submitJob,
  }
}

export default new Vuex.Store<RootState>(store);

