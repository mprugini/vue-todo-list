<template>
    <div v-if="completedTasks.length !== 0">
        <h1>Done</h1>
        <ul class="list-group mx-auto justify-content-center">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="completeTask in completedTasks" v-bind:key="completeTask">
                {{ completeTask }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'completedTasks'
            ])
        },
    }
</script>

<style scoped>
    .list-group {
        width: 500px;
        align-content: center;
    }
</style>