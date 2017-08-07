
//Filename: controllers/profile.js

define(['../views/profilelist','../views/profiledetails','../views/blankprofile','../collections/profiles','backbone'],
    function(ProfileListView,ProfileDetailsView,BlankProfileView, Profiles) {

    function ProfilesController() {
        if (!(this instanceof ProfilesController))
            return new ProfilesController;

        this.profiles = {};

        // Fetch all profiles
        this.createList = function(){

            var self = this;

            var deferred = $.Deferred();

            if (!_.isEmpty(this.profiles))
                 return deferred.resolve().promise();


            this.profiles = new Profiles();
            this.profiles.fetch({success: function(profiles){

                self.listView = new ProfileListView({collection: profiles});
                self.showView(self.listView);

                $('body').removeClass('loading');

                deferred.resolve();

            }});

            $('body').addClass('loading');

            return deferred.promise();

        };

        // Fetch all person deals from Profile model
        this.createDetails = function(personId){

            var profile = this.profiles.find(function(model) {
                return model.get('id') === parseInt(personId);
            });
            if (profile){
                this.showView(new ProfileDetailsView({model: profile, personId: personId}));
            } else {
                this.showView(new BlankProfileView);
            }

            this.activateById(personId);
    };

        //Sets current list item as active by Id
        this.activateById = function(id) {
            this.listView.activateById(id);
        };


        this.showView = function(view){
            view.render();
        };

    }


    return ProfilesController;

});
