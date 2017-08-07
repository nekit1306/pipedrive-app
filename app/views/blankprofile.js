
//Filename: views/blankprofile.js

define(['text!templates/blankProfile.html','backbone'], function (blankProfileTemplate) {

    var BlankProfileView = Backbone.View.extend({

        el: "#profile-details",
        template: _.template(blankProfileTemplate),


        render: function () {
            $(this.el).html(this.template());
            return this;
        }

    });

    return BlankProfileView;


});