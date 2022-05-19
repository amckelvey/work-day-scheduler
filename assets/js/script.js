// Establish a baseline for today.
var today = moment();
// format the date and place it in the header.
$("#currentDay").text(today.format('dddd, MMM Do'));

// grabbing hour and setting it to timeNow for coming for loop.
var timeNow = moment().hour();

// traverse the tree of children of the .container class and add bg colors based on time of day
// i + 8 should start us at 8am and allows for quick conversion to military time.
for (var i = 0; i < 10; i++) {
    if (timeNow == (i + 8)) {
        $(".container").children().eq(i).children().eq(1).addClass("present");
    } else if
        (timeNow < (i + 8)) {
        $(".container").children().eq(i).children().eq(1).addClass("future");
    } else {
        $(".container").children().eq(i).children().eq(1).addClass("past");
    }
}

$(".saveBtn").on("click", function () {
    // grab the sibling of .saveBtn, the .description textarea, and set it equal to var text
    var text = $(this).siblings(".description").val();
    // grab the parent of .saveBtn and its id attribute and set it equal to time
    var time = $(this).parent().attr("id");
    // setItems in local storage
    localStorage.setItem(time, text);
})

// Tried this as a for loop but couldn't figure out how to iterate through an index that might not have all the descriptions filled.
// retrive each description from local storage as needed.
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));