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
            </div>
        </aside>

    </div>
</template>

<script src='./list.js'></script>