import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { ViewState } from '../../types/modules/listingsTypes'
import { RootState } from '../../types' 

const state: ViewState = {
    view: 'Grid',
    // testing, later use to populate all datas
    entries: [
        {id: 1, job: "Sr. Product Designer", experience: '5 years', location: 'San Francisco', industry: 'Hospitality', earnings: '$65,790', expenses: '$12,000', quote: 'Party all day and night, money straight from stock market.', tag1: '✈️ Traveler', tag2: '🥘 Foodie', date: 'May 2020'},
        {id: 2, job: "Sr. Product Designer", experience: '5 years', location: 'San Francisco', industry: 'Hospitality', earnings: '$65,790', expenses: '$12,000', quote: 'Party all day and night, money straight from stock market.', tag1: '✈️ Traveler', tag2: '🥘 Foodie', date: 'May 2020'},
        {id: 3, job: "Sr. Product Designer", experience: '5 years', location: 'San Francisco', industry: 'Hospitality', earnings: '$65,790', expenses: '$12,000', quote: 'Party all day and night, money straight from stock market.', tag1: '✈️ Traveler', tag2: '🥘 Foodie', date: 'May 2020'},
        {id: 4, job: "Sr. Product Designer", experience: '5 years', location: 'San Francisco', industry: 'Hospitality', earnings: '$65,790', expenses: '$12,000', quote: 'Party all day and night, money straight from stock market.', tag1: '✈️ Traveler', tag2: '🥘 Foodie', date: 'May 2020'},        
    ]
}

const getters: GetterTree<ViewState, RootState> = {
    getView(state) {
        return state.view
    }
}

const mutations: MutationTree<ViewState> = {    
    setView(state, viewType: string){
        state.view = viewType
    }
}
const actions: ActionTree<ViewState, RootState> = {    
    changeView({ commit }, viewType) {
        commit('setView', viewType)
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