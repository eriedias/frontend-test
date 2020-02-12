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
        // Listing with all prices
        this.to_list('1, 2, 3, 4')
        //console.log(this.$store.state.listStore.list)

        this.$getLocation()
            .then(coordinates => {
                this.$store.state.coordinates.lat = coordinates.lat
                this.$store.state.coordinates.lng = coordinates.lng
                this.to_list()
            }
        ).catch((error) => {
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(error))
        })
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