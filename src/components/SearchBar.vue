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
            <input v-model="movieTitle" type="text" placeholder="Type a Movie Title" @keyup.enter="search"/>
            <button class="search-button" @click="search">Search Movie</button>
        </div>
    </div>
</template>

<style>

.search-container {
    max-width: 800px;
    width: 100%;
    display: flex;
    @media screen and (max-width: 400px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: none;
    }
    padding: 10px 20px;
    border-radius: 18px;
    align-items: center;
    border: 1px solid #666;
    gap: 15px;
}

.search-container input {
    flex-grow: 1;
    background: transparent;
    font-size: 30px;
    min-width: 0;
    color: #ccc;
    outline: none;
    @media screen and (max-width: 400px) {
        width: 100%;
    }
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
    background-color: #3dff7e;
    color: #222;
}

.search-container button:hover {
    box-shadow: 0px 0px 6px 3px #00ff0d93;
    scale: 1.02;
}

.search-container button:active {
    scale: 0.95;
}

</style>
