let todos = ['item1', 'item2', 'item3', 'item4'];

//This function should display my todos list
function displayTodos() {
    console.log('My todos:', todos);

}

//This function should add an item to my todos list
function addTodo(newItem) {
    todos.push(newItem);
    displayTodos();
}

//This function should edit an item to my todos list at a specific index
function editTodo(position, newItem) {
    todos[position] = newItem;
    displayTodos();
}

//This function should delete an item to my todos list at a specific index
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

//This function should insert an item to my todos list at a specific index
function insertTodo(position, newItem){
    todos.splice(position, 0, newItem);
    displayTodos();
}

displayTodos();
addTodo('item5');
editTodo(4, 'item6');
deleteTodo(4);
insertTodo(2, 'newitem');
deleteTodo(2);

//this object has properties and values of my computer
let myComputer = {
    operatingSystem: 'macOS',
    screenSize: '15 inches',
    purchaseYear: 2011
}

console.log('\n');

//accessing the properties of my computer to display the values
console.log(myComputer.operatingSystem);
console.log(myComputer.purchaseYear);
console.log(myComputer.screenSize);

//the person object has functions on it
let person = {
    name: 'Tayyab',
    age: 27,  //each property has a comma to seperate from other properties, the last one doesn't any comma

    //this function shows the name... also this is how the a function is inside of an object
    sayName: function () {
        console.log(this.name);
    },
    //the name of the function is declared as the property and the function as a whole declaration as a value
    ageToday: function () {
        console.log(this.age);
    }
}

person.sayName();
person.ageToday();