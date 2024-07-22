
var todos = [
    {
        text:'Learn HTML, CSS and Javascript',
        done: true
    },
    {
        text:'Learn the basics of Vue JS',
        done: false
    },
    
];

const todosApp ={
      data() {
        return {
        todos: window.todos,
        newTodo: {
            done: false
        }
        }
      }
};

Vue.createApp(todosApp).mount('#app');

