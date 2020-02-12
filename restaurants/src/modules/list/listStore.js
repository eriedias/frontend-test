import { axiosRequest, BUSINESS_SEARCH } from '../../utils/Requests'
//import axios from 'axios'

export default {
    namespaced: true,
    state: {
        list: [],
        loadedWithoutResults: false
    },
    mutations: {
        CHANGE_LIST(state, payload) {
            state.list = payload.businesses
            // console.log(state.list)
        },
        LOADED_WITHOUT_RESULTS(state, payload) {
            state.loadedWithoutResults = payload
        }
    },
    actions: {
        to_list({ commit, state, rootState }, /*list*/) {
            return new Promise ((resolve, reject) => {
                axiosRequest.get(BUSINESS_SEARCH,
                {
                    params: {
                        latitude: rootState.coordinates.lat,
                        longitude: rootState.coordinates.lng
                    }
                }
                ).then(response => {
                    // eslint-disable-next-line no-console
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