

const state = () => ({
    view: 'Grid',
    // testing, later use to populate all datas
    entries: [
        {id: 1, job: "Sr. Product Designer", experience: '5 years', location: 'San Francisco', industry: 'Hospitality', earnings: '$65,790', expenses: '$12,000', quote: 'Party all day and night, money straight from stock market.', tag1: '✈️ Traveler', tag2: '🥘 Foodie', date: 'May 2020'},
        {id: 1, job: "Sr. Product Designer", experience: '5 years', location: 'San Francisco', industry: 'Hospitality', earnings: '$65,790', expenses: '$12,000', quote: 'Party all day and night, money straight from stock market.', tag1: '✈️ Traveler', tag2: '🥘 Foodie', date: 'May 2020'},
        {id: 1, job: "Sr. Product Designer", experience: '5 years', location: 'San Francisco', industry: 'Hospitality', earnings: '$65,790', expenses: '$12,000', quote: 'Party all day and night, money straight from stock market.', tag1: '✈️ Traveler', tag2: '🥘 Foodie', date: 'May 2020'},
        {id: 1, job: "Sr. Product Designer", experience: '5 years', location: 'San Francisco', industry: 'Hospitality', earnings: '$65,790', expenses: '$12,000', quote: 'Party all day and night, money straight from stock market.', tag1: '✈️ Traveler', tag2: '🥘 Foodie', date: 'May 2020'},
        

    ]
})

const getters = {
    // eslint-disable-next-line 
    // getView: (state: any) => {
    //     return state.view
    // }
}

const mutations = {
    // eslint-disable-next-line 
    setView(state: any, viewType: string){
        state.view = viewType
    }
}
const actions = {
    // eslint-disable-next-line 
    changeView({ commit }: { commit: any}, viewType: string) {
        commit('setView', viewType)

    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}