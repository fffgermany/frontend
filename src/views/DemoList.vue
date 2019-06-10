<template>
    <div class="fff-demo-list main-container">
        <vue-headful title="Demos - Fridays For Future Regionalgruppen" />

        <SearchBar v-model="search"/>

        <DemoPreview v-for="demo in filteredDemos" :demo="demo" :key="demo.id"/>
    </div>
</template>

<script>
import DemoPreview from '@/components/DemoPreview'
import SearchBar from '@/components/SearchBar'

export default {
    name: 'demoList',

    data() {
        return {
            search: '',
        }
    },

    components: { DemoPreview, SearchBar },

    computed: {
        localgroups() {
            return this.$store.getters['localgroups/getItems'];
        },

        demos() {
            return this.$store.getters['demos/getItems'];
        },

        filteredDemos() {
            let search = this.search.toLowerCase()
            return this.demos.filter(demo => demo.ort.toLowerCase().includes(search))
        }
    },

    methods: {
        addNewDemo() {
            this.$router.push({ name: 'demoView', params: { id: 'new' } });
        },

        goToDemo(id) {
            this.$router.push({ name: 'demoView', params: { id: id } });
        },
    },

    beforeCreate() {
        this.$store.dispatch('demos/getList');
        this.$store.dispatch('localgroups/getList');
    },
};
</script>

<style scoped>

</style>
