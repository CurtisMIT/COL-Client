import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { HeaderState } from '@/types/modules/submitTypes'
import { RootState } from '@/types/index' 

const state: HeaderState = {
    // header
    current: 1,
    stage: [1,2,3],
    progress: [1,2],
    header: ['📝 About','💪 Your Job', '💸 Your Expense'],
}
const getters: GetterTree<HeaderState, RootState> = {
}
const mutations: MutationTree<HeaderState> = {    
    increment (state) {
        state.current++
    },
    add (state) {
        const { progress, stage, current } = state        
        state.progress = [...progress, stage[current]]
    }
}
const actions: ActionTree<HeaderState, RootState> = {
    // header
    addProgress({ commit }) {
        commit('increment')        
        commit('add')
    },
}
const namespaced = true

export const submitHeader: Module<HeaderState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
