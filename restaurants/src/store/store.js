import Vue from 'vue'
import Vuex from 'vuex'

import listStore from '../modules/list/listStore'
import filterStore from './filterStore'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        coordinates: {
            lat: '37.786882',
            lng: '-122.399972'
        }
    },
    modules: {
        listStore,
        filterStore
    }
})