//Get a dog photo from the dog.ceo api and place the photo in the DOM

// here is the url we are using for dog's photo, we use this fetch method to to send that request to the server.

// this url is going to the dog's CEO server. there's a server out there on the internet at the (dog.ceo) url that is listening for these fetch requests when it hear these fetch requests it goes and grabs some data from its database and then it responds with that data in the form of an object 


fetch("https://dog.ceo/api/breeds/image/random")

// whatever we get from the server make sure it's json data, parse it look at it as though it was json data, 
    .then(res => res.json()) // parse response as JSON

    // and then whatever we get back we passed through the parameter of data  .
    .then(data => {

      // so whatever we got bacck from that dog CEO api is now going to be console logged
      // we want message property from data and object give us the link as a url. it's a url to an image. we could actually use these image.  
      console.log(data.message)
      // we r going to change the source and we r going to set the source to (data.message)

      // so whatever we got back from the api is being passed into dara, we want that message property which was the image url and we are going to use that image url to change the source of the image that's already in our html.

      // refresh the website and we will get new image every time, so every time i refresh i am making a request to the server and the server is sending me a new object and each time that object has a new image url in it. and can keep using that image url and each time i refresh i get a nice cue of that,  

      document.querySelector('img').src = data.message
    })
    // if there is an error
    .catch(err => {
        console.log(`error ${err}`)
    })