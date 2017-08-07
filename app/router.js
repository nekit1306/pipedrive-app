
//Filename: router.js

define(['controllers/profile'], function(ProfilesController){

    var profilesCtrl = ProfilesController();

    var Router = Backbone.Router.extend({

        routes: {
            '': 'profilesHandler',
            'person/:id': 'profilesHandler',
            '*notfoundPage' : 'notfoundHandler'
        },

        profilesHandler: function(personId){
            profilesCtrl.createList().then(function(){
                profilesCtrl.createDetails(personId);
            });
        },

        notfoundHandler: function(){
          $('.not-found').show();
        }
    });

    return Router;

});