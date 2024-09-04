<template>
    <div>
        <div>Details people!</div>
        <div>{{ selectedCar.make }}</div>
        <div>{{ selectedCar.model }}</div>
        <div>{{ selectedCar.year }}</div>
        <div>{{ selectedCar.price }}</div>
        <div>{{ selectedCar.mileage }}</div>
        <div>{{ selectedCar.fuelType }}</div>
        <div>{{ selectedCar.images }}</div>
    </div>
</template>

<script setup lang="ts">
import { useCarStore } from '@/stores/CarStore';
import { storeToRefs } from 'pinia';

const { selectedCar } = storeToRefs(useCarStore());
</script>