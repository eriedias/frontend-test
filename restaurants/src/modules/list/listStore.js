import { axiosRequest, BUSINESS_SEARCH } from '../../utils/Requests'

export default {
    namespaced: true,
    state: {
        list: [],
        loadedWithoutResults: false
    },
    mutations: {
        CHANGE_LIST(state, payload) {
            state.list = payload.businesses
        },
        LOADED_WITHOUT_RESULTS(state, payload) {
            state.loadedWithoutResults = payload
        }
    },
    actions: {
        to_list({ commit, state, /*rootState*/ }, filter) {
            return new Promise ((resolve, reject) => {
                axiosRequest.get(BUSINESS_SEARCH,
                {
                    params: {
                        //latitude: rootState.coordinates.lat,
                        //longitude: rootState.coordinates.lng,
                        location: 'Las Vegas',
                        radius: 40000,
                        price: filter.price.value,
                        categories: filter.category.value,
                        open_now: filter.onlyOpenNow
                    }
                }
                ).then(response => {
                    if (response.data.status === Response.SUCESSO) {
                        commit('CHANGE_LIST', response.data)
                        state.list.length == 0 ? commit('LOADED_WITHOUT_RESULTS', true) : commit('LOADED_WITHOUT_RESULTS', false)
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
        }

    }
}