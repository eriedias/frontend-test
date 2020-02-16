<template>
    <div class="details-modal">

        <div class="container">
            <div class="modal" ref="modal">

                <header class="modal-header">
                    <h2 class="title">{{ listStore.businessInModal.name }}</h2>
                    <div class="rating">
                        <span class="icon-full-star star" v-for="fullstar in Math.floor(listStore.businessInModal.rating)" v-bind:key="'fullstar-'+fullstar"></span>
                        <span class="icon-half-star star" v-if="listStore.businessInModal.rating % 1 !== 0"></span>
                        <span class="icon-empt-star star" v-for="emptstar in Math.floor(5 - listStore.businessInModal.rating)" v-bind:key="'emptstar-'+emptstar"></span>
                    </div>
                    <div class="end-bar">
                        <div class="food-and-price">
                            <span class="food-type">
                                <span>{{ listStore.businessInModal.categories[0].title }}</span>
                            </span>
                            •
                            <span class="price">{{ listStore.businessInModal.price }}</span>
                        </div>
                        <div class="status">
                            <span class="icon-circle icon" :class="[listStore.businessInModal.hours[0].is_open_now ? 'open' : 'close']"></span>
                            <span class="text" v-if="listStore.businessInModal.hours[0].is_open_now">Open Now</span>
                            <span class="text" v-else>Close</span>
                        </div>
                    </div>
                </header>

                <section class="map-and-photos">
                    <p class="address"><span v-for="item in listStore.businessInModal.location.display_address" v-bind:key="item">{{ item }}</span></p>
                </section>

                <section class="reviews">
                    <p class="total">{{ listStore.businessInModal.review_count }} Reviews</p>
                    <div class="item" v-for="review in listStore.reviewsInModal" v-bind:key="review.id">
                        <figure>
                            <img :src="review.user.image_url">
                        </figure>
                        <div class="name-and-date">
                            <span class="name">{{ review.user.name }}</span>
                            <span class="date">{{ review.time_created.substring(0,10) }}</span>
                        </div>
                        <div class="text-and-rating">
                            <div class="review-rating">
                                <span class="icon-full-star star"></span>
                                <span class="icon-full-star star"></span>
                                <span class="icon-full-star star"></span>
                                <span class="icon-full-star star"></span>
                                <span class="icon-full-star star"></span>
                            </div>
                            <div class="text">
                                {{ review.text }}
                            </div>
                        </div>
                    </div>
                </section>

                <div class="buttons">
                    <button @click="close()">Close</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        modalopen: Boolean
    },
    data() {
        return {
            listStore: this.$store.state.listStore,
        }
    },
    methods: {
        close(){
            this.$emit('close')
        }
    },
    mounted: function() {
        window.addEventListener('click', (e) => {
            // TypeError: _this.$refs.modal is undefined
            if (this.$store.state.detailsModalOpen && !this.$refs.modal.contains(e.target)){
                this.$emit('close')
            }
        }),
        window.addEventListener('keydown', (e) => {
            if (this.$store.state.detailsModalOpen && e.key == 'Backspace') {
                this.$emit('close')
            }
        });
    },
}
</script>