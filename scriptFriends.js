document.querySelector(".btn-logout").addEventListener("click", deleteCookie);

if(typeof getCookie("token") == "undefined") {
    window.location.replace("./index.html");
}

console.log(httpGetFriends());



function deleteCookie() {
    document.cookie = 'token=; Max-Age=-99999999;';  
    console.log(document.cookie);
    window.location.replace("./index.html");
  }

  function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }


  function httpGetFriends()
  {   
      token=getCookie("token");
      url="https://api.vk.com/method/friends.get?count=5&order=random&access_token="+ token +"&v=5.92";
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", url, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }

  //https://oauth.vk.com/oauth/authorize?scope=3&client_id=6861794&redirect_uri=nikitaafanasyev.github.io&response_type=token