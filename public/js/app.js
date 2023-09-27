function split(str) {
    str = str.split('\n');
    return str;
}

function start() {
    var links = split($('#links').val());

    var RegExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

    links.forEach((element) => {
        if(RegExp.test(element)){
            if(element.indexOf('youtube.com/@') > 0) {
                console.log('channel');
            } else {
                if(element.indexOf('youtube.com/watch?') > 0) {
                    console.log('video link');
                } else {
                    var a = document.createElement("a");
                    a.href = element;
                    a.target="_blank";
                    a.click();
                }
            }
        }

    });

    var a = document.createElement("a");
    a.href = "https://youtube.com/results?search_query=1";
    a.target="_blank";
    a.click();
}
