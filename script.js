
document.querySelector(".btn-authorize").addEventListener("click", authorize);


console.log(document.cookie);

var url_string = window.location.href;
var url = new URL(url_string);
var code = url.searchParams.get("code");
if(typeof code == "string") {
    document.cookie = "userName="+code;
    console.log('cookie added')
}

function authorize() {

}