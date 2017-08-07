
//Filename: collections/persondeals.js

define(['../Models/deal','../api', 'backbone'], function (Deal, api) {

    var PersonDeals = Backbone.Collection.extend({

        model: Deal,

        initialize: function (options) {
            this.personId = options.personId;
        },

        url: function () {
            return api.getPersonDealsUrl(this.personId);
        },

        parse: function (response) {
            var deals;
            deals = _.filter(response.data, function(deal) {
                return deal.status === "open";
            });
            return deals;
        }
    });

    return PersonDeals;

});
