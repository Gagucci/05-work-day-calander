const presentTime = dayjs();
const currentTime = $("#currentDay");
const saveBtn = $(".saveBtn");

// A listener for click events on the save button.
$(function () {
  saveBtn.on("click", saveTime);

  displayDate();
  setTextValue();
});

// function to save the time to local storage.
function saveTime() {
  //Get the values from the textarea and the id of the parent div.
  var textArea = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  //Save the values to local storage.
  localStorage.setItem(time, textArea);
  localStorage.getItem(time, textArea);
}

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
function timeBlockColor() {
  var currentHour = dayjs().hour();
  $(".time-block").each(function () {});
}

// Code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements.
function setTextValue() {
  $(".time-block").each(function () {
    $(this)
      .children(".description")
      .val(localStorage.getItem($(this).attr("id")));
  });
}

// Code to display the current date in the header of the page.
function displayDate() {
  currentTime.text(presentTime.format("dddd, MMMM D, YYYY"));
}
