const bannerImgs = ['images/banner2.webp', 'images/banner2.webp', 'images/banner4.webp'];

const productsData = [{
    name: 'Demo Product name',
    category: 'Demo category',
    price: 80.00,
    image: 'images/product1.png'
},
{
    name: 'Demo Product name',
    category: 'Demo category',
    price: 29.00,
    image: 'images/product2.jpg'
},
{
    name: 'Demo Product name',
    category: 'Demo category',
    price: 50.00,
    image: 'images/product3.png'
},
{
    name: 'Demo Product name',
    category: 'Demo category',
    price: 80.00,
    image: 'images/product4.jpg'
},
{
    name: 'Demo Product name',
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
];

const accessoriesData = [{
    category: 'Demo category',
    name: 'Dummy Product Name',
    image: 'images/accessories2.jpg',
    price: 39.00
},
{
    category: 'Demo category',
    name: 'Dummy Product Name',
    image: 'images/accessories3.jpg',
    price: 50.00
},
{
    category: 'Demo category',
    name: 'Dummy Product Name',
    image: 'images/accessories4.jpg',
    price: 29.00
},
{
    category: 'Demo category',
    name: 'Dummy Product Name',
    image: 'images/accessories5.jpg',
    price: 55.00
},
{
    category: 'Demo category',
    name: 'Dummy Product Name',
    image: 'images/accessories7.jpg',
    price: 79.00
},
{
    category: 'Demo category',
    name: 'Dummy Product Name',
    image: 'images/accessories7.jpg',
    price: 29.00
}
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
    const { name, category, price, image } = product;
    const productCard = document.createElement('div');
    productCard.className = 'col-lg-2 col-md-4 col-sm-12';
    productCard.innerHTML = `<div class="card shadow">
    <img src=${image} class="card-img-top w-100" alt=${name}>
    <div class="card-body">
      <hp class="card-title">${category}</p>
      <h6 class="card-title">${name}</h6>
      <h5 class="card-title text-brand"> $ ${price}</h5>
    </div>
  </div>`;
    hotDeals.appendChild(productCard);
});

const newArrivals = document.getElementById('new-arrivals');
productsData.map(product => {
    const { name, category, price, image } = product;
    const productCard = document.createElement('div');
    productCard.className = 'col-lg-2 col-md-4 col-sm-12';
    productCard.innerHTML = `<div class="card shadow">
    <img src=${image} class="card-img-top w-100" alt=${name}>
    <div class="card-body">
      <p class="card-title">${category}</p>
      <h6 class="card-title">${name}</h6>
      <h5 class="card-title text-brand"> $ ${price}</h5>
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

const featuredAccessory = document.getElementById('featured-accessory')
featuredAccessory.innerHTML = ` <div class="card">
<img src="images/accessories1.jpg" class="card-img-top" alt="accessory img">
<div class="card-body">
    <h6 class="card-name">Accessories</h6>
    <h5 class="card-name">Dummy Product Name</h5>
    <div class="d-flex justify-content-between">
        <div class="ratings d-flex">
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <h3 class="text-brand">$ 79</h3>
    </div>
</div>
</div>`;

const accessories = document.getElementById('accessories');
accessoriesData.map(accessory => {
    const { name, category, price, image } = accessory;
    const accessoryCard = document.createElement('div');
    accessoryCard.className = 'col-lg-4 col-md-6 col-sm-12';
    accessoryCard.innerHTML = `<div class="card mb-2">
    <img src=${image} class="card-img-top w-100" alt=${name}>
    <div class="card-body">
      <h6 class="card-name">${category}</h6>
      <h6 class="card-name">${name}</h6>
      <h5 class="card-name text-brand"> $ ${price}</h5>
    </div>
  </div>`;
    accessories.appendChild(accessoryCard);
});