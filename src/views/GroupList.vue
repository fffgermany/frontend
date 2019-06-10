<template>
    <div class="fff-group-list main-container">
        <h2>Ortgruppen</h2>

        <SearchBar v-model="search"/>
        <GroupPreview v-for="localgroup in filteredLocalgroups" :localgroup="localgroup" :key="localgroup.id"/>
        
        <p v-if="filteredLocalgroups.length == 0">Keine Ortsgruppe gefunden!</p>
    </div>
</template>

<script>
import GroupPreview from '@/components/GroupPreview'
import SearchBar from '@/components/SearchBar'

export default {
    name: 'fff-group-list',

    components: { GroupPreview, SearchBar },

    data() {
        return {
            search: ''
        }
    },

    computed: {
        localgroups() {
            return this.$store.getters['localgroups/getItems'];
        },

        filteredLocalgroups() {
            let search = this.search.toLowerCase();
            return this.localgroups.filter(localgroup => localgroup.name.toLowerCase().includes(search))
        }
    },

    beforeCreate() {
        this.$store.dispatch('localgroups/getList');
    }
}
</script>

<style scoped>
    
</style>