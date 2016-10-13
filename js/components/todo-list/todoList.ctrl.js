'use strict';

function todoListController(todoService) {
  this.addTodo = todoService.addTodo;
  this.clearCompleted = todoService.clearCompleted;
  this.getTodos = todoService.getTodos;
  this.removeTodo = todoService.removeTodo;
  this.clearList = todoService.clearList;
  this.getCategory = todoService.getCategory;
}


angular.module('todoApp.components.todoList.ctrl', [
  'todoApp.services.todoService'
])
  .controller('todoListController', todoListController);
