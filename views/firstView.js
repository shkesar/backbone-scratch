FirstView = Backbone.View.extend({
    tagName: "span",
    className: "cake",
    id: "chocolate-cake",
    initialize: function () {
        this.render();
    },
    render: function () {
        var template = _.template($("#firstTemplate").html(), {});
        this.$el.html(template);
    },
});
