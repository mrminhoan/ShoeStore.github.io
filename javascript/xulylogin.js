var register = document.querySelector("#register")
var registerUserName = document.querySelector("#txtten")
var registerMail = document.querySelector("#txtemail")
var registerUserPass = document.querySelector("#txtpass")

var login = document.querySelector('#login-btn')
var loginUserName = document.querySelector('#login-name')
var loginPass = document.querySelector('#login-pass')


register.addEventListener("click", function (e) {
	e.preventDefault()
	var tam = {}
	var userName = registerUserName.value
	var userMail = registerMail.value
	var userPass = registerUserPass.value
	tam =
		{
			userName: userName,
			userMail: userMail,
			userPass: userPass
		}

	var clone = new Array
	var ktra = 0
	let storage = localStorage.getItem('user')
	if (!storage) {
		clone.push(tam)
		localStorage.setItem("user", JSON.stringify(clone))
		location.reload();
	}
	else {
		let users = JSON.parse(storage)

		for(let i = 0; i< users.length; i++){
			if(users[i].userName == tam.userName){
				console.log('Tài khoản đã tồn tại')
				ktra = 1
			}
		}
		if(ktra == 0){
			users.push(tam)
			console.log(users)
			localStorage.setItem("user", JSON.stringify(users))
		}
		location.reload();
	}

})


login.addEventListener('click', function (e) {
	e.preventDefault()
	let dem = 0
	let tam = {}
	let storage = localStorage.getItem('user')
	if(storage){
		users = JSON.parse(storage)
		for(let i = 0; i<users.length; i++){
			if(loginUserName.value === users[i].userName && loginPass.value === users[i].userPass){
				dem = 1
			}	
		}
		if(dem == 1){
			tam = {
				name: loginUserName.value,
				pass: loginPass.value
			}
			sessionStorage.setItem("login", JSON.stringify(tam))
			window.location="index.html"
		}else{
			alert("Tài khoản hoặc mật khẩu không đúng")
		}
	}
	else{
		alert("Tài khoản hoặc mật khẩu không đúng")
	}
})