//API key rendering images 
const url = 'https://api.thecatapi.com/v1/images/search?x-api-key=f01e75a9-45fc-4138-9d7b-e7fc6ca4790'

//Elements variable
const $imageContainer = $('#imageContainer')
const $findFriend = $('#friend-btn')
console.log($findFriend)




//function to get image 
function getImage() {
   //function to call api for cat images 
    $.ajax(url).then(function(data) {   
        //empties the the imageContainer div tag and renders new img 
        $imageContainer.empty();
        //creates img tag and pulls from the API array data
        $imageContainer.append(`<img id="catImg" src='${data[0].url}'></img>`)
        $(this)
            .fade(1000)
            
        
       
    
        console.log(data[0])
       
    })
}


//calling getImage function
getImage();



//next step creat a onclick function to render random photos when the button is clicked


//button click function
$('#friend-btn').on('click', function(event){
    
    
    getImage()
    
   
})


$('#adopt-btn').on('click', function(){
    window.open("https://www.petfinder.com/", "_blank")
})

$('#cafe-btn').on('click', function(){
    window.open("https://www.naughtycatcafe.com/visit-us", "_blank")
})

$('#catcare').on('click', function(){
    window.open("https://www.aspca.org/pet-care/cat-care/general-cat-care", "_blank")
})
