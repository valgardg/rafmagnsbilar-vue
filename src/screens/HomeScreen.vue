<template>
    <!-- main container -->
    <div class="w-100 mt-5">
        <!-- search section -->
        <div>
            <div class="fw-bold fs-3">Leitartól</div>
            <div class="w-100 d-flex justify-content-between align-items-end">
                <SearchBar />
                <PriceRange />
                <DrivenRange />
                <YearRange />
                <SortOptions />
            </div>
        </div>
        <!-- listings section -->
        <div class="mb-5">
            <div class="fw-bold fs-3 mt-5 mb-3">Bílar í boði</div>
            <div class="row row-cols-3 gy-4">
                <div v-for="(car, index) in cars" class="">
                    <CarListing
                        :key="index"
                        :make="car.make"
                        :model="car.model"
                        :year="car.year"
                        :price="car.price"
                        :mileage="car.mileage"
                        :fuelType="car.fuelType"
                        :thumbnail="car.images[0]"
                    />
                </div>
                <!-- <div class=""> ! WRAPPING IN DIV IS 
                    <CarListing />  ! IMPORTANT FOR ROW 
                </div>              ! TO ALIGN CORRECTLY -->
            </div>
        </div>
        <!-- car brands section -->
        <div>
            <CarBrands />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
// search tools
import SearchBar from '@/components/input/SearchBar.vue';
import PriceRange from '@/components/input/PriceRange.vue';
import DrivenRange from '@/components/input/DrivenRange.vue';
import YearRange from '@/components/input/YearRange.vue';
import SortOptions from '@/components/input/SortOptions.vue';
// car listings
import CarListing from '@/components/CarListing.vue';
// car brands
import CarBrands from '@/components/CarBrands.vue';

import { useCarStore } from '@/stores/CarStore';
import { storeToRefs } from 'pinia';

const { fetchCars } = useCarStore();
const { cars } = storeToRefs(useCarStore());

onMounted(async () => {
    await fetchCars();
});
</script>