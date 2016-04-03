(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
         $stateProvider
             .state('rooms', {
                 url: '/',
                 controller: 'rooms as rooms',
                 templateUrl: '/templates/rooms.html'
             })
//             .state('AddTask', {
//                 url: '/add',
//                 controller: 'AddTaskCtrl as AddTask',
//                 templateUrl: '/templates/AddTask.html'         
//             })
//             .state('DoneTasks', {
//                 url: '/done',
//                 controller: 'AddTaskCtrl as DoneTasks',
//                 templateUrl: '/templates/doneTasks.html'         
//             });
        }
 
     angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);
 })();