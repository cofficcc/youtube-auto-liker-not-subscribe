function split(str) {
    str = str.split('\n');
    return str;
}

function start() {
    var links = split($('#links').val());

    var RegExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

    links.forEach((element) => {
        if(RegExp.test(element)){
            var a = document.createElement("a");
            a.href = element;
            a.target="_blank";
            a.click();
        }

    });
}