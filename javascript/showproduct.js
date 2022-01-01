import initialData from './initialData.js'
import { mapOrder } from './sort.js'
const { products } = initialData
var body = document.querySelector('body')
body.addEventListener('load', showsanpham(products))

// XỬ lý show sản phẩm
function showsanpham(products) {
    if(products.length > 0){
        var htmls = products.map(function (product) {
            return (
                `
                <div class="col l-3 m-4 c-12">
                    <div class="product__cart ">
                        <span class="like"><i class='bx bx-heart'></i></span>
                        <span class="cart__icon"><i class='bx bx-cart-alt' ></i></span>
                        <a class="product__img" href="productDetail.html?id=${product.id}">
                            <img src="${product.image}" alt="">
                        </a>
                        <h2 class="product__name">${product.name}</h2>
                        <p class="product__price"><span>${product.price}</span>$</p>
                        <div class="product__amount">
                            <label for="">AMOUNT:</label>
                            <input type="number" min="1" max="10" value="1">
                        </div>
                        <div class="product__action">
                         
                            <button class="add__Cart">Add cart</button>
                        </div>
                    </div>
                </div>
                `
            )
        })
        // <button>Buy now</button>

        
    const html = htmls.join('')
    document.querySelector('.product__wrapper').innerHTML = html
    }else{
        document.querySelector('.product__wrapper').innerHTML = '<h2 class="product-empty">Sản phẩm đang được cập nhật</h2>'
    }
  
}


// Xử lý Sort Sản phẩm
var productPrice = new Array()
var ordered_array
products.forEach(function(product, index){
    productPrice.push(product.price)
})


// Sort Product ascending
var ascending = document.querySelector('.ascending')
ascending.addEventListener('click', function(){
    productPrice.sort((a,b) => a-b)
    ordered_array = mapOrder(products,productPrice,'price')
    document.querySelector('.product__wrapper').innerHTML = ""
    showsanpham(ordered_array)
})

// Sort Product descending
var descending = document.querySelector('.descending')
descending.addEventListener('click', function(){
    productPrice.sort((a,b) => b-a)
    ordered_array = mapOrder(products,productPrice,'price')
    document.querySelector('.product__wrapper').innerHTML = ""
    showsanpham(ordered_array)
})