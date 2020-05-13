<template>
    <div v-if="activeTasks.length !== 0">
        <h1>List of things to do</h1>
        <ul class="list-group mx-auto justify-content-center">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(activeTask, index) in activeTasks" v-bind:key="activeTask">
                {{ activeTask }}
                <span class="badge badge-pill">
                    <button class="btn btn-success" id="done" @click="completeTask(index)">DONE</button>
                    <button class="btn btn-danger" @click="deleteTask(index)">DELETE</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'activeTasks'
        ])
    },
    methods: {
        ...mapActions([
            'completeTask',
            'deleteTask'
        ])
    }
}
</script>

<style scoped>
    #done {
        margin-right: 10px;
    }
    li {
        margin-bottom: 10px;
    }
    ul {
        display: block;
    }
    .completed {
        text-decoration: line-through;
    }
    .list-group {
        width: 500px;
    }

</style>