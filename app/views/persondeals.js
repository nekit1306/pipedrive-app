
//Filename: views/persondeals.js

define(['../collections/persondeals',
    'text!templates/personDeals.html',
    'text!templates/personDealsItem.html',
    'text!templates/emptyDeals.html',
    'backbone'],
    function (PersonDeals, personDealsTemplate, personDealsItemTemplate,emptyDealsTemplate) {

    var PersonDealsView = Backbone.View.extend({

        tagName: 'table',
        className: 'deals-wrapper table table-striped',

        template: _.template(personDealsTemplate),

        initialize: function (options) {

            var self = this;

            this.collection = new PersonDeals({
                personId: options.personId
            });

            this.collection.fetch({
                success:function(data){

                    $('.deals-preloader').remove();

                    if (_.isEmpty(data.models))
                        return $(self.el).find('tbody').append(_.template(emptyDealsTemplate));

                    self.addDeal();

                }
            });
        },


        render: function () {
            $(this.el).html(this.template());
            return this;
        },

        addDeal: function () {

            _.each(this.collection.models, function (deal) {
                $(this.el).find('tbody').append(new PersonDealsItemView({model: deal}).render().el);
            }, this);
        }

    });


    var PersonDealsItemView = Backbone.View.extend({

        tagName: 'tr',
        template: _.template(personDealsItemTemplate),


        render: function () {

            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }

    });

    return PersonDealsView;
});
