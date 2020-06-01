import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { SubmitState } from '../../types/modules/submitTypes'
import { RootState } from '../../types' 

const state: SubmitState = {
    // header
    current: 0,
    stage: [1,2,3],
    progress: [1, 2],
    title: ['📝 About','💪 Your Job', '💸 Your Expense'],
    // about
    description: '',
    tag: '',
    tagList: [],
    // job
    // expense
}
const getters: GetterTree<SubmitState, RootState> = {
    getDescription(state) {
        return state.description
    },
    getTag(state) {
        return state.tag
    },
    getTagList(state) {
        return state.tagList
    } 
}
const mutations: MutationTree<SubmitState> = {
    // header
    increment (state) {
        state.current++
    },
    add (state) {
        const { progress, stage, current } = state        
        state.progress = [...progress, stage[current]]
    },
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
    }
}
const actions: ActionTree<SubmitState, RootState> = {
    // header
    addProgress({ commit }) {
        commit('increment')        
        commit('add')
    },
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
    }
}
const namespaced = true

export const submit: Module<SubmitState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
