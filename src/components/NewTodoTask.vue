<template>
    <div>
        <h1>Todo List App</h1>
        <input type="text" placeholder="Add a Todo" v-model="newTask">
        <button type="button" class="btn btn-success btn-lg" @click="addTask">+ ADD</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'addTask'
            ])
        },
        computed: {
            newTask: {
                get () {
                    return this.$store.getters.newTask;
                },
                set (newTask) {
                    this.$store.dispatch('updateTask', newTask)
                }
            }
        }
    }
</script>

<style scoped>
    input[type=text], select {
        width: 300px;
        padding: 12px 20px;
        margin: 8px 10px 0 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
</style>