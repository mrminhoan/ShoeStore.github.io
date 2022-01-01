import initialData from './initialData.js'
const { products } = initialData
var body = document.querySelector('body')

// Lấy biến từ URL
var params = (new URL(document.location)).searchParams;
var id = params.get("id");


// Xử lý ảnh detail
let lisDivImg = document.querySelectorAll('.list-image-detail div')
let imgWrap = document.querySelector('.image-wrapper img')
let currentIndex = 0

function setCurrentIndex(index){
    currentIndex = index
    imgWrap.src = lisDivImg[currentIndex].querySelector('img').src
}

lisDivImg.forEach( (img,index) =>{
    img.addEventListener('click', (e) => setCurrentIndex(index))
} )


var product = products.find( (item,index) => item.id == id)
showsanpham(product)
function showsanpham(product)

{
    if(product){
        var action =
        `
            <h2 class="product-action__name">${product.name}</h2>
            <h2 class="product-action__price">${product.price} <span>$</span></h2>
            <label for="" class="product-action__amount-label">Số lượng</label>
            <input  class="product-action__amount-input" type="number" min="1" max="10" width="50px" value="1">
            <input type="hidden" value="${product.image}">
            <button class="product-action__btn-add">Add to Cart</button>
        `
        var imageWrapper =
        `
            <img src="${product.image}" alt="">
        `
        var imageDetail = 
        `
            <div class="item-image-detail">
                <img src="${product.image}" alt="">
            </div>

            <div class="item-image-detail">
                <img src="${product.image}" alt="">
            </div>

            <div class="item-image-detail">
                <img src="${product.image}" alt="">
            </div>

            <div class="item-image-detail">
                <img src="${product.image}" alt="">
            </div>
        `
        var detailTitle =
        `
            ${product.title}
        `
        document.querySelector('.product-action').innerHTML = action
        document.querySelector('.image-wrapper').innerHTML = imageWrapper 
        document.querySelector('.list-image-detail').innerHTML = imageDetail
        document.querySelector('.product-details-content').innerHTML = detailTitle
    }
}

