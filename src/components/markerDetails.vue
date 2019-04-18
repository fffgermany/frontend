<template>
    <div v-if="isVisible" class="fff-marker-details">
        <div class="fff-marker-details__close" @click="close()">close</div>
        <div class="fff-marker-details__"> ort: {{model.ort}} (Ortsgruppe: {{localgroup.name}})</div>
        <div class="fff-marker-details__"> datum: {{model.zeit}}</div>
    </div>
</template>

<script>

import router from '@/router';
// ToDo add required
export default {
    name: 'gmInput',
    props: {
        model: Object,
    },
    data() {    

        return {
            
        }
    },
    methods: {
        close() {

            this.$emit('interface');
        }
    },
    computed: {
        isVisible() {

            return this.model ? true : false
        },
        localgroup() {

            return this.$store.getters['localgroups/getItemByRelatedModel'](this.model);
        }
    }
};
</script>

<style lang="scss">

.fff-marker-details {
    position: fixed;
    top: 15px;
    left: 50px;
    right: 50px;
    background: #fff;
    z-index: 999999;
}

</style>
