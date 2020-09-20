document.addEventListener("DOMContentLoaded",function(){
	var menu = document.querySelectorAll('.khoi1-menu'), // đặt tên khối slide cần chuyển đúng class này
		nutDuoi = document.querySelectorAll('.khoi1-nut ul li'), // đặt tên các nút nhỏ số lượng tương ứng với số slide
		nutTrai = document.querySelector('.khoi1-trai'), // tên cho nút bên trái
		nutPhai = document.querySelector('.khoi1-phai'), // tên cho nút bên phải
		soText = 0,
		trangThai = "tinh";
		
	for(i = 0;i < nutDuoi.length; i++){
		nutDuoi[i].onclick = function(){
			clearInterval(auto);
			giaTri = 0;
			if(trangThai == "dong"){
				return false;
			}else{
				trangThai = "dong";
				var nutMenu = document.querySelector('.hienMenu');
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
				var xuLyHT = function(){
					this.classList.remove('bienMat')
					this.classList.remove('hienMenu')
					giaTri++;
					if(giaTri == 2){
						trangThai = "tinh";
					}
				}
				var xuLyTL = function(){
					this.classList.remove('hienRa')
					this.classList.add('hienMenu')
					giaTri++;
					if(giaTri == 2){
						trangThai = "tinh";
					}
				}
				nutMenu.addEventListener('webkitAnimationEnd', xuLyHT)
				menu[csht].addEventListener('webkitAnimationEnd', xuLyTL)
			}
		}// xong nut nut
	}	// toi nut 2 ben
	nutTrai.onclick = function(){
		clearInterval(auto);
		var vtGoc = document.querySelector('.hienMenu'),
			vtHienTai = vtGoc,
			chiSo = 0;
		for(chiSo = 0; vtGoc = vtGoc.previousElementSibling; chiSo++){}
		chiSo = chiSo-1;
		if(chiSo < 0){chiSo = (menu.length-1)}
		// xu ly kep cho nut duoi	
		for (var i = 0; i < nutDuoi.length; i++) {
			nutDuoi[i].classList.remove('mauNut')
		}
		var xlTuongLai = function(){
			this.classList.add('hienMenu')
			this.classList.remove('hienRa')
		}
		var	xlHienTai = function(){
			this.classList.remove('hienMenu');
			this.classList.remove('bienMat');
		}
		nutDuoi[chiSo].classList.add('mauNut')
		menu[chiSo].classList.add('hienRa')
		menu[chiSo].addEventListener('webkitAnimationEnd', xlTuongLai)
		vtHienTai.classList.add('bienMat')
		vtHienTai.addEventListener('webkitAnimationEnd', xlHienTai)
	}
	// toi nut phai
	nutPhai.onclick = function(){
		clearInterval(auto);
		var vtGoc = document.querySelector('.hienMenu'),
			vtHienTai = vtGoc,
			chiSo = 0;
	// xu ly kep cho nut duoi
		for(chiSo = 0; vtGoc = vtGoc.previousElementSibling; chiSo++){}
		chiSo = chiSo+1;
		if(chiSo == menu.length){chiSo=0}
		for (var i = 0; i < nutDuoi.length; i++) {
			nutDuoi[i].classList.remove('mauNut')
		}
		var xlTuongLai = function(){
			this.classList.add('hienMenu')
			this.classList.remove('hienRa')
		}
			xlHienTai = function(){
			this.classList.remove('hienMenu')
			this.classList.remove('bienMat')
		}
		nutDuoi[chiSo].classList.add('mauNut')
		menu[chiSo].classList.add('hienRa')
		menu[chiSo].addEventListener('webkitAnimationEnd', xlTuongLai)
		vtHienTai.classList.add('bienMat')
		vtHienTai.addEventListener('webkitAnimationEnd', xlHienTai)
	}
	//chay auto
	var auto = setInterval(function(){
		var vtGoc = document.querySelector('.hienMenu'),
			vtHienTai = vtGoc,
			chiSo = 0;
	// xu ly kep cho nut duoi
		for(chiSo = 0; vtGoc = vtGoc.previousElementSibling; chiSo++){}
		chiSo = chiSo+1;
		if(chiSo == menu.length){chiSo=0}
		for (var i = 0; i < nutDuoi.length; i++) {
			nutDuoi[i].classList.remove('mauNut')
		}
		var xlTuongLai = function(){
			this.classList.add('hienMenu')
			this.classList.remove('hienRa')
		}
			xlHienTai = function(){
			this.classList.remove('hienMenu')
			this.classList.remove('bienMat')
		}
		nutDuoi[chiSo].classList.add('mauNut')
		menu[chiSo].classList.add('hienRa')
		menu[chiSo].addEventListener('webkitAnimationEnd', xlTuongLai)
		vtHienTai.classList.add('bienMat')
		vtHienTai.addEventListener('webkitAnimationEnd', xlHienTai)
	},2000)
},false)

// loi ra sai cho 1000 cai slide cung dc
// hien slide thi class phai la "hienMenu"
// doi mau nut thi class phai la "mauNut"
// nhap trai, phai lien tuc se bi loi, nhung code van chay