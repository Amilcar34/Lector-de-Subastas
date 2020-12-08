var app = angular.module('BC', []);
app.controller('CtrlBC', function($scope, $http) {
    $scope.getSubasta = function() {
        $http.get("https://subastas.bancociudad.com.ar/subastas_rest/lotes/subasta/" + $scope.idSubastaBC + "/1/100")
        .then(function(response) {
            let itemsBC = new Array();
            for (let itemBC of response.data.data) {
                itemBC.descripcion = itemBC.descripcion.substr(itemBC.descripcion.indexOf(' ') ,itemBC.descripcion.length)
                itemsBC.push(itemBC);
            }
            $scope.itemsBC = itemsBC;
        }, function(response) {
            alert("Something went wrong");
        });
    }
});