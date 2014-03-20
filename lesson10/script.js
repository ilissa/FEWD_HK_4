// // DISPLAY Displayed an image
//   * An array of images

var images = [
  'food1.jpg',
  'food2.jpg',
  'food3.jpg',
  'food4.jpg',
  'food5.jpg',
  'food6.jpg',
  'food7.jpg',
  'food8.jpg',
  ],
    scores = [],
    position = 0;

//   * Display the image corresponding to the number in the sequence the user is at

  function displayImage(){
    $('#imgbox').attr('src', images[position]) 
  }

  function changePosition(){
    console.log(position);
    if(isFinished()){
      showScorePage();
    } else if(isFirst()){
      position = 0;
    } else {
      displayImage();
    }
  }

// // LOGIC End the rating series
  function isFirst(){
    if (position < 0){
      return true;
    } else {
      return false;
    }
  }
  function isFinished(){
    if(images.length == position){
      return true;
    } else {
      return false;
    }
  }
//   Once the user reaches the last image in the array, end the series (disable the skip button, show the score()
//   // DISPLAY Show the deliciousness score

  function showScorePage(){}
//   * Add the scores, divide by total number of images
//   * display score 

// // NAVIGATION Return to a previously visited image
//   * Display the Previous image ()

  function prevPosition(){
    position = position - 1;
    changePosition()
  }

  function nextPosition(){
    position = position + 1;
    changePosition()
  }

displayImage();
$('a.prev').on('click',function(event){
  event.preventDefault();
  prevPosition();  
})

$('a.next').on('click',function(event){
  event.preventDefault();
  nextPosition();  
})

// // NAVIGATION Skipping the current image
//   * Display the Next image ()

// // RATING Ability to rate the image
//   * Store the user score in an array with the same index as the image in the images array
//   // NAVIGATION Display the subsequent image on rating
//   * Display Next Image ()

// // RATING Rerate the images
//   * Call the rating function  ()