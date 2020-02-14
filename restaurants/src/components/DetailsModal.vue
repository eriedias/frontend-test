<template>
    <div class="details-modal">

        <div class="container">
            <div class="modal">
                <figure class="modal-photo">
                    <img :src="listStore.businessInModal.image_url">
                </figure>
                <div class="modal-body">
                    <h2 class="title">{{ listStore.businessInModal.name }}</h2>
                    <p class="text-detail"><span class="label">Address:</span>
                        <span class="text">
                            <span v-for="item in listStore.businessInModal.location.display_address" v-bind:key="item">{{ item }}</span>
                        </span>
                    </p>
                    <p class="text-detail"><span class="label">Phone:</span>
                        <span class="text">{{ listStore.businessInModal.display_phone }}</span>
                    </p>
                </div>
                <div class="buttons">
                    <button @click="close()">Close</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
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
}
</script>