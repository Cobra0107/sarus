(function() {
    /**
     * Angular app file.
     */

    angular.module('sarusApp', [
        // Define dependencies.
        'ngRoute',
        'angular-inview',
        'sarusApp.controllers',
        'sarusApp.directives',
        'ngSanitize',
        'ngLoadScript',
        'sarusApp.factories'


    ]).config(config);
    // Route configuration below.
    function config($routeProvider, $locationProvider) {
        // HTML5 mode Required to avoid urls with # anchor tags.
        $locationProvider.html5Mode(true);

        // Set routing.
        $routeProvider.
        when('/:slug', {
            controller: 'PostController',
            controllerAs: 'vm',
            resolve: {}
        }).otherwise({
            redirectTo: '/'
        });
    };




    /*IIFE Immediately Invoked Function Expression*/
}());
