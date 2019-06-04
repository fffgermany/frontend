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
}
</script>

<style scoped>
.navbar {
    background: white;
    padding: 1px 10px;
}

a {
    color: var(--primary-color);
    text-decoration: none;
}
</style>
