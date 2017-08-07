
//Filename: collections/profiles.js

define(['../Models/profile','../api', 'backbone'], function (Profile, api) {

    var Profiles = Backbone.Collection.extend({

        model: Profile,

        url: function () {
            return api.getProfilesCollectionUrl();
        },

        parse: function (response) {
            return response.data;
        }

    });

    return Profiles;
});

