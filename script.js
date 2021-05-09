const bannerImgs = ['images/banner2.webp', 'images/banner2.webp', 'images/banner4.webp'];

const productsData = [{
    title: 'Demo Product title',
    category: 'Demo category',
    price: 80.00,
    image: 'images/product1.png'
},
{
    title: 'Demo Product title',
    category: 'Demo category',
    price: 29.00,
    image: 'images/product2.jpg'
},
{
    title: 'Demo Product title',
    category: 'Demo category',
    price: 50.00,
    image: 'images/product3.png'
},
{
    title: 'Demo Product title',
    category: 'Demo category',
    price: 80.00,
    image: 'images/product4.jpg'
},
{
    title: 'Demo Product title',
    category: 'Demo category',
    price: 519.00,
    image: 'images/product5.jpg'
}];

const banner = document.getElementById('banner');
bannerImgs.map(bannerimg => {
    const bannerItem = document.createElement('div');
    bannerItem.className = 'col-lg-4 col-md-6 col-sm-12 my-3';
    bannerItem.innerHTML = `<img src="${bannerimg}" class='w-100' alt="banner image">`;
    banner.appendChild(bannerItem);
});



const hotDeals = document.getElementById('hot-deals');
productsData.map(product => {
    const { title, category, price, image } = product;
    const productCard = document.createElement('div');
    productCard.className = 'col-lg-2 col-md-4 col-sm-12';
    productCard.innerHTML = `<div class="card">
    <img src=${image} class="card-img-top w-100" alt=${title}>
    <div class="card-body">
      <h6 class="card-title">${category}</h6>
      <h6 class="card-title">${title}</h6>
      <h5 class="card-title"> $ ${price}</h5>
    </div>
  </div>`;
    hotDeals.appendChild(productCard);
});

const newArrivals = document.getElementById('new-arrivals');
productsData.map(product => {
    const { title, category, price, image } = product;
    const productCard = document.createElement('div');
    productCard.className = 'col-lg-2 col-md-4 col-sm-12';
    productCard.innerHTML = `<div class="card">
    <img src=${image} class="card-img-top w-100" alt=${title}>
    <div class="card-body">
      <h6 class="card-title">${category}</h6>
      <h6 class="card-title">${title}</h6>
      <h5 class="card-title"> $ ${price}</h5>
    </div>
  </div>`;
  newArrivals.appendChild(productCard);
});