
// Filename: main.js
// Require.js Configurations
// ------------------
require.config({

    // Sets the app folder as the base directory for all future relative paths
    baseUrl: "./app",

    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")

    paths: {

        // Core Libraries
        // --------------
        "jquery": "../libs/jquery",

        "underscore": "../libs/underscore",

        "backbone": "../libs/backbone",

        // Plugins
        // -------
        "moment": "../libs/moment",

        "text" : "../libs/text"
    },
    shim: {
        'backbone': {
            deps: ['../libs/underscore', '../libs/jquery'], // load dependencies
            exports: 'Backbone' // use the global 'Backbone' as the module value
        }
    }

});

require(["Router"], function(Router) {


    var router = new Router();

    router.on("route", function(router) {
        if(router !== 'notfoundHandler'){
            $('.not-found').hide();
        }
    });

// Initialize the Router
    Backbone.history.start();

});