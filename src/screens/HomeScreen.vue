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
    </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/input/SearchBar.vue';
import PriceRange from '@/components/input/PriceRange.vue';
import DrivenRange from '@/components/input/DrivenRange.vue';
import YearRange from '@/components/input/YearRange.vue';
import SortOptions from '@/components/input/SortOptions.vue';
</script>