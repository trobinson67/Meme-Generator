const form = document.querySelector('form');
const memeList = document.querySelector('ul');
const img = document.querySelector('#image-input')
const div = document.querySelector('div');
const upperText = document.querySelector('#top-text')
const lowerText = document.querySelector('#bottom-text')

form.addEventListener('submit', function(event){
    event.preventDefault();
    let container = document.createElement('div');
    container.setAttribute('class','container');
    // pulls text from the image url input and assigns it to our imgURL variable
    let imgURL = img.value;
    let imgDiv = document.createElement('div');
    imgDiv.setAttribute('class','img')
    
    // creates a new image element
    let newMeme = document.createElement('img');
    // set src attribute
    newMeme.setAttribute('src', imgURL);
    //newMeme.setAttribute('style','width:100%;')
    //appends the new meme to div
    imgDiv.append(newMeme);
    container.append(imgDiv)
    let upperTextDiv = document.createElement('div');
    let topText = upperText.value;
    console.log(topText)
    upperTextDiv.setAttribute('id','upper-text')
    upperTextDiv.append(topText)
    container.append(upperTextDiv)
    let lowerTextDiv = document.createElement('div');
    lowerTextDiv.setAttribute('id','lower-text')
    let bottomText = lowerText.value;
    lowerTextDiv.append(bottomText);
    container.append(lowerTextDiv)
    div.append(container)
    
    
    form.reset();

})

div.addEventListener("mouseover", function(event){
  div.style.backgroundColor = 'gray';
    //overlay.style.opacity = 0.5;
    //event.target.appendChild(overlay)
})

div.addEventListener("mouseleave",function(event){
    div.style.backgroundColor = "";
})

div.addEventListener('click', function(event){
    console.dir(event.target)
    event.target.offsetParent.offsetParent.remove();
})