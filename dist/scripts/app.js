(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
         $stateProvider
<<<<<<< HEAD
//             .state('ActiveTasks', {
//                 url: '/',
//                 controller: 'ActiveTasksCtrl as ActiveTasks',
//                 templateUrl: '/templates/ActiveTasks.html'
//             })
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
=======
             .state('rooms', {
                 url: '/',
                 controller: 'roomsCtrl as rooms',
                 templateUrl: '/templates/rooms.html'
             })
>>>>>>> master
        }
 
     angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);
 })();