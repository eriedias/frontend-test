<template>
    <div>

        <!-- Main Header -->
        <header id="main-header">
            <div class="container">
                <h1>Restaurants <span style="font-size:15px; color: red">{{ windowSize.width }}x{{ windowSize.height }}</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique lorem sed mauris laoreet hendrerit.</p>
            </div>
        </header>

        <!-- Main Filter -->
        <aside class="main-filter">
            <div class="container flex-middle">
                <desktop-filter v-if="windowSize.width > 767"></desktop-filter>
                <mobile-filter v-else></mobile-filter>
            </div>
        </aside>
        
        
        <!-- Restaurants List -->
        <section class="restaurants-list">

            <div class="container" v-if="loadedWithoutResults">
                <h2 class="list-title">No restaurants found near you.</h2>
            </div>

            <div class="container" v-else>
                <h2 class="list-title">All Restaurants</h2>
                <ul class="list">

                    <li class="item" v-for="item in list" v-bind:key="item.id">
                        <figure>
                            <img :src="item.image_url">
                        </figure>
                        <div class="description">
                            <h3 class="item-title">{{ item.name }}</h3>
                            <div class="rating">
                                <span class="icon-full-star star" v-for="(n, index) in Math.floor(item.rating)" v-bind:key="index"></span>
                                <span class="icon-half-star star" v-if="item.rating % 1 !== 0"></span>
                                <span class="icon-empt-star star" v-for="(n, index) in Math.floor(5 - item.rating)" v-bind:key="index"></span>
                            </div>
                            <div class="end-bar">
                                <div class="food-and-price">
                                    <span class="food-type">
                                        <!-- All categories -->
                                        <!--
                                        <span v-for="(categ, index) of item.categories" v-bind:key="index">{{ categ.title }}<span v-if="index != Object.keys(item.categories).length - 1">, </span></span>
                                        -->
                                        <!-- Just one category -->
                                        <span>{{ item.categories[0].title }}</span>
                                    </span>
                                    •
                                    <span class="price">{{ item.price }}</span>
                                </div>
                                <div class="status">
                                    <!-- The Yelp API listing endpoint does not provide a parameter for open restaurants. -->
                                    <!-- Using "is_closed" below, but I think this parameter is for restaurants that have finished their work. -->
                                    <span class="icon-circle icon open" :class="[item.is_closed ? 'close' : 'open']"></span>
                                    <span class="text" v-if="item.is_closed">Close</span>
                                    <span class="text" v-else>Open Now</span>
                                </div>
                            </div>
                        </div>
                        <!-- @close="showDetailsModal = false" não está funcionando -->
                        <button class="learn-more-button" @click="showDetails(item.id)">Learn More </button>
                    </li>

                </ul>
            </div>

        </section>

        <details-modal v-if="showDetailsModal" @close="showDetailsModal = false"></details-modal>

    </div>
</template>

<script src='./list.js'></script>