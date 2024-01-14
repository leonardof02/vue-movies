<script setup lang="ts">
import { ref, type Ref } from "vue";
import { getMovieByTitle } from "./API"

import SearchBar from "./components/SearchBar.vue";
import MovieCard from "./components/MovieCard.vue";
import Loader from "./components/Loader.vue";
import type { Movie } from "./types";

const movie: Ref<Movie | null> = ref(null)
const searchHistory: Ref<string[]> = ref([])
const isSearching = ref(false)
const error = ref<string | null>(null);

async function sumbitSearch(search: string) {
    error.value = null;
    movie.value = null;
    isSearching.value = true;
    searchHistory.value.push(search);
    const findedMovie: Movie = await getMovieByTitle(search);

    if (findedMovie.Response == "False") {
        isSearching.value = false;
        error.value = "No se encontro";
        return;
    }

    if (findedMovie.Ratings.length <= 0) {
        isSearching.value = false;
        error.value = "No se encontro";
        return;
    }

    movie.value = findedMovie;
    isSearching.value = false;
    error.value = null
}

</script>

<template>
    <div class="center">
        <h1 class="app-name">Find Movie if exists</h1>
    </div>
    <SearchBar @search="sumbitSearch" />

    <div class="center movie-container">
        <div v-if="isSearching">
            <Loader />
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <div v-if="movie">
            <MovieCard :name="movie.Title" :year="movie.Year" :image-url="movie.Poster" :rating="movie.Ratings"
                :description="movie.Plot" />
        </div>
    </div>
    <div class="history-scroll">
        <ul class="center history-container">
            <h2>Historial</h2>
            <div v-for="item in searchHistory" class="history" v-bind:key="searchHistory.indexOf(item)">
                <li class="history-item">> {{ item }}</li>
            </div>
        </ul>
    </div>
</template>

<style scoped>

.history-scroll {
    max-height: 240px;
    overflow-y: auto;
}

h2 {
    margin-top: 20px;
    font-size: 30px;
    color: #5fff50;
}

.app-name {
    font-size: 60px;
    background-image: linear-gradient(to right, #31ff6f, #61b1f3);
    font-weight: bolder;
    background-clip: text;
    color: transparent;
    text-align: center;
}

.error {
    color: brown;
    font-size: 40px;
}

.movie-container {
    min-height: 400px;
}

.history {
    color: white;
    max-width: 600px;
    width: 100%;
    padding: 10px;
}

.history-container {
    border: 1px solid #252525;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.history-item {
    font-size: 18px;
    list-style: none;
}
</style>
