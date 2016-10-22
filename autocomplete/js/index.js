var currentIndexPosition = 0;
var KEY_UP = 40;
var KEY_DOWN = 38;
var KEY_ENTER = 13;

var names = ["India", "Paris", "Spain", "Italy", "Germany", "Indonesia", "Canada", "Switzerland"];

$(document).on('click', '.selectSuggestion', function(event) {
    $("#countries").val(event.target.innerText);
    $("#suggestions").css("display", "none");
});

$("#countries").keydown(function(event) {
    var value = $("#countries").val();
    var matches = prefix(value, names);
    $("#suggestions").html("");
    $("#suggestions").css("display", "block");


    for (var i = 0; i < matches.length; i++) {
        $("#suggestions").append('<p class="selectSuggestion">' + matches[i] + '</p>');
    }

    processSpecialKeys(event);

});

function prefix(str, arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].slice(0, str.length).toLowerCase() == str.toLowerCase()) {
            result.push(arr[i]);
        }
    }
    return result;
}

function processSpecialKeys(event) {

    var el = document.getElementsByClassName("selectSuggestion")[currentIndexPosition];
    console.log(el.innerText);
    if (event.which == KEY_ENTER) {
        $("#countries").val(document.getElementsByClassName("selectSuggestion")[currentIndexPosition - 1].innerText);
        $("#suggestions").css("display", "none");

    } else if (event.which == KEY_UP) {
        if (currentIndexPosition < document.getElementsByClassName("selectSuggestion").length) {
            currentIndexPosition += 1;
            highlight(el);
        }
    } else if (event.which == KEY_DOWN) {
        if (currentIndexPosition > 0) {
            currentIndexPosition -= 1;
            highlight(el);
        }
    } else {
        currentIndexPosition = 0;
    }
}


function highlight(element) {
    $(".selectSuggestion").each(function() {
        $(this).removeClass("selectedSuggestion");
    });
    if (element.classList) {
        element.classList.add("selectedSuggestion");
    } else {
        element.className += ' ' + "selectedSuggestion";
    }
}
