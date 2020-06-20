import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { JobState } from '@/types/modules/submitTypes'
import { RootState } from '@/types' 

const getDefaultJob = () => {
    return {
        title: '',
        industry: '',
        experience: 0,
        earnings: 0,
        currency: false,
        breakdown: false,
        past: false,
        breakdownList: [],
        pastList: [],        
    }
}

const state = getDefaultJob()

const getters: GetterTree<JobState, RootState> = {
    // confirm if breakdown is filled
    isBreakdown(state) {
        if (state.breakdownList.length == 0) {
            return true
        } else {
            // check if each are filled in
            for (const entry of state.breakdownList) {
                if (!entry.category || (entry.amount == 0 || isNaN(entry.amount))) {
                    return false
                }
            }
            return true
        }
    },
    // confirm if past salaries is filled
    isPast(state) {
        if (state.pastList.length == 0){
            return true
        } else {
            for (const entry of state.pastList){
                if (!entry.title || (entry.year == 0 || isNaN(entry.year)) || (entry.amount == 0 || isNaN(entry.amount))){ 
                    return false
                }
            }
            return true
        }
    } 
}
const mutations: MutationTree<JobState> = {
    // reset
    resetJob(state) {
        Object.assign(state, getDefaultJob())
    },
    select(state, payload) {
        const { prop, value } = payload 
        if (prop === "title") {
            state.title = value
        } else {
            state.industry = value
        }
    },    
    toggleCurrency(state) {
        state.currency = !state.currency
    },
    // typing 
    typeJob (state, payload) {
        const { prop, $event } = payload  
        if (prop === "title") {
            state.title = $event.target.value
        } else if (prop === "industry") {
            state.industry = $event.target.value
        } else if (prop === "experience") {
            if (isNaN($event.target.value)) {
                state.experience = $event.target.value
            } else {
                state.experience = parseFloat($event.target.value)
            }                        
        } else if (prop === "earnings") {
            if (isNaN($event.target.value)) {
                state.earnings = $event.target.value
            } else {
                state.earnings = parseFloat($event.target.value)
            }            
        }
    },
    toggleBreakdown (state) {
        state.breakdown = !state.breakdown
    },
    addBreakdown(state) {
        const entry = {category: '', amount: 0, description: ''}
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
        if (prop === 'category') {
            state.breakdownList[index].category = $event.target.value    
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
        const entry = {title: '', year: 0, amount: 0}
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
        if (prop === 'title') {
            state.pastList[index].title = $event.target.value    
        } else if (prop === 'year') {
            state.pastList[index].year = $event.target.valueAsNumber
        } else {
            state.pastList[index].amount = $event.target.valueAsNumber
        }         
    }
}
const actions: ActionTree<JobState, RootState> = {
    // reset
    resetJob({ commit }) {
        commit('resetJob')
    },
    // job
    select({ commit }, payload) {
        commit('select', payload)
    },
    toggleCurrency({ commit }) {
        commit('toggleCurrency')
    },
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
