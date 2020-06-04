import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { CurrencyState} from '@/types/modules/currencyTypes'
import { RootState } from '@/types/index' 

const state: CurrencyState = {   
    symbol: '$',
    name: 'USD',
    list: [
        {symbol: '$', name: 'USD'},
        {symbol: '€', name: 'EUR'},

    ]
}
const getters: GetterTree<CurrencyState, RootState> = {
}
const mutations: MutationTree<CurrencyState> = {    
    selectCurr(state, target) {
        state.symbol = state.list[target].symbol
        state.name = state.list[target].name
    }
}
const actions: ActionTree<CurrencyState, RootState> = {
    selectCurr({ commit }, target) {
        commit('selectCurr', target)
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
