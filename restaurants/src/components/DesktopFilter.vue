<template>
    <div class="filter-component">

        <div class="title">Filter By:</div>
        <div class="form-item">
            <div class="custom-checkbox">
                <label>
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    <span class="radio-text">Open Now</span>
                </label>
            </div>
        </div>
        <dropdown-select :name="this.selectPriceName" :options="this.$store.state.filterStore.prices" class="dropdown-select" @changeName="selectPrice($event)"></dropdown-select>
        <dropdown-select :name="this.selectCategoriesName" :options="this.$store.state.filterStore.categories" class="dropdown-select" @changeName="selectCategoriesName = $event"></dropdown-select>
        <button class="outline-button x-small-button disabled clear-button">Clear all</button>

    </div>
</template>

<script>
import DropdownSelect from './DropdownSelect.vue'

import { mapActions } from 'vuex'

export default {
    components: { 'dropdown-select': DropdownSelect },
    data() {
        return {
            selectPriceName: 'Price',
            selectCategoriesName: 'Categories',
        }
    },
    mounted() {
        
    },
    methods: {
        ...mapActions('filterStore', ['setPricesStore']),
        ...mapActions('listStore', ['to_list']),

        selectPrice(price){
            this.selectPriceName = price.title
            this.to_list(price.value)
        },
    },
}
</script>

<style lang="scss" scoped>
.filter-component {
    width: 100%;
    display: flex;
    align-items: center;
    .dropdown-select {
        margin-right: 30px;
    }
    .title {
        width: 100px;
    }
    .form-item {
        margin-right: 30px;
    }
    .clear-button {
        margin-left: auto;
    }
}
</style>