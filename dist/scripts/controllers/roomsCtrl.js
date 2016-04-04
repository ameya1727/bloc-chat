(function() {
    //$firebaseArray is injected into the controller
    function roomsCtrl($scope, $firebaseArray){
        var roomsRef = new Firebase("https://bloc-chat-aa.firebaseio.com/");
        
        // create a synchronized array
        $scope.rooms = $firebaseArray(roomsRef);
                
        // add new items to the array
        $scope.addRoom = function() {
            console.log('in here')
            $scope.rooms.$add({
                roomName: $scope.newRoomText,
                userName: $scope.newUsernameText 
            });
        }; 
        
       var chatrooms = $firebaseArray(roomsRef.child('roomsCtrl'));

        return {
          all: chatrooms
        };
    
    }
    angular
        .module('blocChat')
        .controller('roomsCtrl', roomsCtrl);
})();
