var taskIDs = [
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

$(".saveBtn").on("click", function () {
  var taskElement = $(this).closest(".time-block").find(".taskbox");
  var textInput = taskElement.val();
  var taskId = taskElement.attr("id");
  $(taskElement).attr("value", textInput);
  localStorage.setItem(taskId, textInput);
});

var loadEntity = function () {
  taskIDs.forEach(function (element) {
    $(`#${element}`).val(localStorage.getItem(element));
  });
};

var timeCheck = function (timeElement) {
  var hour = parseInt($(timeElement).find(".hour").attr("id").replace("hr"));
  var time = moment().hour();
  if (hour < time) {
    $(timeElement).removeClass("present future");
    $(timeElement).addClass("past");
  } else if (hour === time) {
    $(timeElement).removeClass("past future");
    $(timeElement).addClass("present");
  } else {
    $(timeElement).removeClass("present past");
    $(timeElement).addClass("future");
  }
};

$(document).on("click", function () {
  loadEntity();
});

$(document).ready(function () {
  var date = moment().format("YYYY-MM-DD hh:mm:ss");
  $("#currentDay").text(date);
});

loadEntity();
$(".time-block").each(function (index, element) {
  timeCheck(element);
});

setInterval(checkTime(), 1000 * 60 * 2);
