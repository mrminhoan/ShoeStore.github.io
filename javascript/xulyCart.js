var addToCartBtns = document.querySelectorAll('.add__Cart')
var giohang = new Array()
var body = document.querySelector('body')
body.onload = function () {
	showsanphamlencart()
	deleteCartDeleteGate()
}

function layThanhPhanSanPham(addToCartBtn) {
	var tam = new Array()
	var productCardChildren = addToCartBtn.offsetParent.children
	var productImg = productCardChildren[2].children[0].src
	var productName = productCardChildren[3].innerText
	var productPrice = parseInt(productCardChildren[4].children[0].textContent)
	var productAmount = parseInt(productCardChildren[5].children[1].value)
	var tam = [productImg, productName, productPrice, productAmount]
	return tam
}

// XỬ lý thêm sản phẩm ở trang Chủ
const productWrapper = document.querySelector('.product__wrapper')
if (productWrapper) {
	productWrapper.addEventListener('click', function (e) {
		let storage = sessionStorage.getItem("login")
		if (storage) {
			const addToCart = e.target.closest('.add__Cart')
			if (addToCart) {
				var kt = 0
				layThanhPhanSanPham(addToCart)
				var [...a] = layThanhPhanSanPham(addToCart)
				let storage = localStorage.getItem('giohang')
				var giohangnew = JSON.parse(storage)
				if (!storage) {
					giohang.push(layThanhPhanSanPham(addToCart))
					localStorage.setItem("giohang", JSON.stringify(giohang))
				}
				else {
					cart = JSON.parse(storage)
					for (let i = 0; i < cart.length; i++) {
						if (cart[i][1] === a[1]) {
							kt = 1
							a[3] = cart[i][3] + a[3]
							cart[i][3] = a[3]
							break
						}
					}
					if (kt == 0) {
						cart.push(layThanhPhanSanPham(addToCart))
					}
					localStorage.setItem("giohang", JSON.stringify(cart))
				}
			}
			showsanphamlencart()
		}
		else {
			window.location = "login.html"
		}
	})
}


// XỬ lý thêm sản phẩm ở trang Detail
const productActionDetail = document.querySelector('.product-action')
if (productActionDetail) {
	productActionDetail.addEventListener('click', function (e) {
		const addToCart = e.target.closest('.product-action__btn-add')
		let storage = sessionStorage.getItem("login")
		if (storage) {
			if (addToCart) {
				var kt = 0
				layThanhPhanSanPhamDetailPage(addToCart)
				var [...a] = layThanhPhanSanPhamDetailPage(addToCart)
				let storage = localStorage.getItem('giohang')
				// var giohangnew = JSON.parse(storage)
				if (!storage) {
					giohang.push(layThanhPhanSanPhamDetailPage(addToCart))
					localStorage.setItem("giohang", JSON.stringify(giohang))
				}
				else {
					cart = JSON.parse(storage)
					for (let i = 0; i < cart.length; i++) {
						if (cart[i][1] === a[1]) {
							kt = 1
							a[3] = cart[i][3] + a[3]
							cart[i][3] = a[3]
							break
						}
					}
					if (kt == 0) {
						cart.push(layThanhPhanSanPhamDetailPage(addToCart))
					}
					localStorage.setItem("giohang", JSON.stringify(cart))
				}
			}
			showsanphamlencart()
		} else {
			window.location = "login.html"
		}

	})
}

function layThanhPhanSanPhamDetailPage(item) {
	var tam = new Array
	var children = item.parentElement.children
	var productName = children[0].innerText
	var productPrice = parseFloat(children[1].innerText)
	var amount = parseInt(children[3].value)
	var productImage = children[4].value
	tam = [productImage, productName, productPrice, amount]
	return tam
}

function showsanphamlencart() {
	var gh = localStorage.getItem("giohang")
	var giohangnew = JSON.parse(gh)
	var ttgh = ""
	var thanhtien = ""
	var tong = 0
	var ttcartpage = ""
	if (giohangnew) {
		for (let i = 0; i < giohangnew.length; i++) {
			tt = giohangnew[i][2] * giohangnew[i][3]
			tong += tt
			ttgh +=
				`
					<div class="showcart__product">
						<div class="showcart__product-img">
							<img src="${giohangnew[i][0]}" alt="">
						</div>
						<div class="showcart__product-title">
							<span class="showcart__product-name">${giohangnew[i][1]}</span> <br>
							<p class="showcart__product-price">
								<span class="showcart__product-count">${giohangnew[i][3]}</span>
								x
								<span>${giohangnew[i][2]}</span>
								$
							</p>
						</div>
						<i class='bx bx-x-circle delete-show-cart-js' data-id='${i}'></i>
					</div>
	
				`
		}
	}

	thanhtien +=
		`
			<p>Tổng cộng: <span>${tong}</span> $</p>
		`
	ttcartpage +=
		`
			<p style="font-weight: 600;" ><span>${tong}</span> $</p>
		`

	document.querySelector('.showcart__product__wrapper').innerHTML = ttgh
	document.querySelector('.showcart__total-price').innerHTML = thanhtien
	document.querySelector('.cart__price-wrapper').innerHTML = ttcartpage
}


// Xử lý show sản phẩm lên Cart Page
function showsanphanlenCartPage() {
	var gh = localStorage.getItem("giohang")
	var giohangnew = JSON.parse(gh)
	var ttgh = ""
	var ttcartpage = ""
	var thanhtien = 0
	var tong = 0
	for (let i = 0; i < giohangnew.length; i++) {
		tt = giohangnew[i][2] * giohangnew[i][3]
		tong += tt
		ttgh +=
			`
		<div class="main__cart-content">
			<div class="cart__content-product">
				<i class='bx bx-x-circle delete-page-cart-js' data-id='${i}'></i>
				<a href="#">
					<img src="${giohangnew[i][0]}" alt="">
				</a>
				<span>${giohangnew[i][1]}</span> 
			</div>
			<div class="cart__content-price">
				<p><span>${giohangnew[i][2]}</span> $</p>
			</div>

			<div class="cart__content-count">
				<input type="number" value="${giohangnew[i][3]}" min="1" max="10" >
			</div>
			<div class="cart__content-total">
				<p> <span>${tt}</span> $</p>
			</div>
		</div>
		`
	}
	thanhtien += tong
	ttcartpage +=
		`
		<p style="font-weight: 600;" ><span>${thanhtien}</span> $</p>
	`

	document.querySelector('.main__cart-content-wrapper').innerHTML = ttgh
	document.querySelector('.total__current-wrapper').innerHTML = ttcartpage
}
// Xử lý thay đổi số lượng sản phẩm trong giỏ hàng
function capnhatsoluong() {
	var countNumbers = document.querySelectorAll('.cart__content-count input')
	console.log(countNumbers)
	countNumbers.forEach(function (countNumber, index) {
		countNumber.onchange = function (e) {
			e.preventDefault()
			var gh = localStorage.getItem("giohang")
			var giohangnew = JSON.parse(gh)
			giohangnew[index][3] = countNumber.value
			localStorage.setItem("giohang", JSON.stringify(giohangnew))
		}
	})
	var btnUpdateCart = document.querySelector('.btn-update-cart')
	btnUpdateCart.onclick = function () {
		location.reload();
		showsanphanlenCartPage()
	}

}

// delegate
function deleteCartDeleteGate() {
	const wrapperCart = document.querySelector('.showcart__product__wrapper');
	wrapperCart.addEventListener("click", function (e) {
		const deleteButton = e.target.closest('.delete-show-cart-js');
		if (deleteButton) {
			var gh = localStorage.getItem("giohang")
			var giohangnew = JSON.parse(gh)
			if (giohangnew) {
				giohangnew.splice(deleteButton.dataset.id, 1)
				localStorage.setItem("giohang", JSON.stringify(giohangnew))
				showsanphamlencart()
			}
		}
	})
}

function deletePageCartDeleteGate() {
	const wapperMainCartPage = document.querySelector('.main__cart-content-wrapper')
	wapperMainCartPage.addEventListener("click", function (e) {
		const deleteButton = e.target.closest('.delete-page-cart-js')
		if (deleteButton) {
			console.log(deleteButton.dataset.id)
			var gh = localStorage.getItem("giohang")
			var giohangnew = JSON.parse(gh)
			if (giohangnew) {
				giohangnew.splice(deleteButton.dataset.id, 1)
				localStorage.setItem("giohang", JSON.stringify(giohangnew))
				showsanphanlenCartPage()
			}
		}
	})
}


function hienUser(){
	
	let storage = sessionStorage.getItem("login")
		if (storage) {
			var tt = ''
			user = JSON.parse(storage)
			tt += 
			`
				<i class='bx bx-user-circle user'></i>
				<span> ${user.name}</span>
			`
		}
		else{
			var tt = ''
			tt +=
			`
				<a href="login.html">ĐĂNG NHẬP</a>
				<span>/</span>
				<a href="login.html">ĐĂNG KÝ</a>
			`
		}
	document.querySelector('.sigin-signup').innerHTML = tt
}
hienUser()