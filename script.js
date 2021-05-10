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

const categoriesData = [{
    name: 'Saw',
    image: 'images/category1.jpg'
},
{
    name: 'Hammer',
    image: 'images/category2.jpg'
},
{
    name: 'Cultivator',
    image: 'images/category3.jpg'
},
{
    name: 'Ladder',
    image: 'images/category4.jpg'
},
{
    name: 'Wheelbarrow',
    image: 'images/category5.jpg'
},
{
    name: 'Mallet',
    image: 'images/category6.jpg'
},
]


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
      <h5 class="card-title text-warning"> $ ${price}</h5>
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
      <h5 class="card-title text-warning"> $ ${price}</h5>
    </div>
  </div>`;
    newArrivals.appendChild(productCard);
});


const categories = document.getElementById('categories');
categoriesData.map(category => {
    const { name, image } = category;
    const categoryCard = document.createElement('div');
    categoryCard.className = 'col-lg-4 col-md-6 col-sm-12 my-3';
    categoryCard.innerHTML = ` <div class="row align-items-center bg-white">
                            <div class="col-md-4"><img src="${image}" class="w-100 img-fluid" alt=""></div>
                            <div class="col-md-6"><h4>${name}</h4></div>
                        </div>`;
    categories.appendChild(categoryCard);
});

