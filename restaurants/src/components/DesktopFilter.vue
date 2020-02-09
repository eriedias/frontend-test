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
        <dropdown-select :name="this.selectPriceName" :options="this.selectPriceOptions" class="dropdown-select" @changeName="selectPriceName = $event"></dropdown-select>
        <dropdown-select :name="this.selectCategoriesName" :options="this.selectCategoriesOptions" class="dropdown-select" @changeName="selectCategoriesName = $event"></dropdown-select>
        <button class="outline-button x-small-button disabled clear-button">Clear all</button>

    </div>
</template>

<script>
import DropdownSelect from './DropdownSelect.vue'
export default {
    components: { 'dropdown-select': DropdownSelect },
    data() {
        return {
            selectPriceName: 'Price',
            selectPriceOptions: [
                {value: 'All', status: false}, 
                {value: '$', status: false},
                {value: '$$', status: false},
                {value: '$$$', status: false},
                {value: '$$$$', status: false},
            ],
            selectCategoriesName: 'Categories',
            selectCategoriesOptions: [
                {value: 'All', status: false}, 
                {value: 'Italian', status: false},
                {value: 'Seafood', status: false},
                {value: 'Steakhouses', status: false},
                {value: 'Japaneses', status: false},
                {value: 'American', status: false},
                {value: 'Mexican', status: false},
                {value: 'Thai', status: false},
            ]
        }
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