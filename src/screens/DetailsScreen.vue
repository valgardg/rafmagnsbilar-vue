<template>
    <div class="mt-5">
        <div class="mt-5 row">
            <!-- image section -->
            <div class="col-6 g-0">
                <div>
                    <img class="selected-image" :src="selectedCar.images[currentImage]"/>
                </div>
                <div class="mt-4 d-flex slider-container">
                    <div v-for="(image, index) in selectedCar.images" @click="() => currentImage = index">
                        <img :src="image" class="sub-image"/>
                    </div>
                </div>
            </div>
            <!-- details section -->
            <div class="col-6 ps-5">
                <div class="overview-container h-100 d-flex flex-column justify-content-between">
                    <div>
                        <!-- car title -->
                        <div>
                            <div class="fs-2 fw-bold">{{ selectedCar.make }} {{ selectedCar.model }}</div>
                            <hr class="mt-2 mb-3"/>
                        </div>
                        <!-- car details -->
                        <div>
                            <div class="row">
                                <div class="col-6">
                                    <div>Árgerð</div>
                                    <div class="fs-3">{{ selectedCar.year }}</div>
                                </div>
                                <div class="col-6">
                                    <div>Ekin</div>
                                    <div class="fs-3">{{ selectedCar.kmDriven }}km</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div>Eldsneyti</div>
                                    <div class="fs-3">{{ selectedCar.fuelType }}</div>
                                </div>
                                <div class="col-6">
                                    <div>Drátur</div>
                                    <div class="fs-3">{{ selectedCar.mileage }}km</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div>Verð</div>
                                    <div class="fs-3">ISK {{ selectedCar.price }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- contanct button -->
                    <div class="">
                        <FyrirspurnButton />
                    </div>
                </div>
            </div>
        </div>
        <!-- description section -->
        <div class="mt-5">
            <div class="fs-5 fw-bold">Lýsing</div>
            <div class="mt-1">
                {{ selectedCar.description }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCarStore } from '@/stores/CarStore';
import { storeToRefs } from 'pinia';
import FyrirspurnButton from '@/components/buttons/FyrirspurnButton.vue';

const { selectedCar } = storeToRefs(useCarStore());
const currentImage = ref(0);
</script>

<style scoped>
/* images */
.sub-image {
    width: 4rem;
    margin-right: 1rem;
}
.selected-image {
    border-radius: 0.1rem;
}
/* image slider */
.slider-container {
    max-width: 50rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}
/* right side overview */
.overview-container {
    border: solid;
    border-width: 0.1rem;
    border-color: var(--c-primary-100);
    border-radius: 0.5rem;

    padding: 2.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}
</style>