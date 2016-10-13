'use strict';

angular.module('todoApp.components.todoList', [
  'todoApp.components.todoList.ctrl'
])
  .directive('todoList', function () {
    return {
      restrict: 'E',
      templateUrl: 'js/components/todo-list/todoList.html',
      controller: 'todoListController',
      controllerAs: 'todoList'
    };
  });
