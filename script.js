const bannerImgs = ['images/banner2.webp', 'images/banner2.webp', 'images/banner4.webp'];

const banner = document.getElementById('banner');
bannerImgs.forEach(bannerimg => {
    const bannerItem = document.createElement('div');
    bannerItem.className = 'col-lg-4 col-md-6 col-sm-12';
    bannerItem.innerHTML = `<img src="${bannerimg}" class='w-100' alt="banner image">`;
    banner.appendChild(bannerItem);
});

// const hotDealsProducts = [{
//     title = 'Demo Product title',
//     category = 'Demo category',
//     price = 80.00,
//     image = 'images/product1.png'
// },
// {
//     title = 'Demo Product title',
//     category = 'Demo category',
//     price = 29.00,
//     image = 'images/product2.png'
// },
// {
//     title = 'Demo Product title',
//     category = 'Demo category',
//     price = 50.00,
//     image = 'images/product3.png'
// },
// {
//     title = 'Demo Product title',
//     category = 'Demo category',
//     price = 80.00,
//     image = 'images/product4.png'
// },
// {
//     title = 'Demo Product title',
//     category = 'Demo category',
//     price = 519.00,
//     image = 'images/product5.png'
// }];

// const hotDeals = document.getElementById('hot-deals');
// hotDealsProducts.forEach(hotDealsProduct => {
//     const { title, category, price, image }
//     const product = document.createElement('div');
//     product.className = 'col-lg-4 col-md-6 col-sm-12';
//     // product.innerHTML = `<img src="${bannerimg}" class='w-100' alt="banner image">`;
//     hotDealsProducts.appendChild(product);
// });