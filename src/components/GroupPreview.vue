<template>
    <router-link class="fff-group-preview" :to="{ name: 'groupView', params: { id: localgroup.id } }">
        {{ localgroup.name }}
    </router-link>
</template>

<script>
export default {
    name: 'fff-group-preview',

    props: ['localgroup']
}
</script>

<style scoped>
.fff-group-preview {
    display: block;
    background: rgb(250, 250, 250);
    padding: 10px;
    margin-bottom: 10px;
}

.fff-group-preview:hover {
    color: var(--primary-color);
    background: rgb(240, 240, 240);
}
</style>