var btnTranslate = document.querySelector("#translate-button");
var txtInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#translate-output");

var serverURL = "https://api.funtranslations.com/translate/groot.json";


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}


function clickHandler() {
    //taking input
    var inputText = txtInput.value; 


    //calling server for processing..
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server! Try again after some time.")
}
