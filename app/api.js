
//Filename: api.js

define(function() {

    var apiToken = "1e215e26e106dbd05bac82413925e2390024fea2", //User Api Token ( change it to work with your own api)
        apiDomain = 'https://api.pipedrive.com',
        apiVersion = 'v1',
        apiPrefix = apiDomain + "/" + apiVersion + "/";

    return api = {

        // Return url for all profiles
        getProfilesCollectionUrl: function () {
            return apiPrefix + 'persons?start=0&api_token=' + apiToken;
        },

        // Return url for person deals
        getPersonDealsUrl: function (personId) {
            return apiPrefix + 'persons/' + personId + "/deals?start=0&status=all_not_deleted&api_token=" + apiToken;
        }
    };

});