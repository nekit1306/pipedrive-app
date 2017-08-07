
//Filename: views/profiledetails.js

define(['./persondeals','text!templates/profileDetails.html','moment', 'backbone'],
    function (PersonDealsView, profileDetailsTemplate, moment) {

    var ProfileDetailsView = Backbone.View.extend({

        el: "#profile-details",
        template: _.template(profileDetailsTemplate),

        initialize: function (options) {

            this.personDealsView = new PersonDealsView({
                personId: options.personId
            });
        },


        render: function () {

            _.extend(this.model.toJSON(), this.viewHelpers());

            $(this.el).html(this.template(this.model.toJSON()));
            $('.person-deals-wrapper').append(this.personDealsView.render().el);

            return this;
        },


        viewHelpers: function()  {

            formatContactType = function(type) {
                var ph;
                ph = _.find(type, {
                    primary: true
                });
                if (ph && ph.value) {
                    return ph.value;
                } else {
                    return "Not provided";
                }
            };

            formatAddedTime = function(time) {
                return moment(time).format("LL");
            };

            formatActivity = function(activityDate) {
                var m;
                m = moment(activityDate);
                if (m.isValid()) {
                    return m.format("DD MM YYYY");
                } else {
                    return "No activity";
                }
            }
        }

    });

    return ProfileDetailsView;


});