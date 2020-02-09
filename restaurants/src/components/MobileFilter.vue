<template>
    <div class="filter-component">

        <!-- Active filters -->
        <div class="active-filters" :class="{'modal-open' : modalOpen}">
            <div class="title">Filter By:</div>
            <div class="select" @click="toggleModal()">
                <span class="label">{{ selectedString }}</span>
            </div>
        </div>

        <!-- Filter modal -->
        <div class="filter-modal" v-if="modalOpen">

            <header>
                <div class="container">
                    <span class="title">Filter By</span>
                    <button class="close-button" @click="toggleModal()">
                        <span class="icon-close icon"></span>
                    </button>
                </div>
            </header>

            <div class="buttons">
                <div class="container">
                    <div class="list">
                        <div class="item">
                            <button class="outline-button small-button disabled">Clear all</button>
                        </div>
                        <div class="item">
                            <button class="small-button disabled">Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="container">
                    <div class="field">
                        <div class="open-close-toggle">
                            <label>Open now</label>
                            <mobile-toggle :active="this.restaurantOpen" @toggle="toggleRestaurantOpen($event)"></mobile-toggle>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="container">
                    <div class="field label-top">
                        <label>Price</label>
                        <mobile-inline-select :options="this.priceOptions" @selected="setSelectedPrice($event)"></mobile-inline-select>
                    </div>
                </div>
            </div>
            <div>
                <div class="container">
                    <div class="field label-top">
                        <label>Categories <span class="description">Select One</span></label>
                        <mobile-select :options="this.selectCategoriesOptions" @selected="setSelectedCategory($event)"></mobile-select>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import MobileToggle from './MobileToggle.vue'
import MobileInlineSelect from './MobileInlineSelect.vue'
import MobileSelect from './MobileSelect.vue'
export default {
    components: { 
        'mobile-toggle': MobileToggle,
        'mobile-inline-select': MobileInlineSelect,
        'mobile-select': MobileSelect,
    },
    data() {
        return {
            modalOpen: false,
            restaurantOpen: false,
            defaultSelecteds: {
                price: 'All',
                category: 'All',
                open: false
            },
            selecteds: {
                price: 'All',
                category: 'All',
                open: this.restaurantOpen
            },
            defaultSelectedString: 'All',
            selectedString: 'All',
            priceOptions: [
                {value: 'All', status: false}, 
                {value: '$', status: false},
                {value: '$$', status: false},
                {value: '$$$', status: false},
                {value: '$$$$', status: false},
            ],
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
    methods: {
        toggleModal() {
            this.modalOpen = !this.modalOpen
            this.modalOpen ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open')
        },
        toggleRestaurantOpen(status){
            this.restaurantOpen = status
            this.selecteds.open = status
            if (!this.equalSelectedObjects()){
                this.setSelectedString()
            }
        },
        setSelectedPrice(price) {
            this.selecteds.price = price
            if (!this.equalSelectedObjects()){
                this.setSelectedString()
            }
        },
        setSelectedCategory(category) {
            this.selecteds.category = category
            if (!this.equalSelectedObjects()){
                this.setSelectedString()
            }
        },
        // Needs to be refactored
        setSelectedString(){
            let arraySelecteds = []
            if (this.selecteds.price !== this.defaultSelecteds.price){
                arraySelecteds.push(this.selecteds.price)
            }
            if (this.selecteds.category !== this.defaultSelecteds.category){
                arraySelecteds.push(this.selecteds.category)
            }
            if (this.selecteds.open === true){
                arraySelecteds.push(arraySelecteds.length > 0 ? 'open now' : 'Open now')
            }
            if (arraySelecteds.length > 1) {
                this.selectedString = arraySelecteds.slice(0, -1).join(', ')+' and '+arraySelecteds.slice(-1)
            } else {
                this.selectedString = arraySelecteds[0]
            }
        },
        // Needs to be refactored
        equalSelectedObjects(){
            if (this.selecteds.price === this.defaultSelecteds.price && 
                this.selecteds.category === this.defaultSelecteds.category && 
                this.selecteds.open === false){
                this.selectedString = this.defaultSelectedString
                return true
            } else {
                return false
            }
        }

    },
}
</script>

<style lang="scss">
@import '../styles/base/colors';
@import '../styles/base/fonts';

body.modal-open {
    height: 100vh;
    overflow-y: hidden;
}
.container {
    padding: 0 25px;
}

.filter-component {
    width: 100%;
    .active-filters {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title { margin-right: 20px; }
        .select {
            position: relative;
            flex-grow: 1;
            .label {
                border-bottom: 1px solid #c8c8c8;
                height: 30px;
                padding-right: 50px;
                display: flex;
                align-items: center;
                position: relative;
                color: $blue;
                cursor: pointer;
                font-size: 16px;
            }
            .label::after {
                content: '';
                position: absolute;
                top: 10px; right: 0;
                font-family: 'front-end-test';
                content: '\61';
                pointer-events: none;
                font-size: 13px;
                color: #9b9b9b;
            }
        }
    }
    .filter-modal {
        overflow: scroll;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
        background: #FFF;
        width: 100%;
        height: 100%;
        header {
            margin-bottom: 20px;
            border-bottom: 1px solid #e6e6e6;
            .container {
                justify-content: space-between;
                align-items: center;
                display: flex;
                .title {
                    font-size: 15px;
                }
                .close-button {
                    background: none;
                    color: #1c1c1c;
                    padding: 0;
                    font-size: 20px;
                    .icon {
                        display: inline-block;
                        padding-top: 3px;
                    }
                }
                .close-button:hover {
                    color: $red;
                }
            }
        }
        .buttons {
            padding-bottom: 20px;
            border-bottom: 1px solid #e6e6e6;
            .list {
                display: flex;
                margin-right: -10px;
                margin-left: -10px;
                .item {
                    display: flex;
                    padding-right: 10px;
                    padding-left: 10px;
                    flex-grow: 1;
                    button {
                        width: 100%;
                    }
                }
            }
        }
        .field {
            padding: 25px 0;
            border-bottom: 1px solid #e6e6e6;
            label {
                position: relative;
                font-family: HelveticaNeueMedium;
                color: #1c1c1c;
                font-size: 12px;
                text-transform: uppercase;
                .description {
                    text-transform: capitalize;
                    color: #cccccc;
                    position: absolute;
                    top: 0;
                    right: 0;
                }
            }
            .open-close-toggle {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
        .field.label-top {
            label {
                display: block;
                margin-bottom: 15px;
            }
        }
    }
}

</style>