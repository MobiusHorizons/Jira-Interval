var bookmarklet = require('./index.bookmarklet.js');

var link = document.createElement('a');
link.href = bookmarklet;
link.innerHTML = "Jira Interval"

document.querySelector('#bookmarklet').appendChild(link);
