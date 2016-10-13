
function todoService($http) {

  var todos = [];

  function addTodo(title) {
    console.log('title', title);
    todos.push({
      id: todos.length,
      title: title,
      done: false
    });
    console.log('todos', todos);
  }

  function removeTodo(todoToRemove) {
    todos = todos.filter(function (todo) {
      return todo.id !== todoToRemove.id;
    });
  }

  function clearCompleted() {
    todos = todos.filter(function (todo) {
      return !todo.done;
    });
  }

  function clearList() {
    todos = todos.filter(function (todo) {
      return;
    })
  }

  function getTodos() {
    return todos;
  }


  return {
    addTodo: addTodo,
    removeTodo: removeTodo,
    clearCompleted: clearCompleted,
    getTodos: getTodos,
    clearList: clearList,
  };
}

angular.module('todoApp.services.todoService', [])
  .factory('todoService', ['$http', todoService]);
