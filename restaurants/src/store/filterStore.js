import { axiosRequest, CATEGORIES } from '../utils/Requests'

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
            price: 'All',
            category: 'All'
        }
    },
    mutations: {
        CHANGE_PRICES(state, payload) {
            state.prices = payload
            console.log(state.prices)
        },
        CHANGE_CATEGORIES(state, payload) {
            state.categories = payload
        },
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
        /*
        setPricesStore({ commit }, prices){
            commit('CHANGE_PRICES', prices)
        },
        */


        // Will not be used
        categorize(/*{ commit, state },*/) {
            return new Promise ((resolve, reject) => {
                axiosRequest.get(CATEGORIES,
                {
                    params: {
                        locale: 'en_US'
                    }
                }
                ).then(response => {
                    if (response.data.status === Response.SUCESSO) {
                        console.log('response.data:')
                        console.log(response.data.categories[0])
                        resolve()
                    } else {
                        reject()
                    }
                })
                .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.log(JSON.stringify(error))
                })
            })
        },


    },
}