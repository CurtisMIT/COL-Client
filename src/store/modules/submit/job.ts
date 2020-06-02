import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { JobState } from '@/types/modules/submitTypes'
import { RootState } from '@/types' 

const state: JobState = {    
    job: '',
    industry: '',
    yoe: 0,
    salary: 0,
    currency: '',
    breakdown: false,
    past: false,
    breakdownList: [],
    pastList: [] 
}
const getters: GetterTree<JobState, RootState> = {}
const mutations: MutationTree<JobState> = {
    // job
    typeJob (state, payload) {
        const { prop, $event } = payload  
        if (prop === "job") {
            state.job = $event.target.value
        } else if (prop === "industry") {
            state.industry = $event.target.value
        } else if (prop === "yoe") {
            state.yoe = $event.target.valueAsNumber
        } else if (prop === "salary") {
            state.salary = $event.target.valueAsNumber
        }
    },
    toggleBreakdown (state) {
        state.breakdown = !state.breakdown
    },
    addBreakdown(state) {
        const entry = {type: '', amount: 0, description: ''}
        state.breakdownList = [...state.breakdownList, entry]
    },
    delBreakdown(state, target) {        
        state.breakdownList.splice(target, 1)
        // if delete all
        if (state.breakdownList.length < 1) {
            state.breakdown = !state.breakdown
        }
    },
    removeBreakdown(state) {
        state.breakdownList = []
    },
    typeBreakdown(state, payload){
        const { index, prop, $event } = payload             
        if (prop === 'type') {
            state.breakdownList[index].type = $event.target.value    
        } else if (prop === 'amount') {
            state.breakdownList[index].amount = $event.target.valueAsNumber
        } else {
            state.breakdownList[index].description = $event.target.value
        }        
    },
    togglePast (state) {
        state.past = !state.past
    },
    addPast (state) {
        const entry = {job: '', year: 0, amount: 0}
        console.log(state.pastList)
        state.pastList = [...state.pastList, entry]
    },
    delPast (state, target) {
        state.pastList.splice(target, 1)
        // if delete all
        if (state.pastList.length < 1) {
            state.past = !state.past
        }        
    },
    removePast (state) {
        state.pastList = []
    },
    typePast (state, payload) {
        const { index, prop, $event } = payload             
        if (prop === 'job') {
            state.pastList[index].job = $event.target.value    
        } else if (prop === 'year') {
            state.pastList[index].year = $event.target.valueAsNumber
        } else {
            state.pastList[index].amount = $event.target.valueAsNumber
        }         
    }
}
const actions: ActionTree<JobState, RootState> = {
    // job
    typeJob ({ commit }, payload) {
        commit('typeJob', payload)
    },   
    toggleBreakdown({ commit }) {
        if (state.breakdown === true) {
            commit('toggleBreakdown')
            commit('removeBreakdown')
        } else {
            commit('toggleBreakdown')
            commit('addBreakdown')            
        }        
    },
    addBreakdown({ commit }) {
        commit('addBreakdown')
    },
    delBreakdown({ commit}, target) {
        commit('delBreakdown', target)
    }, 
    typeBreakdown({ commit }, payload) {           
        commit('typeBreakdown', payload)
    },
    togglePast({ commit }) {        
        if (state.past === true) {
            commit('togglePast')
            commit('removePast')
        } else {          
            commit('togglePast')  
            commit('addPast')
        }        
    },
    addPast({ commit }) {
        commit('addPast')
    },
    delPast({commit}, target) {
        commit('delPast', target)
    },
    typePast({ commit }, payload) {
        commit('typePast', payload)
    }
}
const namespaced = true

export const submitJob: Module<JobState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
