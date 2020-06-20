import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { CurrencyState} from '@/types/modules/currencyTypes'
import { RootState } from '@/types/index' 
import axios from 'axios'
const URL = `http://localhost:5000/currency`

const state: CurrencyState = {   
    symbol: '$',
    name: 'USD',
    list: []
}
const getters: GetterTree<CurrencyState, RootState> = {
}
const mutations: MutationTree<CurrencyState> = {    
    selectCurr(state, target) {
        state.symbol = state.list[target].symbol
        state.name = state.list[target].name
    },
    fetchCurr(state, payload) {
        state.list = payload
    }
}
const actions: ActionTree<CurrencyState, RootState> = {
    selectCurr({ commit }, target) {
        commit('selectCurr', target)
    },
    fetchCurr({ commit }) {
        axios.get(URL).then((response) => {
            commit('fetchCurr', response.data)
        })
        .catch(err => console.log(err))

    }
}
const namespaced = true

export const currency: Module<CurrencyState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
