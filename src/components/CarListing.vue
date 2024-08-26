<template>
    <div class="d-flex flex-column listing-frame">
        <img class="listing-image" src="@/assets/images/kiaTitleImage.jpg" />
        <div class="ps-3 pe-3 pb-3">
            <div class="mt-1 fw-bold fs-5">2023 Audi Q8 Etron 55</div>
            <hr class="m-0 p-0">
            <div class="row g-0">
                <div class="col-8 d-flex flex-column">
                    <div class="d-flex justify-content-between">
                        <div>ISK 14,790,000</div>
                        <div>Ekið 2500km</div>
                    </div>
                    <div>Rafmagns</div>
                </div>
                <div class="col-4 d-flex align-items-end justify-content-end">
                    <SkodaButton />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SkodaButton from '@/components/buttons/SkodaButton.vue';
</script>

<style scoped>
.listing-frame {
    width: 26rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15), 0 6px 12px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.1s ease-in-out;
}
.listing-frame:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 24px 0 rgba(0, 0, 0, 0.15);
}
.listing-image {
    height: 12rem;
    object-fit: cover;
}
</style>