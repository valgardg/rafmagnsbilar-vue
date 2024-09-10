<template>
	<nav class="navbar sticky-top navbar-expand-lg header-div">
		<div class="container-fluid d-flex justify-content-between">
			<div @click="() => router.push('/')">
                <img src="@/assets/images/rafmagnsbilarRLogo.png" class="header-logo-r ms-2" />
            </div>
			<div @click="() => router.push('/')">
                <img src="@/assets/images/rafmagnsbilarMainLogo.png" class="header-logo-main" />
            </div>
			<div>
                <UmOkkurButton />
            </div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import UmOkkurButton from '@/components/buttons/UmOkkurButton.vue';
import router from '../router';
</script>

<style scoped>
.header-div {
	margin-top: 0px;
    padding: 0.2rem;
	background-color: var(--c-primary-100);
}
.header-logo-r {
    width: 25px;
    height: 25px;
}
.header-logo-r:hover {
    cursor: pointer;
}
.header-logo-main {
    height: 48px;
    width: 158px;
}
.header-logo-main:hover {
    cursor: pointer;
}
</style>