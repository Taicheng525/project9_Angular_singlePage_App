(function(){
    angular.module('app')
    .controller('RecipeDetailController', function($scope, dataService, $location, $routeParams){

    $scope.recip = {
        name: "",
        description: "",
        category: "",
        prepTime: "",
        cookTime: "",
        ingredients: [],
        steps: []
    };

    //category option
    $scope.categories = [];
    //itme option
    $scope.foodItems = [];
    
    if ($location.url() !== "/add") {
        let id = $routeParams.id;
        dataService.getRecipe(id, function (response){
            $scope.recip = response.data;
        });
    }

    dataService.getCategories(function(response){
        //console.log(response.data);
         $scope.categroies = response.data;
    });
    
    dataService.getFooditems(function(response){
        //console.log(response.data);
        $scope.foodItems = response.data;
    });

    $scope.addIngredient = function() {
        $scope.recip.ingredients.push({});
    }

    $scope.deleteIngredient = function(index) {
        $scope.recip.ingredients.splice(index, 1);
    }

    $scope.addStep = function() {
        $scope.recip.steps.push({});
    }

    $scope.deleteStep = function(index) {
        $scope.recip.steps.splice(index, 1);
    }

    $scope.saveRecipe = function() {
        if ($scope.recip._id) { 
            dataService.updateRecipe($scope.recip);
        } 
        else {
            dataService.addRecipe($scope.recip);
        }

        $location.path('/');
    }

    //back to home route
    $scope.toHome = function() {
        $location.path('/');
    }
    
})
})();