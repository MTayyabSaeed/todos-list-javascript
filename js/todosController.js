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
        }
    }
};

//----------------------------------------------------------------------------------------------------------------------------------
/*
 * This code is from the stackoverflow thread I posted, below is the link
 * https://stackoverflow.com/questions/47238309/error-cannot-find-module-node-jsdom/47241559?noredirect=1#comment81444646_47241559
 *

const jsdom = require("jsdom/lib/old-api.js");
const jsdom_hard = require("jsdom/lib/old-api.js").jsdom;
const fs = require('fs');

jsdom.env(
    "http://news.ycombinator.com/",
    ["http://code.jquery.com/jquery.js"],
    function(err, window) {
        const $ = window.$;
        console.log("HN Links");
        $("td.title:not(:last) a").each(function() {
            console.log(" -", $(this).text());
        });
    }
);

let markup = fs.readFileSync('foo.html');
let doc = jsdom_hard(markup, {});


function showData() {
    elem = doc.getElementById('TodosText').innerHTML;
    console.log("Element value: " + elem)
}
showData();

*/
//----------------------------------------------------------------------------------------------------------------------------------
/*
 * Refactoring this code, I am keeping this as a comment because this is the normal and
 * more flexible way to do it but I want learn more further
 * You can use either this commented code or the refactored code down there

let displayTodosButton = document.getElementById('displayTodosButton');
console.log(displayTodosButton);

displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});

let toggleAll = document.getElementById('toggleAll');
toggleAll.addEventListener('click', function() {
    todoList.allCompleted();
});
*/
//----------------------------------------------------------------------------------------------------------------------------------

//handlers object would give access to function to be attached to buttons in html
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
    deleteTodo: function () {
        let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleTodo: function () {
        let toggleTodoPositionInput = document.getElementById('toggleTodoPositionInput');
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = '';
        view.displayTodos();
    }
};

let view = {
    displayTodos: function () {
        let todoLu = document.querySelector('ul');
        todoLu.innerHTML = '';
        let todoTextCompletion = '';

        for (let i = 0; i < todoList.todos.length; i++){
            let todo = todoList.todos[i].todoText;
            let todoLi = document.createElement('li');

            if(todoList.todos.length === 0) {
                todoLi.textContent = "Todo List is empty";
            }else{
                if(todoList.todos[i].completed === true){
                    todoTextCompletion = '(X) ' + todo;
                }else {
                    todoTextCompletion = '( ) ' + todo;
                }
                todoLi.textContent = todoTextCompletion;
                todoLu.appendChild(todoLi);
            }
        }
    }
};