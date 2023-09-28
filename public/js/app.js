function split(str) {
    str = str.split('\n');
    return str;
}

function inArray(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

function start() {
    var links = split($('#links').val());

    var links_opened = []

    var RegExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

    links.forEach((element) => {
        if(RegExp.test(element)){
            if(element.indexOf('youtube.com/@') > 0) {
                console.log('channel link');
            } else {
                if(element.indexOf('youtube.com/watch?') > 0) {
                    console.log('video link');
                } else {
                    if(element.indexOf('sp=') > 0) {
                        element = element.replace('sp=', '');
                        element = element + '=';
                    } else {
                        element = element + '=';
                    }

                    var array = element.split('=');
                    array.forEach((item) => {
                        if(item.length > 0) {
                            element = item
                        }
                    });

                    element = element.split('&')[0];

                    if(inArray(links_opened, element)) {
                        console.log('is already opened')
                    } else {
                        var a = document.createElement("a");
                        a.href = "https://youtube.com/results?search_query=" + element + '&sp=EgQIAhAB';
                        a.target="_blank";
                        a.click();
                        links_opened.push(element)
                    }

                    console.log("https://youtube.com/results?search_query=" + element + '&sp=EgQIAhAB');

                }
            }
        }

    });

    console.log(links_opened);

    var a = document.createElement("a");
    a.href = "https://youtube.com/results?search_query=1";
    a.target="_blank";
    a.click();
}
