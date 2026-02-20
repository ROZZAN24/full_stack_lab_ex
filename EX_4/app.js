var app = angular.module("todoApp", []);

app.controller("TodoController", function($scope) {

    
    $scope.todos = [
        {work: "EX1", completed: true},
        {work: "EX2", completed: true},
        {work: "EX3", completed: true},
        {work: "EX4", completed: false},
        {work: "EX5", completed: false}
    ];

    
    $scope.addNew = function () {
        if ($scope.newWork) {
            $scope.todos.push({
                work: $scope.newWork,
                completed: false
            });
            $scope.newWork = "";
        }
    };

    
    $scope.deleteTodo = function(index) {
        $scope.todos.splice(index, 1);
    };

    
    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
            if (!todo.completed)
                count++;
        });
        return count;
    };

});