function createTime () {    
    var date = new Date();
    var options = {
        day: 'numeric',
        year: 'numeric',
        month: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    return date.toLocaleString("ru", options);
}



function createRemindTime (element, date) {
    var fullDate = date;
    var dateField = document.createElement('input');
    dateField.classList.add('dataString');
    dateField.setAttribute('pattern', `\d[0-3]\d[0-9].\d[0-1]\d[0-9].[0-9]{4}, \d[0-2]\d[0-9]:\d[0-5]\d[0-9]`);
    dateField.value = fullDate;
    if (!element) {
        return dateField;
    } else element.appendChild(dateField);
}