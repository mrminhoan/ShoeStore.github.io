var tam = sessionStorage.getItem('customer')
var cart = localStorage.getItem('giohang')
if(tam && cart){
    var customer = JSON.parse(tam)
    var giohang = JSON.parse(cart)
}

function showchitietdonhang(){
    var ttdonhang = ""
    var tong = 0
    var tt = 0
    var total =""
    var payMethod =""
       for(let j = 0; j< giohang.length; j++){
             tt = giohang[j][2] * giohang[j][3]
             tong += tt
             ttdonhang +=
             `
             <div class="product-wrapper">
                <p class="grow-product__name">
                    <span class="product-name">${giohang[j][1]}</span>
                    x
                    <span class="product-quantity">${giohang[j][3]}</span>
                </p>
                <p class="group-product__price"><span >${tt}</span>$</p>
            </div>
             `
       }
        payMethod +=
        `
            <span>${customer[5]}</span>
        `
    total +=
    `
        <span>${tong}$</span>
    `
    document.querySelector('.grow-product-wrapper').innerHTML = ttdonhang
    document.querySelector('.grown-total').innerHTML = total
    document.querySelector('.grow-pay-method').innerHTML = payMethod
}
showchitietdonhang()

function showThongTinKhachHang(){
    var ttkh = ''
   
        ttkh +=
        `
        <div class="customer-information-group">
            <span>Khách hàng:</span>
            <span>${customer[0]}</span>
        </div>
        <div class="customer-information-group">
            <span>Số điện thoại</span>
            <span>${customer[2]}</span>
        </div>
        <div class="customer-information-group">
            <span>Địa chỉ</span>
            <span>${customer[1]}</span>
        </div>
        <div class="customer-information-group">
            <span>Email</span>
            <span>${customer[3]}</span>
        </div>
        <div class="customer-information-group">
            <span>Phương thức thanh toán</span>
            <span>${customer[5]}</span>
        </div>
        `
    
    document.querySelector('.customer-information-wrapper').innerHTML = ttkh
}
showThongTinKhachHang()

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