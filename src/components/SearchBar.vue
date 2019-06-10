<template>
    <div class="fff-search-bar">
        <p></p>
        <input v-model="inputModel" ref="input" placeholder="Suchen ..." autofocus>
    </div>
</template>

<script>
export default {
    name: 'fff-search-bar',

    props: ['value'],

    data() {
        return {
            inputModel: this.value
        }
    },

    watch: {
        value() {
            this.$refs.input.value = this.value
        },
        inputModel() {
            this.$emit('input', this.inputModel);
        }
    }
}
</script>

<style scoped>
.fff-search-bar {
    display: grid;
    grid-template-columns: 1fr minmax(auto, 400px);
    margin-bottom: 30px;
}

input {
    background: rgb(230, 230, 230);
    border: 0;
    padding: 10px;
}
</style>