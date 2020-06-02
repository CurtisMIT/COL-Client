import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { AboutState } from '@/types/modules/submitTypes'
import { RootState } from '@/types' 

const state: AboutState = {
    description: '',
    tag: '',
    tagList: [],
}
const getters: GetterTree<AboutState, RootState> = {

}
const mutations: MutationTree<AboutState> = {
    // about
    typeDescription(state, event) {
        state.description = event.target.value
    },
    typeTag (state, event) {
        state.tag = event.target.value
    },
    addTag (state) {
        state.tagList = [...state.tagList, state.tag]
        state.tag = ""
    },
    removeTag (state, target) {
        for (let i = 0; i < state.tagList.length; i++ ) {
            if (state.tagList[i] == target) {
                state.tagList.splice(i, 1)
            }
        }
    },
}
const actions: ActionTree<AboutState, RootState> = {
    // about
    typeDescription({ commit}, event) {
        commit('typeDescription', event)
    },
    typeTag({ commit }, event) {
        commit('typeTag', event)
    },
    addTag({ commit }) {
        commit('addTag')
    },
    removeTag({ commit}, target) {
        commit('removeTag', target)
    },
}
const namespaced = true

export const submitAbout: Module<AboutState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
