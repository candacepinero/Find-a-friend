//API key
const url = 'https://api.thecatapi.com/v1/images/search?x-api-key=f01e75a9-45fc-4138-9d7b-e7fc6ca4790'

//Elements variable
const $findFriend = $('#findfriend-btn')
console.log($findFriend)
const $breed = $('#breed')
console.log($breed)

//function to get image 
function getImage() {
   //function to call api for cat images 
    $.ajax(url).then(function(data) {
        $('main').append(`<img src='${data[0].url}'></img>`)
        console.log(data[0])
    })
}



//calling getImage function
getImage();


//next step creat a onclick function to render random photos when the button is clicked


//button click function
