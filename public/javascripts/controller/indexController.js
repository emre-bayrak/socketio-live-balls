app.controller('indexController', ['$scope', 'indexFactory', ($scope, indexFactory) => {

    const connectionOptions = {
        reconnectionAttempts: 3,
        reconnectionDelays: 600
    }

    indexFactory.connectSocket('http://localhost:3001', connectionOptions)
    .then((socket) => {
        console.log('Connection is established!', socket);
    }).catch((err) => {
        console.log(err);
    });
}]);