<template>
    <div class="mt-5">
        <div class="mt-5 row">
            <!-- image section -->
            <div class="bg-danger col-6 g-0">
                <div>
                    <img :src="selectedCar.images[currentImage]"/>
                </div>
                <div class="mt-4 d-flex bg-warning slider-container">
                    <div v-for="(image, index) in selectedCar.images" @click="() => currentImage = index">
                        <img :src="image" class="sub-image"/>
                    </div>
                </div>
            </div>
            <!-- details section -->
            <div class="col-6">
                <div>Details section</div>
            </div>
        </div>
        <!-- description section -->
        <div class="mt-5">
            <div>Lýsing</div>
            <div>
                {{ selectedCar.description }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCarStore } from '@/stores/CarStore';
import { storeToRefs } from 'pinia';

const { selectedCar } = storeToRefs(useCarStore());
const currentImage = ref(0);
</script>

<style scoped>
/* images */
.sub-image {
    width: 4rem;
    margin-right: 1rem;
}
/* image slider */
.slider-container {
    max-width: 50rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}
</style>