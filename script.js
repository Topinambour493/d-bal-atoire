function getOneTheme(text){
    numberThemes = text.length - 1
    indexTheme1 = getRandom(numberThemes)
    indexTheme2 = getRandom(numberThemes)
    if (indexTheme1 == indexTheme2){
        console.log("The two themes would have been identical")
        getOneTheme(text)
    }
    document.getElementById('theme1').innerHTML = text[indexTheme1]
    document.getElementById('theme2').innerHTML = text[indexTheme2]
}

function getRandom(n){
    return Math.floor(Math.random() * n);
}

function getFile(file){
    fetch(file)  
        .then(function (response) {
            return response.text()
        })
        .then(function (response){
            getOneTheme(response.split("\n"))
        })
}

getFile("themes.txt");
