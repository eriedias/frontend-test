import DesktopFilter from '../../components/DesktopFilter.vue'
import MobileFilter from '../../components/MobileFilter.vue'
import windowSize from '../../mixins/windowSize'

export default {
    components: { 
        'desktop-filter': DesktopFilter,
        'mobile-filter': MobileFilter,
    },
    mixins: [windowSize],
    data() {
        return {
            
        }
    },
}