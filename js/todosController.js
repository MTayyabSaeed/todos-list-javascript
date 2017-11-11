let todoList = {
    //declaring todos array as a property
    todos: [],

    displayTodos: function () {
        console.log('My Todos: ');
        if (this.todos.length == 0){
            console.log("todo list is empty");
        } else {
            for (let i = 0; i < this.todos.length; i++){
                if(this.todos[i].completed == true){
                    console.log('(X)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
    },

    addTodos: function (todoText) {
        //passing an oject as an element to the todos arrray
        this.todos.push(
            {
                //this passed object has two properties
                todoText: todoText,
                completed: false
            }
        );
        this.displayTodos();
    },

    changeTodo: function (position, newTodoText) {
        //changing text at a specific index in the object array
        this.todos[position].todoText = newTodoText;
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
    },

    allCompleted: function () {
        let allTodos = this.todos.length;
        let completedTodos = 0;
        //count the completed todos
        for (let i = 0; i < allTodos; i++) {
            if (this.todos[i].completed == true) {
                completedTodos++;
            }
        }
        //case1: if all todos are completed make them as incompleted -- its like when something finishes you restart it
        for(let i =0; i < allTodos; i++){
            if (allTodos == completedTodos){
                for(let i = 0; i < allTodos; i++){
                    this.todos[i].completed = false;
                }
            }
            //case2: if all todos are not completed (either a few n complete or all in complete), make them as complete
            else
                {
                for(let i = 0; i < allTodos; i++){
                    this.todos[i].completed = true;
                }
            }
        }


        this.displayTodos();
    }
};

todoList.displayTodos();
todoList.addTodos('first');
todoList.addTodos('second');
todoList.addTodos('third');
todoList.toggleCompleted(0);

todoList.allCompleted();
todoList.allCompleted();
