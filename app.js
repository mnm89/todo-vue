new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: [
            { text: 'Learn Vue.js', completed: false },
            { text: 'Build a To-Do App', completed: false },
            { text: 'Master JavaScript', completed: true }
        ]
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo, completed: false });
                this.newTodo = '';
            }
        },
        toggleComplete(todo) {
            todo.completed = !todo.completed;
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    }
});
