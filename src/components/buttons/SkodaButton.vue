<template>
    <div @click="handleClick">
        <div class="btn button-frame button-text">Skoða</div>
    </div>
</template>

<script setup lang="ts">
import { useCarStore } from '@/stores/CarStore';
import router from '@/router';
import type { Car } from '@/types/car';

const { selectCar } = useCarStore();

const props = withDefaults(defineProps<{
    car: Car
}>(), {

});

const handleClick = async () => {
    await selectCar(props.car);
    router.push('/car-details')
}
</script>

<style scoped>
.button-frame {
    background-color: var(--c-secondary-100);
    border-radius: 0.6rem;
}
.button-frame:hover {
    background-color: var(--c-secondary-90);
}
.button-text {
    color: var(--c-accent-100);
}
</style>