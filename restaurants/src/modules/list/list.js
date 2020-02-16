import DesktopFilter from '../../components/DesktopFilter.vue'
import MobileFilter from '../../components/MobileFilter.vue'
import DetailsModal from '../../components/DetailsModal.vue'
import windowSize from '../../mixins/windowSize'

import { mapActions } from 'vuex'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    components: { 
        'desktop-filter': DesktopFilter,
        'mobile-filter': MobileFilter,
        'details-modal': DetailsModal,
        'loading': Loading
    },
    mixins: [windowSize],
    mounted() {
        this.to_list(this.$store.state.filterStore.filter)
    },
    methods: {
        ...mapActions('listStore', ['to_list', 'to_detail']),

        showDetails(id){
            return new Promise (() => { 
                this.to_detail(id)
                .then(() => {
                    this.$store.state.detailsModalOpen = true
                })
                .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(error))
                })
            })
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