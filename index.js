var firstModel = new FirstModel();
firstModel.set({order: 2});
firstModel.unset('order', {silent: true});
$("body").append(firstModel.escape("hack"));

var firstView = new FirstView({el: $("#unique")});
