import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { ViewState } from '../../types/modules/listingsTypes'
import { RootState } from '../../types' 
import Axios from 'axios'

const URL = "http://localhost:5000/profiles"

const state: ViewState = {
    view: 'Grid',
    isTitle: false,
    title: '',
    isLocation: false,
    location: '',
    // testing, later use to populate all datas
    entries: []
}

const getters: GetterTree<ViewState, RootState> = {
    getView(state) {
        return state.view
    },
    getEntriesLength(state) {
        return state.entries.length
    }, 
    getAllTitles(state) {
        let result: string[] = [];
        for (const entry of state.entries) {
            if (!result.includes(entry.title)) {
                result = [...result, entry.title]
            }
        }
        return result.filter(el => el.toLowerCase().includes(state.title.toLowerCase()))
    },
    getAllLocations(state) {
        let result: string[] = [];
        for (const entry of state.entries) {
            if (!result.includes(entry.location)) {
                result = [...result, entry.location]
            }
        }
        return result.filter(el => el.toLowerCase().includes(state.location.toLowerCase()))
    },
    getAllTags(state) {
        let results: string[] = []
        for (const entry of state.entries) {
            for (const tag of entry.tags) {
                if (!results.includes(tag)) {
                    results = [...results, tag]
                }
            }
        }
        return results
    },
    getAllIndustries(state) {
        let results: string[] = [];
        for (const entry of state.entries) {
            if (!results.includes(entry.industry)) {
                results = [...results, entry.industry]
            }
        }
        return results        
    },
    filterEntries(state) {        
        if (state.location && state.title) {
            return state.entries.filter(el => el.location.toLowerCase().includes(state.location.toLowerCase()) && el.title.toLowerCase().includes(state.title.toLowerCase()))
        } else if (state.location) {
            return state.entries.filter(el => el.location.toLowerCase().includes(state.location.toLowerCase()))
        } else if (state.title) {
            return state.entries.filter(el => el.title.toLowerCase().includes(state.title.toLowerCase()))
        }
        return state.entries
    }
}

const mutations: MutationTree<ViewState> = {    
    typeFilter(state, payload) {
        const { prop, $event } = payload 
        if (prop === "title") {            
            state.isTitle = true            
            state.title = $event.target.value
        } else {            
            state.isLocation = true        
            state.location = $event.target.value
        }
    }, 
    fetchEntries(state, payload) {
        state.entries = payload
    },
    setView(state, viewType: string){
        state.view = viewType
    },
    setInput(state, payload) {
        const { prop, value } = payload
        if (prop === "title") {
            state.title = value
        } else {
            state.location = value
        }
    }, 
    suggestOn(state, payload) {
        if (payload === "title") {
            state.isTitle = true
        } else {
            state.isLocation = true
        }        
    },            
    suggestOff(state, payload) {        
        if (payload === "title") {
            state.isTitle = false
        } else {
            state.isLocation = false
        }        
    }
}
const actions: ActionTree<ViewState, RootState> = { 
    typeFilter({ commit }, payload) {
        commit('typeFilter', payload)
    }, 
    fetchEntries({ commit }) {
        Axios.get(URL).then((response)=>{                                                    
            commit('fetchEntries', response.data)            
        })
    },
    changeView({ commit }, viewType) {
        commit('setView', viewType)
    },
    setInput({ commit}, payload) {
        commit('setInput', payload)
    },
    suggestOn({ commit }, payload) {
        commit('suggestOn', payload)
    },
    suggestOff({ commit }, payload) {
        commit('suggestOff', payload)
    }
}

const namespaced = true

export const listings: Module<ViewState, RootState> = {
    namespaced,
    state,
    getters,
    actions, 
    mutations
}