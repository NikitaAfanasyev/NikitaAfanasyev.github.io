
var url_string = window.location.href;
var url = new URL(url_string);
var data = window.location.hash.substr(1);
data = data.split('&');
token=data[0].split('=')[1];

if(typeof token == "string") {
    document.cookie = "token="+token;
    console.log('cookie added')
}



if(typeof getCookie("token") !== "undefined") {
    window.location.replace("./friends.html");
}

console.log(document.cookie);
console.log(getCookie("token"));






function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }