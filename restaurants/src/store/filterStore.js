export default {
    namespaced: true,
    state: {
        prices: [
            {value: '1, 2, 3, 4', title: 'All', status: false}, 
            {value: '1', title: '$', status: false},
            {value: '2', title: '$$', status: false},
            {value: '3', title: '$$$', status: false},
            {value: '4', title: '$$$$', status: false},
        ],
        categories: [
            {value: '', title: 'All', status: false}, 
            {value: 'italian', title: 'Italian', status: false},
            {value: 'seafood', title: 'Seafood', status: false},
            {value: 'steakhouses', title: 'Steakhouses', status: false},
            {value: 'japaneses', title: 'Japaneses', status: false},
            {value: 'american', title: 'American', status: false},
            {value: 'mexican', title: 'Mexican', status: false},
            {value: 'thai', title: 'Thai', status: false},
        ],
        filter: {
            onlyOpenNow: false,
            price: {value: '1, 2, 3, 4', title: 'Pricesss'},
            category: {value: '', title: 'Categoriesss'}
        }
    },
    mutations: {
        CHANGE_FILTER_ONLY_OPEN_NOW(state, payload) {
            state.filter.onlyOpenNow = payload
        },
        CHANGE_FILTER_PRICE(state, payload) {
            state.filter.price = payload
        },
        CHANGE_FILTER_CATEGORY(state, payload) {
            state.filter.category = payload
        },
    },
    actions: {
        updateFilterPriceState({ commit }, price){
            commit('CHANGE_FILTER_PRICE', price)
        },
        updateFilterCategoryState({ commit }, category){
            commit('CHANGE_FILTER_CATEGORY', category)
        },
    },
}