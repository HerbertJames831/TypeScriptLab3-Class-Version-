"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.listAllItems = function () {
        throw new Error('Method not implemented.');
    };
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Item:" + task + " added to Array");
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
            console.log("Item:  " + task + " has been removed from Array.");
        }
        else {
            console.log("Item:" + task + "not found.");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTasks = new Todo();
myTasks.addTask("Q1");
myTasks.addTask("Q2");
myTasks.listAllTasks();
myTasks.deleteTask("Q2z");
