let todoList = {
    //declaring todos array as a property
    todos: [],

    addTodos: function(todoText) {
        //passing an oject as an element to the todos arrray
        if(todoText !== ''){
            this.todos.push({
                //this passed object has two properties
                todoText: todoText,
                completed: false
            })
        }
    },

    changeTodo: function(position, newTodoText) {
        //changing text at a specific index in the object array
        this.todos[position].todoText = newTodoText;
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },

    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
    },

    allCompleted: function() {
        let allTodos = this.todos.length;
        let completedTodos = 0;
        //count the completed todos
        this.todos.forEach(function (todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });
        this.todos.forEach(function(todo) {
            //case1: if all todos are completed make them as incomplete -- its like when something finishes you restart it
            if (allTodos === completedTodos)
                todo.completed = false;
            //case2: if all todos are not completed (either a few n complete or all in complete), make them as complete
            else
                todo.completed = true;
        });
        //----------------------------------------------------------------------------------------------------------------------------------

        /*
         *  Here is the original code in case of misunderstanding with forEach loops
         *
         *
         * 
                for (let i = 0; i < allTodos; i++) {
                    if (this.todos[i].completed === true) {
                        completedTodos++;
                    }
                }
                //case1: if all todos are completed make them as incompleted -- its like when something finishes you restart it
                for (let i = 0; i < allTodos; i++) {
                    if (allTodos === completedTodos) {
                        for (let i = 0; i < allTodos; i++) {
                            this.todos[i].completed = false;
                        }
                    }
                    //case2: if all todos are not completed (either a few n complete or all in complete), make them as complete
                    else {
                        for (let i = 0; i < allTodos; i++) {
                            this.todos[i].completed = true;
                        }
                    }
                }*/
        //----------------------------------------------------------------------------------------------------------------------------------

    }
};

//handlers object give access to the functions in the todoList object by html elements and displays the output on DOM
let handlers = {
    toggleAll: function () {
        todoList.allCompleted();
        view.displayTodos();
    },
    addTodos: function () {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodos(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function () {
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleTodo: function () {
        let toggleTodoPositionInput = document.getElementById('toggleTodoPositionInput');
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = '';
        view.displayTodos();
    }
};

//view object takes care of the view of the outputs in the DOM
let view = {
    displayTodos: function () {
        debugger;
        let todoLu = document.querySelector('ul');
        todoLu.innerHTML = '';

        todoList.todos.forEach(function (todo, position) {
            let todoLi = document.createElement('li');
            let todoTextCompletion = '';

                if(todo.completed === true){
                    todoTextCompletion = '(X) ' + todo.todoText;
                }else {
                    todoTextCompletion = '( ) ' + todo.todoText;
                }
                todoLi.textContent = todoTextCompletion;
                //this generates an id for the elements generates with the iteration variable i
                todoLi.id = position;
                todoLi.appendChild(this.createDeleteButton());
                todoLu.appendChild(todoLi);
        }, this);

    },

    //this fucntion creates a delete button
    createDeleteButton: function () {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;

    },

    //creating setEventListeners as this will listen to events and accordingly it would function
    setEventListeners: function () {
        let todoUl = document.querySelector('ul');
        todoUl.addEventListener('click', function (event) {
            let elementClicked = event.target;
            if(elementClicked.className === 'deleteButton'){
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        })
    }
};

view.setEventListeners();
