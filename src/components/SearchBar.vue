<script lang="ts" setup>

import { ref } from "vue";
const movieTitle = ref("");
const emit = defineEmits([ 'search' ])

function search() {
    const movieFinded = movieTitle.value;
    emit( "search", movieFinded );
}

</script>

<template>
    <div class="full center margin main-container">
        <div class="search-container">
            <input v-model="movieTitle" type="text" placeholder="Type a Movie Title" />
            <button class="search-button" @click="search">Search Movie</button>
        </div>
    </div>
</template>

<style>
.main-container {
    margin: 10px;
    margin-top: 40px;
}

.search-container {
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-radius: 18px;
    border: 1px solid #666;
    gap: 15px;
}

.search-container:hover {
    border: 1px solid #fff;
}

.search-container button {
    cursor: pointer;
    transition: box-shadow 0.2s ease, scale .2s ease;
    padding: 10px;
    font-size: 20px;
    border-radius: 20px;
    background-color: #3d51ff;
    color: #ccc;
}

.search-container button:hover {
    box-shadow: 0px 0px 6px 3px #0051ff;
    scale: 1.02;
}

.search-container button:active {
    scale: 0.95;
}

.search-container input {
    flex-grow: 1;
    background: transparent;
    font-size: 30px;
    color: #ccc;
    outline: none;
}
</style>
