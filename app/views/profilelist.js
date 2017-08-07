
//Filename: views/profilelist.js

define(['text!templates/profileListItem.html','backbone'],
    function (profileListItemTemplate) {

    var ProfileListView = Backbone.View.extend({

        tagName: 'ul',
        className: 'nav nav-list',

        render: function () {

            _.each(this.collection.models, function (profile) {
                $(this.el).append(new ProfileListItemView({model: profile}).render().el);
            }, this);

            $('#profile-list').html(this.el);

            return this;
        },

        activateById: function(id){
            var items = this.$el.find("li");
            _.each(items, function(item) {
                $(item).removeClass('active');
                if ($(item).attr("data-id") === id) {
                    $(item).addClass('active');
                }
            });

        }
    });


    var ProfileListItemView = Backbone.View.extend({

        tagName: 'li',

        template: _.template(profileListItemTemplate),

        render: function () {
            var data = this.model;
            $(this.el).attr('data-id',data.id).html(this.template(data.toJSON()));
            return this;
        }


    });

    return ProfileListView;

});


