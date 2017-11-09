let todoList = {
    //declaring todos array as a property
    todos: ['item1', 'item2', 'item3'],

    displayTodos: function () {
        console.log('My Todos: ', this.todos);
    },

    addTodos: function (todoItem) {
        this.todos.push(todoItem);
        this.displayTodos();
    },

    changeTodo: function (position, todoItem) {
        this.todos[position] = todoItem;
        this.displayTodos();
    },

    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

todoList.displayTodos();
todoList.addTodos('item4');
todoList.changeTodo(2, 'plunker');
todoList.deleteTodo(0);