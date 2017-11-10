let todoList = {
    //declaring todos array as a property
    todos: [],

    displayTodos: function () {
        console.log('My Todos: ', this.todos);
    },

    addTodos: function (todoText) {
        //passing an oject as an element to the todos arrray
        this.todos.push(
            {
                //this passed object hss two properties
                todoText: todoText,
                completed: false
            }
        );
        this.displayTodos();
    },

    changeTodo: function (position, todoText) {
        //changing text at a specific index in the object array
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },

    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    toggleCompleted: function (position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }

};

todoList.displayTodos();
todoList.addTodos('some text is here');
todoList.changeTodo(0, 'plunkerd ddss sdsds');
todoList.toggleCompleted(0)
todoList.deleteTodo(0);