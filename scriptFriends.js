document.querySelector(".btn-logout").addEventListener("click", deleteCookie);
document.querySelector(".btn-refresh").addEventListener("click", getFriends);

if(typeof getCookie("token") == "undefined") {
    window.location.replace("./index.html");
}

getName();
getFriends();



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




function getFriends()  {   
    token=getCookie("token");
    url="https://api.vk.com/method/friends.get?count=5&fields=photo_100,nickname&order=random&access_token="+ token +"&v=5.92&callback=callbackDisplayFriends";

    var script = document.createElement('SCRIPT');
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function getName() {
    token=getCookie("token");
    url="https://api.vk.com/method/users.get?access_token="+ token +"&v=5.92&callback=callbackDisplayName";
    var script = document.createElement('SCRIPT');
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function callbackDisplayName (response) {
  console.log(response);
  document.querySelector('.greetings').innerHTML="Здравствуйте, " + response.response[0].first_name + " "+ response.response[0].last_name + "!";

}

function callbackDisplayFriends (response) {
    console.log(response);
    names=document.getElementsByClassName("friend-name");

    images=document.getElementsByClassName("friend-img");
    for (i=0; i < names.length; i++) {
        names[i].innerHTML=response.response.items[i].first_name + " <br /> " +response.response.items[i].last_name;
        images[i].src=response.response.items[i].photo_100;
    }
    
}

  //https://oauth.vk.com/oauth/authorize?scope=3&client_id=6861794&redirect_uri=nikitaafanasyev.github.io&response_type=token