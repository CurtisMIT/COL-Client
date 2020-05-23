import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '../types/index'
import { listings } from './modules/listings'

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
    listings
  }
}

export default new Vuex.Store<RootState>(store);


// export default new Vuex.Store<RootState>({
//   state: {
//     version: '1.0.0'
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//     listings
//   }
// })
