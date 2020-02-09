import DesktopFilter from '../../components/DesktopFilter.vue'
import windowSize from '../../mixins/windowSize'

export default {
    components: { 
        'desktop-filter': DesktopFilter,
    },
    mixins: [windowSize],
    data() {
        return {
            
        }
    },
}