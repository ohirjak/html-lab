var STORAGE_USER = "user";

var el_user;
var el_message;
var el_submit;

function sendMessage() {
    var name = el_user.val();
    var message = el_message.val();

    if (name == "") {
        el_user.focus();
        return;
    }

    if (message != "") {
        $.post("/msg", { w: name, m: message } );
        el_message.val("");
    }
}

/*function submitCheckEnabled() {
    if (el_user.val() != "" && el_message.val() != "") {
        el_submit.prop('disabled', false);
    } else {
        el_submit.prop('disabled', true);
    }
}*/

function userOnChange() {
    localStorage.setItem(STORAGE_USER, el_user.val());
    //submitCheckEnabled();
}

/*function messageOnChange() {
    submitCheckEnabled();
}*/

function initFields() {
    el_user = $("#user");
    el_message = $("#message");
    el_submit = $("#btn");
}

function setFields() {
    var user = localStorage.getItem(STORAGE_USER);

    if (user != "") {
        el_user.val(user);
        el_message.focus();
    } else {
        el_user.focus();
    }

    //submitCheckEnabled();
}

function setHandlers() {
    el_user.change(userOnChange);
    //el_message.change(messageOnChange);
    el_submit.click(sendMessage);
}

$(function() {
    initFields();
    setFields();
    setHandlers();
});
