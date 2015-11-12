
var app = angular.module('myApp', ["xeditable"]);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});


app.controller('myCtl', function($scope, $http, $filter) {
    $scope.persons = [{id: 1, name: 'Kowalski', sid: 2},{id: 2, name: 'Wiśniak', sid: 3},{id: 3, name: 'Czarnecki', sid: 1}];
    $scope.statuses = [ {sid:1, txt:'jeden'},{sid:2, txt:'dwa'},{sid:3, txt:'trzy'}]

    $scope.addUser = function() {
        $scope.nuser = {
            id: 0,
            name: 'Anonymous',
            sid: 1
        };
        $scope.persons.push($scope.nuser);
    };

    $scope.statusOfSid = function(sid) {
        var sel1 = $filter('filter')($scope.statuses , {sid: sid});
        return (sel1.length) ? sel1[0].txt : '(err)';
    }

});
