const instruments = [
  {
    id: 1,
    name: "Flute",
    type: "Woodwind",
    instrumentURL: "https://res.cloudinary.com/flute-specialists-inc/images/f_auto,q_auto/v1586817005/Haynes-Silver-Flutes-Websize/Haynes-Silver-Flutes-Websize.jpg?_i=AA"
  },
  {
    id: 2,
    name: "Violin",
    type: "String",
    instrumentURL: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503517/1363938/main-image"
  },
  {
    id: 3,
    name: "Trumpet",
    type: "Brass",
    instrumentURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Yamaha_Trumpet_YTR-8335LA_crop.jpg/1200px-Yamaha_Trumpet_YTR-8335LA_crop.jpg"
  },
  {
    id: 4,
    name: "Clarinet",
    type: "Woodwind",
    instrumentURL: "https://www.rentmyinstrument.com/img/prods/clarinet.jpg"
  },
  {
    id: 5,
    name: "Oboe",
    type: "Woodwind",
    instrumentURL: "https://media.istockphoto.com/id/147337453/photo/oboe-on-white.jpg?s=612x612&w=0&k=20&c=484v5LAkikIthnVxbLdUq_-GiOJS0bWiS3vX-QvfelU="
  },
  {
    id: 6,
    name: "French Horn",
    type: "Brass",
    instrumentURL: "https://cdn.jpmusicalinstruments.com/uploads/prod_card_img/2_422_cb.jpg?v=1516640189"
  },
  {
    id: 7,
    name: "Trumpet",
    type: "Brass",
    instrumentURL: "https://images.unsplash.com/photo-1573871666457-7c7329118cf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1bXBldHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
  },
  {
    id: 8,
    name: "Violin",
    type: "String",
    instrumentURL: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlvbGlufGVufDB8fDB8fHww&w=1000&q=80"
  },
  {
    id: 9,
    name: "Piccolo",
    type: "Woodwind",
    instrumentURL: "https://www.flutespecialists.com/wp-content/uploads/2017/11/0002908_gemeinhardt-piccolo-4pmh_550.jpeg"
  },
  {
    id: 10,
    name: "Saxophone",
    type: "Woodwind",
    instrumentURL: "https://assets.nationbuilder.com/eastman/pages/3765/attachments/original/1585936673/Woodwinds_AltoSaxophone_EAS850__GD_040220.jpg?1585936673"
  }
];

//creating utility functions  
const renderToDom = (divId, html) => {
  document.querySelector(divId).innerHTML = html; 
}

let domString = ""; 
const cardsOnDom = (array) => {
array.forEach((instrument) => {
  domString += `<div class="card border-success mb-3" style="max-width:15rem;">
  <div class="card-header bg-transparent border-success"> ${instrument.name} </div>
  <div class="card-body text-success">
  <img src=${instrument.instrumentURL} class="card-img-top" alt=${instrument.name}>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="card-footer bg-info-subtle border-success">${instrument.type}
  </div>
</div>`
})
renderToDom("#app_cards", domString); 
}

//Creating HTML `
const startButton = `<button type="button" class="btn btn-success btn-sm" id="startButton">Start App</button>`  
renderToDom("#app_cards", startButton);

//Creating Event Listener Function
const eventListenerFunc = () => {
}

eventListenerFunc(); 

//Creating Start Button
document
.querySelector("#startButton")
.addEventListener("click", () => {
  cardsOnDom(instruments); 
})
