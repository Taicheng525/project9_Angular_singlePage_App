(function(){
    angular.module('app')
    .controller("RecipesController", function($scope, dataService, $location, $routeParams){
    
    dataService.getRecipes(function(response){
        //console.log(response.data);
        $scope.recip = response.data;
    });

    dataService.getCategories(function(response){
       //console.log(response.data);
        $scope.categroies = response.data;
    });

    $scope.updateCategory = function(catro){
        if (catro === "All Categories"){
            dataService.getRecipes(function(response){
                $scope.recip = response.data;
            })
        }
        else{
            dataService.getSpecifyCategory(catro, function(response){
                $scope.recip = response.data;
            });
        }
    }

    $scope.toAddRecipe = function(){
        $location.path('/add');
    }

    $scope.deleteReci = function(reci_id, $index){
        dataService.deleteRecipe(reci_id);
        $scope.recip.splice($index, 1);
    }
})
})();