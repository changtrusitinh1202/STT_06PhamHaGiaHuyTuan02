const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
(function() {
    $.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            alert("no good");
        });
})()

$.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        beforeSend: function(xhr) {
            xhr.overrideMimeType("text/plain; charset = x - user - defined ");
        }
    })
    .done(function(data) {
        if (console && console.log) {
            console.log("Sample of data:",
                data.slice(0, 100));
        }
    });

//Get all users
var url = 'https://jsonplaceholder.typicode.com/todos';
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}

xhr.send(null);


// Get a user

var url_1 = 'https://jsonplaceholder.typicode.com/todos';
var xhr_1 = new XMLHttpRequest()
xhr_1.open('GET', url_1 + '/1', true)
xhr_1.onload = function() {
    var users = JSON.parse(xhr_1.responseText);
    if (xhr_1.readyState == 4 && xhr_1.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}

xhr_1.send(null);

// Post a user
var url_2 = 'https://jsonplaceholder.typicode.com/todos';
// var data = {};

// data.firstname = "John";
// data.lastname = "Snow";

// var json = JSON.stringify(data);
var xhr_2 = new XMLHttpRequest();
xhr_2.open("POST", url_2, true);
xhr_2.setRequestHeader('Content-type',
    'application/json; charset=utf-8');
xhr_2.onload = function() {
    var users = JSON.parse(xhr_2.responseText);
    if (xhr_2.readyState == 4 && xhr_2.status == "201") {
        console.table(users);
    } else {
        console.error(users);
    }
}

xhr_2.send(null);

var url_3 = 'https://jsonplaceholder.typicode.com/todos';
var data = {};
data.firstname = "John2";
data.lastname = "Snow2";
var json = JSON.stringify(data);
var xhr_3 = new XMLHttpRequest();
xhr_3.open("PUT", url_3 + '/12', true);
xhr_3.setRequestHeader('Content-type', 'application/json; charset = utf - 8 ');
xhr_3.onload = function() {
    var users = JSON.parse(xhr_3.responseText);
    if (xhr_3.readyState == 4 && xhr_3.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr_3.send(json);


// Delete a user
var url_4 = 'https://jsonplaceholder.typicode.com/todos';
var xhr_4 = new XMLHttpRequest();
xhr_4.open("DELETE", url_4 + '/12', true);
xhr_4.onload = function () {
    var users = JSON.parse(xhr_4.responseText);
    if (xhr_4.readyState == 4 && xhr_4.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr_4.send(null);


