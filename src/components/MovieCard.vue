<script lang="ts" setup>
interface Props {
    name: string;
    year: string;
    rating?: [{Value: string}];
    imageUrl?: string;
    description?: string
}

const props = defineProps<Props>();
</script>

<template>
    <div class="container">
        <div class="img-container">
            <img :src="imageUrl" />
        </div>
        <div class="info-container">
            <div class="flex-beetween">
                <div>
                    <h3 class="movie-name">{{ name }}</h3>
                    <p class="match" v-if="rating">Rating: {{ rating[0].Value }}</p>
                </div>
                <p class="movie-name">{{ year }}</p>
            </div>
            <p class="description">{{ description }}...</p>
        </div>
    </div>
</template>

<style scoped>
.movie-name {
    font-size: 24px;
    font-weight: bold;
}

.container {
    border: 1px solid #141414;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(7, 0, 31, 0.205);
    color: #ccc;
    backdrop-filter: blur(10px);
    position: relative;
    width: 350px;
}

.img-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.img-container img {
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.img-container img:hover {
    transform: scale(1.1);
}

.info-container {
    padding: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #0000004e;
    backdrop-filter: blur(10px);
}

.description {
    margin-top: 30px;
}
</style>
