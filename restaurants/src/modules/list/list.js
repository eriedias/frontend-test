import DesktopFilter from '../../components/DesktopFilter.vue'
import MobileFilter from '../../components/MobileFilter.vue'
import windowSize from '../../mixins/windowSize'
//import axios from 'axios'

import { mapActions } from 'vuex'

export default {
    components: { 
        'desktop-filter': DesktopFilter,
        'mobile-filter': MobileFilter,
    },
    mixins: [windowSize],
    mounted() {
        this.to_list(this.$store.state.filterStore.filter)
    },
    methods: {
        ...mapActions('listStore', ['to_list']),
    },
    computed: {
        list: {
            get () {
                return this.$store.state.listStore.list
            }
        },
        loadedWithoutResults: {
            get () {
                return this.$store.state.listStore.loadedWithoutResults
            }
        }
    },
}