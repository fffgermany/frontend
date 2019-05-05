<template>
    <nav class="navbar">
        <router-link :to="{ name: 'home' }">
            <h1>Regionalgruppen</h1>
        </router-link>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style scoped>
.navbar {
    background: var(--primary-color);
    padding: 1px 10px;
}

a {
    color: white;
    text-decoration: none;
}
</style>
