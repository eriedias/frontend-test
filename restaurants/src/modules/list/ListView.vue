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

            <div class="container">
                <h2 class="list-title">All Restaurants</h2>
                <ul class="list">

                    <li class="item">
                        <figure>
                            <img :src="require('../../assets/images/sample-restaurant-1.jpg')">
                        </figure>
                        <div class="description">
                            <h3 class="item-title">Very Long Name Restaurants Number 1 In List</h3>
                            <div class="rating">
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                            </div>
                            <div class="end-bar">
                                <div class="food-and-price">
                                    <span class="food-type">Thai</span>
                                    •
                                    <span class="price">$120</span>
                                </div>
                                <div class="status">
                                    <span class="icon-circle icon open"></span>
                                    <span class="text">Open Now</span>
                                </div>
                            </div>
                        </div>
                        <button class="learn-more-button">Learn More</button>
                    </li>

                    <li class="item">
                        <figure>
                            <img :src="require('../../assets/images/sample-restaurant-1.jpg')">
                        </figure>
                        <div class="description">
                            <h3 class="item-title">Restaurant 2</h3>
                            <div class="rating">
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                            </div>
                            <div class="end-bar">
                                <div class="food-and-price">
                                    <span class="food-type">Seafood</span>
                                    •
                                    <span class="price">$220</span>
                                </div>
                                <div class="status">
                                    <span class="icon-circle icon close"></span>
                                    <span class="text">Close</span>
                                </div>
                            </div>
                        </div>
                        <button class="learn-more-button">Learn More</button>
                    </li>

                    <li class="item">
                        <figure>
                            <img :src="require('../../assets/images/sample-restaurant-1.jpg')">
                        </figure>
                        <div class="description">
                            <h3 class="item-title">Restaurant 3</h3>
                            <div class="rating">
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                            </div>
                            <div class="end-bar">
                                <div class="food-and-price">
                                    <span class="food-type">Thai</span>
                                    •
                                    <span class="price">$120</span>
                                </div>
                                <div class="status">
                                    <span class="icon-circle icon open"></span>
                                    <span class="text">Open Now</span>
                                </div>
                            </div>
                        </div>
                        <button class="learn-more-button">Learn More</button>
                    </li>

                    <li class="item">
                        <figure>
                            <img :src="require('../../assets/images/sample-restaurant-1.jpg')">
                        </figure>
                        <div class="description">
                            <h3 class="item-title">Restaurant 3</h3>
                            <div class="rating">
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                            </div>
                            <div class="end-bar">
                                <div class="food-and-price">
                                    <span class="food-type">Thai</span>
                                    •
                                    <span class="price">$120</span>
                                </div>
                                <div class="status">
                                    <span class="icon-circle icon open"></span>
                                    <span class="text">Open Now</span>
                                </div>
                            </div>
                        </div>
                        <button class="learn-more-button">Learn More</button>
                    </li>

                    <li class="item">
                        <figure>
                            <img :src="require('../../assets/images/sample-restaurant-1.jpg')">
                        </figure>
                        <div class="description">
                            <h3 class="item-title">Restaurant 3</h3>
                            <div class="rating">
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                            </div>
                            <div class="end-bar">
                                <div class="food-and-price">
                                    <span class="food-type">Thai</span>
                                    •
                                    <span class="price">$120</span>
                                </div>
                                <div class="status">
                                    <span class="icon-circle icon open"></span>
                                    <span class="text">Open Now</span>
                                </div>
                            </div>
                        </div>
                        <button class="learn-more-button">Learn More</button>
                    </li>

                    <li class="item">
                        <figure>
                            <img :src="require('../../assets/images/sample-restaurant-1.jpg')">
                        </figure>
                        <div class="description">
                            <h3 class="item-title">Restaurant 3</h3>
                            <div class="rating">
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                                <span class="icon-star star"></span>
                            </div>
                            <div class="end-bar">
                                <div class="food-and-price">
                                    <span class="food-type">Thai</span>
                                    •
                                    <span class="price">$120</span>
                                </div>
                                <div class="status">
                                    <span class="icon-circle icon open"></span>
                                    <span class="text">Open Now</span>
                                </div>
                            </div>
                        </div>
                        <button class="learn-more-button">Learn More</button>
                    </li>

                </ul>
            </div>

        </section>

    </div>
</template>

<script src='./list.js'></script>