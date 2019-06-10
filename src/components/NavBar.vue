<template>
    <nav class="navbar">
        <router-link :to="{ name: 'home' }">
            <h1>Regionalgruppen</h1>
        </router-link>

        <ul>
            <li>
                <router-link :to="{ name: 'groupList' }">Ortsgruppen</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'demoList' }">Demos</router-link>
            </li>
            <li v-if="user === {}">
                <router-link :to="{ name: 'signin' }">Anmelden</router-link>
            </li>
            <li v-else>
                <router-link :to="{ name: 'signin' }">Logout</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    
    computed: {
        user() {
            return this.$store.getters['users/getUser']();
        }
    }
}
</script>

<style scoped>
.navbar {
    position: sticky;
    top: 0;
    background: white;
    padding: 1px 10px;

    display: grid;
    grid-template-columns: 1fr auto;
}

a {
    color: var(--primary-color);
    text-decoration: none;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    display: flex;
    place-items: center;
}

li {
    float: left;
}

li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    color: var(--primary-color);
}
</style>
