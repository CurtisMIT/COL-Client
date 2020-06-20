import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { AboutState } from '@/types/modules/submitTypes'
import { RootState } from '@/types' 

const getDefaultAbout = () => {
    return {
        description: "",
        location: "",
        tag: '',
        tagList: [],
    }
}

const state = getDefaultAbout()

const getters: GetterTree<AboutState, RootState> = {}

const mutations: MutationTree<AboutState> = {
    // reset
    resetAbout(state) {
        Object.assign(state, getDefaultAbout())
    },
    // about
    select(state, payload) {
        const { prop, value } = payload 
        if (prop === "location") {
            state.location = value
        } else {
            state.tag = value
        }
    },
    typeAbout(state, payload) {
        const { prop, $event } = payload
        if (prop === "description") {
            state.description = $event.target.value
        } else if (prop === "location") {
            state.location = $event.target.value
        } else {
            state.tag = $event.target.value
        }
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
const actions: ActionTree<AboutState, RootState> = {
    // about
    select({ commit }, payload) {
        commit('select', payload)
    },
    typeAbout({ commit }, payload) {
        commit('typeAbout', payload)
    },
    addTag({ commit }) {
        commit('addTag')
    },
    removeTag({ commit}, target) {
        commit('removeTag', target)
    },
    resetAbout({ commit }) {
        commit('resetAbout')
    }

}
const namespaced = true

export const submitAbout: Module<AboutState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
    
}
