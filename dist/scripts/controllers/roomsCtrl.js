(function() {
    //$firebaseArray is injected into the controller
    function roomsCtrl($scope, $firebaseArray){
        var roomsRef = new Firebase("https://bloc-chat-aa.firebaseio.com/");
        
        // create a synchronized array
        $scope.rooms = $firebaseArray(roomsRef);
                
        // add new items to the array
        $scope.addRoom = function() {
            console.log('in here')
            $scope.rooms.push({
                text: $scope.newRoomText,
                text: $scope.newUsernameText,
                status: 'active'
            });
        }; 
    }
    angular
        .module('blocChat')
        .controller('roomsCtrl', roomsCtrl);
})();