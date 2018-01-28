FirstModel = Backbone.Model.extend({
    defaults: function () {
        return {
            title: "The first page",
            order: 1,
            hack: "<script>alert('xss')</script>",
        };
    },
    initialize: function () {
        this.bindEvents();
        console.log(this.get('title') + " " + this.get('order'));
    },
    bindEvents: function () {
        this.on("change:order", function (model) {
            console.log("Order changed to", model.get("order"));
        });
    }
});
