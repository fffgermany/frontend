<template>
    <div class="fff-group-list main-container">
        <h2>Ortgruppen</h2>

        <GroupPreview v-for="localgroup in localgroups" :localgroup="localgroup" :key="localgroup.id"/>
    </div>
</template>

<script>
import GroupPreview from '@/components/GroupPreview'

export default {
    name: 'fff-group-list',

    components: { GroupPreview },

    computed: {
        localgroups() {
            return this.$store.getters['localgroups/getItems'];
        }
    },

    beforeCreate() {
        this.$store.dispatch('localgroups/getList');
    }
}
</script>

<style scoped>
    
</style>