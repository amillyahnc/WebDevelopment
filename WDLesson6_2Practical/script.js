function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361",
  }
  let output = document.getElementById("output");
  //Challenge 1: Create and display a card of the information contained in the JSON variable school
let build =`
     <div class ="card">
          <h2> ${ school.name } </h2>
          <img src ="${school.image}">
          <p>${school.address}</p>
     </div>
  `
  output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information
  let artist = {
    <div class ="card">
    "name":"Mac Miller",
    "image":"https://pbs.twimg.com/media/Esorm9fWMAAwTbD.jpg",
    "album":"https://images.genius.com/2fe62acfc7f77faa428fcda2d809eb31.1000x1000x1.png",
    "url":"https://youtu.be/0NNd1Iz1xCE"
  }
  let output = document.getElementById("output");
  //Challenge 3: Build a card for the information in the JSON.  Make the image a hyperlink to the url provided.
let build =`
     <div class ="card">
          <h2> ${ school.name } </h2>
          <img src ="${school.image}">
          <p>${school.address}</p>
     </div>
}

}
