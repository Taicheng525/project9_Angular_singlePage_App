(function(){
    angular.module('app')
    .service("dataService", function($http, $location, $routeParams){
    
    this.getRecipes = function(callback){
        $http.get('/api/recipes')
        .then(callback)
    }   

    this.getCategories = function(callback){
        $http.get('/api/categories')
        .then(callback)
    }  

    this.getFooditems = function(callback){
        $http.get('/api/fooditems')
        .then(callback)
    } 

    this.getSpecifyCategory = function (catro, callback) {
        $http.get('/api/recipes?category=' + catro)
        .then(callback)
    };

    this.getRecipe = function (id, callback) {
        $http.get('/api/recipes/' + id)
        .then(callback);
    }

    //add new recipe
    this.addRecipe = function (recipe, callback) {
        $http.post('/api/recipes', recipe)
        .then(callback);
    }

    //update recipe
    this.updateRecipe = function (recipe, callback) {
        $http.put('/api/recipes/' + recipe._id, recipe)
        .then(callback);
    }

    //delete recipe
    this.deleteRecipe = function (id, callback) {
        $http.delete('/api/recipes/' + id)
        .then(callback);
    }

})
})();