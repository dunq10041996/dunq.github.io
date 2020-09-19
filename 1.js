document.addEventListener("DOMContentLoaded",function(){
	var menu = document.querySelectorAll('.khoi1-menu'), // đặt tên khối slide cần chuyển đúng class này
		nutDuoi = document.querySelectorAll('.khoi1-nut ul li'), // đặt tên các nút nhỏ số lượng tương ứng với số slide
		nutTrai = document.querySelector('.khoi1-trai'), // tên cho nút bên trái
		nutPhai = document.querySelector('.khoi1-phai'), // tên cho nút bên phải
		trangThai = "tinh",
		giaTri = 0;
	for(i = 0;i < nutDuoi.length; i++){
		nutDuoi[i].onclick = function(){
			var nutMenu = document.querySelector('.hienMenu');
			clearInterval(auto);
			for (var j = 0; j < nutDuoi.length; j++) {
				nutDuoi[j].classList.remove('mauNut')
			}
			this.classList.add('mauNut')
			// lay tri so 
			var viTriClick = this,
				csht = 0;
			for(csht = 0;viTriClick  = viTriClick.previousElementSibling;csht++){};
			for (var l = 0; l < menu.length; l++) {
				menu[l].classList.remove('hienMenu')
			}
			nutMenu.classList.add("bienMat")
			menu[csht].classList.add('hienRa')
			nutMenu.addEventListener('webkitAnimationEnd', function(){
				this.classList.remove('bienMat')
				this.classList.remove('hienMenu')
			})
			menu[csht].addEventListener('webkitAnimationEnd', function(){
				this.classList.remove('hienRa')
				this.classList.add('hienMenu')
			})
			console.log(nutMenu)
		}// xong nut nut
	}	// toi nut 2 ben
	nutTrai.onclick = function(){
		clearInterval(auto);
		if(trangThai == "dong"){return false}
		else{
			trangThai == "dong";
			var vtGoc = document.querySelector('.hienMenu'),
				vtHienTai = document.querySelector('.hienMenu'),
				vtTruoc = vtGoc.previousElementSibling,
				chiSo = 0;
		// xu ly kep cho nut duoi
			for(chiSo = 0; vtGoc = vtGoc.previousElementSibling; chiSo++){}
			chiSo = chiSo-1;
			for (var i = 0; i < nutDuoi.length; i++) {
				nutDuoi[i].classList.remove('mauNut')
			}
			if(chiSo < 0){
				nutDuoi[(menu.length-1)].classList.add('mauNut')
				menu[(menu.length-1)].classList.add('hienRa')
				menu[(menu.length-1)].addEventListener('webkitAnimationEnd', function(){
					this.classList.add('hienMenu')
					this.classList.remove('hienRa')
				})
				giaTri++
			}else{
		// xu ly bien mat
				nutDuoi[chiSo].classList.add('mauNut')
		// xu ly hien ra
				vtTruoc.classList.add('hienRa')
				vtTruoc.addEventListener('webkitAnimationEnd', function(){
					this.classList.add('hienMenu')
					this.classList.remove('hienRa')
				})
				giaTri++;
			}
			vtHienTai.classList.add('bienMat')
			var xlHienTai = function(){
					this.classList.remove('hienMenu');
					this.classList.remove('bienMat');
					console.log("msg")
					giaTri++;
					if(giaTri == 2){
						trangThai = "tinh";
						giaTri = 0;
				}
			}
			vtHienTai.addEventListener('webkitAnimationEnd', xlHienTai)
			console.log("xam")
		}
	}
	// toi nut phai
	nutPhai.onclick = function(){
		clearInterval(auto);
		var vtGoc = document.querySelector('.hienMenu'),
		vtSau = vtGoc.nextElementSibling,
			vtHienTai = vtGoc,
			chiSo = 0;
	// xu ly kep cho nut duoi
		for(chiSo = 0; vtGoc = vtGoc.previousElementSibling; chiSo++){}
		chiSo = chiSo+1;
		for (var i = 0; i < nutDuoi.length; i++) {
			nutDuoi[i].classList.remove('mauNut')
		}
		if(chiSo > (menu.length-1)){
			nutDuoi[0].classList.add('mauNut')
			menu[0].classList.add('hienRa')
			menu[0].addEventListener('webkitAnimationEnd', function(){
				this.classList.add('hienMenu')
				this.classList.remove('hienRa')
			})
		}else{
			nutDuoi[chiSo].classList.add('mauNut')
			// xu ly sau
			vtSau.classList.add('hienRa')
			vtSau.addEventListener('webkitAnimationEnd', function(){
				this.classList.add('hienMenu')
				this.classList.remove('hienRa')
			})
		}
		vtHienTai.classList.add('bienMat')
		vtHienTai.addEventListener('webkitAnimationEnd', function(){
			this.classList.remove('hienMenu')
			this.classList.remove('bienMat')
		})
	}


	var auto = setInterval(function(){
		var vtGoc = document.querySelector('.hienMenu'),
		vtSau = vtGoc.nextElementSibling,
			vtHienTai = vtGoc,
			chiSo = 0;
	// xu ly kep cho nut duoi
		for(chiSo = 0; vtGoc = vtGoc.previousElementSibling; chiSo++){}
		chiSo = chiSo+1;
		for (var i = 0; i < nutDuoi.length; i++) {
			nutDuoi[i].classList.remove('mauNut')
		}
		if(chiSo > (menu.length-1)){
			nutDuoi[0].classList.add('mauNut')
			menu[0].classList.add('hienRa')
			menu[0].addEventListener('webkitAnimationEnd', function(){
				this.classList.add('hienMenu')
				this.classList.remove('hienRa')
			})
		}else{
			nutDuoi[chiSo].classList.add('mauNut')
			// xu ly sau
			vtSau.classList.add('hienRa')
			vtSau.addEventListener('webkitAnimationEnd', function(){
				this.classList.add('hienMenu')
				this.classList.remove('hienRa')
			})
		}
		vtHienTai.classList.add('bienMat')
		vtHienTai.addEventListener('webkitAnimationEnd', function(){
			this.classList.remove('hienMenu')
			this.classList.remove('bienMat')
		})
	},2000)
},false)

// loi ra sai cho 1000 cai slide cung dc
// hien slide thi class phai la "hienMenu"
// doi mau nut thi class phai la "mauNut"