<template>
    <div class="fw-bold fs-3 mb-4">Vinsæl Bílamerki</div>
    <img src="@/assets/brands/bmw.svg" />    
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// dynamically import all svgs from the brands folder
const svgModules: Record<string, { default: any}> = import.meta.glob('@/components/brands/*.svg', { eager: true });

// create a reactive object to store svg components with their names
const svgUrls = reactive<Record<string, any>>({});

for (const path in svgModules) {
    console.log(path);
    // const fileName = path.split('/').pop()?.replace('.svg','')
    // if(fileName) {
    //     svgUrls[fileName] = svgModules[path];
    // }
}
</script>