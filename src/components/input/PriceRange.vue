<template>
    <div>
        <div class="mb-1">Verð</div>
        <div class="d-flex container-length">
            <div class="input-group me-3">
                <span class="input-group-text" id="basic-addon1">min</span>
                <input type="text" class="form-control" placeholder="0" aria-label="min-price" aria-describedby="basic-addon1">
            </div>
            <div class="input-group">
                <span class="input-group-text" id="basic-addon1">max</span>
                <input type="text" class="form-control" placeholder="100000000" aria-label="max-price" aria-describedby="basic-addon1">
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-length {
    width: 23rem;
}
</style>