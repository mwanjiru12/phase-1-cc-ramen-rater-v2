const { name } = require("happy-dom/cjs/PropertySymbol.cjs");

const ramenAPI = 'http://localhost:3000/ramens';

const ramenMenu = document.getElementById('ramen-menu');
document.getElementById('new-ramen').addEventListener('submit', createNewRamen);




fetch(ramenAPI)
  .then(res => res.json())
  .then(renderRamens);

function renderRamens(ramens) {
  ramens.forEach(renderRamen);
}

function renderRamen(ramen) {
  const ramenImage = document.createElement('img');
  ramenImage.src = ramen.image;
  ramenMenu.append(ramenImage);
  ramenImage.addEventListener('click', () => renderRamenDetail(ramen))
}

function renderRamenDetail(ramen) {
  const ramenDetail = document.getElementById('ramen-detail');

  const detailImage = ramenDetail.querySelector('.detail-image');
  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;

  ramenDetail.querySelector('.name').textContent = ramen.name;
  ramenDetail.querySelector('.resturant').textContent = ramen.resturant;

  document.getElementById('rating-display').textContent = ramen.rating;
  document.getElementById('comment-display').textContent = ramen.comment;
}

function createNewRamen(event){
  event.preventDefault();
  const form = event.target;
  const newRamen = {
    name: form.name.value,
    resturant: form.resturant.value,
    image: form.image.value,
    rating: form.rating.value,
    comment: form.comment.value,
};
renderRamenImage(newRamen)
}