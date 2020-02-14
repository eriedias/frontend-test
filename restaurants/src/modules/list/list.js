import DesktopFilter from '../../components/DesktopFilter.vue'
import MobileFilter from '../../components/MobileFilter.vue'
import DetailsModal from '../../components/DetailsModal.vue'
import windowSize from '../../mixins/windowSize'
//import axios from 'axios'

import { mapActions } from 'vuex'

export default {
    components: { 
        'desktop-filter': DesktopFilter,
        'mobile-filter': MobileFilter,
        'details-modal': DetailsModal,
    },
    mixins: [windowSize],
    mounted() {
        this.to_list(this.$store.state.filterStore.filter)
    },
    data() {
        return {
            showDetailsModal: false,
        }
    },
    methods: {
        ...mapActions('listStore', ['to_list', 'to_detail']),
        showDetails(id){
            this.to_detail(id)
            this.showDetailsModal = !this.showDetailsModal
        }
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