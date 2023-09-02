<script setup lang="ts">
import { ref, type Ref } from "vue";
import { getMovieByTitle } from "./API"

import SearchBar from "./components/SearchBar.vue";
import MovieCard from "./components/MovieCard.vue";
import Loader from "./components/Loader.vue";

const movie: Ref<Movie | null> = ref(null)
const searchHistory: Ref<string[]> = ref([])
const searching = ref(false)
const error = ref<string | null>( null );

async function sumbitSearch( search: string ) {
    error.value = null;
    movie.value = null;
    searching.value = true;
    searchHistory.value.push(search);
    const findedMovie: Movie = await getMovieByTitle(search);
    if( findedMovie.Response == "False" ) {
        searching.value = false;
        error.value = "No se encontro";
        return;
    }
    if( findedMovie.Ratings.length <= 0 ) {
        searching.value = false;
        error.value = "No se encontro";
        return;
    }
    console.log( findedMovie );
    movie.value = findedMovie;
    searching.value = false;
    error.value = null
}

</script>

<template>
    <div class="center">
        <h1 class="app-name">Find Movie if exists</h1>
    </div>
    <SearchBar @search="sumbitSearch"/>

    <div class="center movie-container">
        <div v-if="searching">
            <Loader />
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>
    
        <div v-if="movie">
            <MovieCard :name="movie.Title" :year="movie.Year" :image-url="movie.Poster" :rating="movie.Ratings" :description="movie.Plot"/>
        </div>
    </div>
    <ul class="center history-container">
        <h2>Historial</h2>
        <div v-for="item in searchHistory" class="history">
            <li class="history-item">> {{ item }}</li>
        </div>
    </ul>
</template>

<style scoped>

ul h2 {
    font-size: 30px;
    color: rgb(80, 80, 255);
}

.app-name {
    font-size: 40px;
    background-image: linear-gradient(to right,#313eff, #8b32ff);
    font-weight: bolder;
    background-clip: text;
    color: transparent;
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
        max-height: 210px;
        overflow-y: scroll;
    }

    .history-item {
        font-size: 18px;
        list-style: none;
    }

</style>
