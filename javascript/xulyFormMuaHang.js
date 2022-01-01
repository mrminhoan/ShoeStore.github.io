var orderBtn = document.querySelector('.btn-order')
var customer = document.querySelector('.customer-imformation-form')
var tam = new Array()
var giohang = new Array()

var cart =  localStorage.getItem('giohang')
if (cart){
    giohang = JSON.parse(cart)
    console.log(giohang)
}


orderBtn.addEventListener('click', function(){
    // let customerData = sessionStorage.getItem('customer')
    // var data = JSON.parse(customerData)
    // if(!data){
    //     tam.push(laythongtinkhachhang())
    //     sessionStorage.setItem("customer",JSON.stringify(tam))
    // }
    // else{
    //     data.push(laythongtinkhachhang())
    //     sessionStorage.setItem("customer",JSON.stringify(data))
    // }
    let data = laythongtinkhachhang()
    sessionStorage.setItem("customer",JSON.stringify(data))
})

function laythongtinkhachhang(){
    var customerForm = customer.children[0]
    var customerName = customerForm.children[0].children[0].children[1].value
    var customerAddress = customerForm.children[1].children[0].children[1].value
    var customerPhone = customerForm.children[2].children[0].children[1].value
    var customerEmail = customerForm.children[3].children[0].children[1].value
    var customerNote = customerForm.children[4].children[0].children[1].value
    var customerInfor = new Array()
    var tam =  getradio()
    customerInfor = [customerName,customerAddress,customerPhone,customerEmail,customerNote,tam]
    
    return customerInfor
}

function showsanphamCheckout(){
    var ttgh = ""
    var tong = 0
    var tt = 0
    var total =""
    if(giohang){
        for(let i = 0; i< giohang.length; i++){
            tt = giohang[i][2] * giohang[i][3]
            tong += tt
            ttgh +=
            `
            <div class="group-product">
                <p class="group-product__name">
                    <span>${giohang[i][1]}</span>
                    x 
                    <span>${giohang[i][3]}</span>
                </p>
                <p class="group-product__price"><span >${tt}</span>$</p>
            </div> 
            `
        }
    }
    total += 
    `
        <p><span>${tong}</span>$</p>

    `
    document.querySelector('.group-product-wrapper').innerHTML = ttgh
    document.querySelector('.group-total').innerHTML = total

}


function getradio(){
 var radioInputs = document.querySelectorAll ('.payment-method input')
 var tam = ""
    radioInputs.forEach(function(radioInput,index){

        if(radioInput.checked){
            tam = radioInput.parentElement.children[2].children[0].innerText
        }
    })

return tam
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