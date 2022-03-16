let taskIDs = [
    "0900",
    "1000",
    "1100",
    "1200",
    "1300",
    "1400",
    "1500",
    "1600",
    "1700",
];

$(".saveBtn").on("click", function(){
    var taskElement = $(this).closest(".time-block").find(".taskbox");
    var textInput = taskElement.val();
    var taskId = taskElement.attr("id");
    $(taskElement).attr("value", textInput);
    localStorage.setItem(taskId, textInput);
});

var loadEntity = function(){
    taskIDs.forEach(function (element){
        $(`#${element}`).val(localStorage.getItem)(element));
    });
};