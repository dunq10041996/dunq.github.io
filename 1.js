document.addEventListener("DOMContentLoaded",function(){
	var menu = document.querySelectorAll('.khoi1-menu'), // đặt tên khối slide cần chuyển đúng class này
		nutDuoi = document.querySelectorAll('.khoi1-nut ul li'), // đặt tên các nút nhỏ số lượng tương ứng với số slide
		nutTrai = document.querySelector('.khoi1-trai'), // tên cho nút bên trái
		nutPhai = document.querySelector('.khoi1-phai'); // tên cho nút bên phải
	for(i = 0;i < nutDuoi.length; i++){
		nutDuoi[i].onclick = function(){
			for (var j = 0; j < nutDuoi.length; j++) {
				nutDuoi[j].classList.remove('mauNut')
			}
			this.classList.add('mauNut')
			// lay tri so 
			var viTriClick = this,
				csht = 0;
			for(csht = 0;viTriClick  = viTriClick.previousElementSibling;csht++){};
			for (var i = 0; i < menu.length; i++) {
				menu[i].classList.remove('hienMenu')
			}
			menu[csht].classList.add('hienMenu')
			clearInterval(auto)
		}// xong nut nut
	}	// toi nut 2 ben
	nutTrai.onclick = function(){
		var viTriGoc = document.querySelector('.hienMenu');
			vtTruoc = viTriGoc.previousElementSibling;
		for(chiSoTruoc = 0; viTriGoc = viTriGoc.previousElementSibling; chiSoTruoc++){}
			chiSoTruoc = chiSoTruoc-1; //lay chi so cho may cai nut duoi
		if(chiSoTruoc < 0){
			for (var i = 0; i < menu.length; i++) {
				menu[i].classList.remove('hienMenu')
				nutDuoi[i].classList.remove('mauNut')
			}
			menu[(menu.length-1)].classList.add('hienMenu')
			nutDuoi[(menu.length-1)].classList.add('mauNut')
		}else{
			for (var i = 0; i < menu.length; i++) {
				menu[i].classList.remove('hienMenu')
				nutDuoi[i].classList.remove('mauNut')
			}
			vtTruoc.classList.add('hienMenu')
			nutDuoi[chiSoTruoc].classList.add('mauNut')
			clearInterval(auto)
		}	
	}// toi nut phai
	nutPhai.onclick = function(){
		var viTriGoc = document.querySelector('.hienMenu');
			vtSau = viTriGoc.nextElementSibling;
			chiSoSau = 0;
		for(chiSoSau = 0; viTriGoc = viTriGoc.previousElementSibling; chiSoSau++){}
			chiSoSau = chiSoSau+1; //lay chi so cho may cai nut duoi
		if(chiSoSau == menu.length){
			for (var i = 0; i < menu.length; i++) {
				menu[i].classList.remove('hienMenu')
				nutDuoi[i].classList.remove('mauNut')
			}
			menu[0].classList.add('hienMenu')
			nutDuoi[0].classList.add('mauNut')
		}else{
			for (var i = 0; i < menu.length; i++) {
				menu[i].classList.remove('hienMenu')
				nutDuoi[i].classList.remove('mauNut')
			}
			vtSau.classList.add('hienMenu')
			nutDuoi[chiSoSau].classList.add('mauNut')
			clearInterval(auto)
		}	
	}	// toi auto slide
	var auto = setInterval(function(){
		var viTriGoc = document.querySelector('.hienMenu');
			vtSau = viTriGoc.nextElementSibling;
			chiSoSau = 0;
		for(chiSoSau = 0; viTriGoc = viTriGoc.previousElementSibling; chiSoSau++){}
			chiSoSau = chiSoSau+1; //lay chi so cho may cai nut duoi
		if(chiSoSau == menu.length){
			for (var i = 0; i < menu.length; i++) {
				menu[i].classList.remove('hienMenu')
				nutDuoi[i].classList.remove('mauNut')
			}
			menu[0].classList.add('hienMenu')
			nutDuoi[0].classList.add('mauNut')
		}else{
			for (var i = 0; i < menu.length; i++) {
				menu[i].classList.remove('hienMenu')
				nutDuoi[i].classList.remove('mauNut')
			}
			vtSau.classList.add('hienMenu')
			nutDuoi[chiSoSau].classList.add('mauNut')
		}	
	},2000)
},false)

// loi ra sai cho 1000 cai slide cung dc
// hien slide thi class phai la "hienMenu"
// doi mau nut thi class phai la "mauNut"