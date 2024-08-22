<template>
    <div>
        <div class="mb-1">Árgerð</div>
        <div class="d-flex container-length">
            <div class="input-group me-3 min-length">
                <span class="input-group-text" id="basic-addon1">min</span>
                <input type="text" class="form-control" placeholder="1800" aria-label="min-year" aria-describedby="basic-addon1">
            </div>
            <div class="input-group">
                <span class="input-group-text" id="basic-addon1">max</span>
                <input type="text" class="form-control" placeholder="2024" aria-label="max-year" aria-describedby="basic-addon1">
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-length {
    width: 16.5rem;
}
</style>