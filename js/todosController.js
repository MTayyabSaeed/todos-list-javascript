let todoList = {
    //declaring todos array as a property
    todos: [],
    displayTodos: function() {
        console.log('My Todos: ');
        if (this.todos.length === 0) {
            console.log("todo list is empty");
        } else {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(X)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
    },

    addTodos: function(todoText) {
        //passing an oject as an element to the todos arrray
        this.todos.push({
            //this passed object has two properties
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },

    changeTodo: function(position, newTodoText) {
        //changing text at a specific index in the object array
        this.todos[position].todoText = newTodoText;
        this.displayTodos();
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
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
        this.displayTodos();
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
let handlers ={
    displayTodosButton: function () {
        todoList.displayTodos();
    },
    toggleAll: function () {
        todoList.allCompleted();
    },
    addTodos: function () {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodos(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function () {
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function () {
        let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';

    },
    toggleTodo: function () {
        let toggleTodoPositionInput = document.getElementById('toggleTodoPositionInput');
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = '';
    }

};