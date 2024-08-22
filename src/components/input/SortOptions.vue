<template>
    <div>
        <div>Raða eftir</div>
        <div class="input-group">
            <select class="form-select" aria-label="Default select example">
                <option selected>Engu</option>
                <option value="1">Verð</option>
                <option value="2">Árgerð</option>
                <option value="3">Vegalengd</option>
            </select>
            <button class="input-group-text btn caret-button" @click="() => (sortOrder = !sortOrder)" id="basic-addon1">
                <div v-if="sortOrder">
                    <CaretUp class="caret-icon"/>
                </div>
                <div v-else>
                    <CaretDown class="caret-icon"/>
                </div>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CaretUp from '@/components/icons/CaretUp.vue';
import CaretDown from '@/components/icons/CaretDown.vue';

const sortOrder = ref(true);
</script>

<style scoped>
.caret-button {
    border-color: var(--bs-border-color);
}
.caret-icon {
    color: var(--bs-body-color);
}
</style>