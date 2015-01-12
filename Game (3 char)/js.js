/* Javascript */
$("#ok").click(function(){
	inputan_nama = document.getElementById("name").value;
	document.getElementById("charname").innerHTML = inputan_nama;
	$("#page1").fadeToggle(300, function(){
		$("#page2").show(2000);
	});
	
	cek_play_as = document.getElementById("play_as").value;
	if(cek_play_as == "Worm") {
		sisip_stand = "<img src='gambar/character/worm_stand.png'/>";
		sisip_sleep = "<img src='gambar/character/worm_sleep.png'/>";
		sisip_play = "<img src='gambar/character/worm_play.png'/>";
		sisip_eat = "<img src='gambar/character/worm_eat.png'/>";
		sisip_study = "<img src='gambar/character/worm_study.png'/>";
		sisip_stop = "<img src='gambar/character/worm_grayscale.png'/>";
		$("#frame2").css({"background-color": "#9de084"});
		$("#frame3").css({"background-color": "#9de084"});
	}
	if(cek_play_as == "Pig") {
		sisip_stand = "<img src='gambar/character/pig_stand.png'/>";
		sisip_sleep = "<img src='gambar/character/pig_sleep.png'/>";
		sisip_play = "<img src='gambar/character/pig_play.png'/>";
		sisip_eat = "<img src='gambar/character/pig_eat.png'/>";
		sisip_study = "<img src='gambar/character/pig_study.png'/>";
		sisip_stop = "<img src='gambar/character/pig_grayscale.png'/>";
		$("#frame2").css({"background-color": "#f38f9f"});
		$("#frame3").css({"background-color": "#f38f9f"});
	}
	if(cek_play_as == "Buffalo") {
		sisip_stand = "<img src='gambar/character/buffalo_stand.png'/>";
		sisip_sleep = "<img src='gambar/character/buffalo_sleep.png'/>";
		sisip_play = "<img src='gambar/character/buffalo_play.png'/>";
		sisip_eat = "<img src='gambar/character/buffalo_eat.png'/>";
		sisip_study = "<img src='gambar/character/buffalo_study.png'/>";
		sisip_stop = "<img src='gambar/character/buffalo_grayscale.png'/>";
		$("#frame2").css({"background-color": "#8479bd"});
		$("#frame3").css({"background-color": "#8479bd"});
	}
		document.getElementById("tipe").innerHTML = cek_play_as;
});

/* Javascript Page 1 */

/* Fungsi pilih char */
$("#worm").click(function(){
	w_value = document.getElementById("worm").value;
	$("#play_as").css({"color":"#9de084"});
	document.getElementById("play_as").innerHTML = w_value;
	document.getElementById("play_as").value = "Worm";
	$("#worm").css({"visibility": "hidden"});
	$("#pig").css({"visibility": ""});
	$("#buffalo").css({"visibility": ""});
});

$("#pig").click(function(){
	p_value = document.getElementById("pig").value;
	$("#play_as").css({"color":"#f38f9f"});
	document.getElementById("play_as").innerHTML = p_value;
	document.getElementById("play_as").value = "Pig";
	$("#pig").css({"visibility": "hidden"});
	$("#worm").css({"visibility": ""});
	$("#buffalo").css({"visibility": ""});
});

$("#buffalo").click(function(){
	b_value = document.getElementById("buffalo").value;
	$("#play_as").css({"color":"#8479bd"});
	document.getElementById("play_as").innerHTML = b_value;
	document.getElementById("play_as").value = "Buffalo";
	$("#buffalo").css({"visibility": "hidden"});
	$("#worm").css({"visibility": ""});
	$("#pig").css({"visibility": ""});
});

/* Javascript Page 2 */

stamina_stat = 70;
fun_stat = 70;
hunger_stat = 70;
intelligent_stat = 0;
cheat_stat = 0;

/* Fungsi Waktu */
jam = 8;
menit = 0;
tanggal = 1;
bulan = 1;
tahun = 2014;
detik = 0;
function waktu() {
	detik += 1;
	
	if(detik%10 == 0) {
		menit+=1;
	}
	
	if (menit < 10) {
		menitText = ":0" + menit;
	}
	else {
		menitText = ":" + menit;
	}
	
	if (jam < 10) {
		jamText = "0" + jam;
	}
	else {
		jamText = jam;
	}
	
	if (menit >= 60) {
		menit = 0;
		jam += 1;
	}
	
	if (jam >= 24) {
		jam = 0;
		tanggal += 1;
	}
	
	if (tanggal >= 31) {
		tanggal = 1;
		bulan += 1;
	}
	
	if (bulan >= 13) {
		bulan = 1;
		tahun += 1;
	}
	
	if (bulan == 1) bln = "Jan";
	else if (bulan == 2) bln = "Feb";
	else if (bulan == 3) bln = "Mar";
	else if (bulan == 4) bln = "Apr";
	else if (bulan == 5) bln = "May";
	else if (bulan == 6) bln = "Jun";
	else if (bulan == 7) bln = "Jul";
	else if (bulan == 8) bln = "Aug";
	else if (bulan == 9) bln = "Sep";
	else if (bulan == 10) bln = "Okt";
	else if (bulan == 11) bln = "Nov";
	else if (bulan == 12) bln = "Dec";
	
	waktuText = jamText + menitText;
	document.getElementById("time").innerHTML = waktuText;
	tanggalText = tanggal + "/" + bln + "/" +tahun;
	document.getElementById("date").innerHTML = tanggalText;
	
	/* ganti lokasi */
	if (jam >= 6 && jam < 18) {
		$("#night_bg").fadeOut();
		$("#day_bg").fadeIn();
	}
	else if (jam >= 18 || jam < 6) {
		$("#day_bg").fadeOut();
		$("#night_bg").fadeIn();
	}
	time = setTimeout(function(){waktu()}, 100);
}

function stat_dec() {
	stamina_stat -= 1;
	fun_stat -= 1;
	hunger_stat -= 1;
	
	dec = setTimeout(function(){stat_dec();},1000);
}

function cetak_stat() {
	if(stamina_stat <= 0) stamina_stat = 0;
	if(fun_stat <= 0) fun_stat = 0;
	if(hunger_stat <= 0) hunger_stat = 0;
	
	if(stamina_stat >= 100) stamina_stat = 100;
	if(fun_stat >= 100) fun_stat = 100;
	if(hunger_stat >= 100) hunger_stat = 100;
	if(intelligent_stat >= 100) intelligent_stat = 100;
	if(cheat_stat >= 100) cheat_stat = 100;
	
	cek_stamina = $("#cstamina").css("width");
	cek_fun = $("#cfun").css("width");
	cek_hunger = $("#chunger").css("width");
	cek_intelligent = $("#cintelligent").css("width");
	cek_cheat = $("#ccheat").css("width");
	
	if (stamina_stat == 0) $("#cstamina").css({"width": "46px"}).css({"background-color":"#070505"}) ;
	if (stamina_stat == 1) $("#cstamina").css({"width": "49px"}).css({"background-color":"#ff1800"});
	if (stamina_stat == 2) $("#cstamina").css({"width": "52px"}).css({"background-color":"#ff1800"});
	if (stamina_stat == 3) $("#cstamina").css({"width": "55px"}).css({"background-color":"#ff1800"});
	if (stamina_stat == 4) $("#cstamina").css({"width": "58px"}).css({"background-color":"#ff1800"});
	if (stamina_stat == 5) $("#cstamina").css({"width": "61px"}).css({"background-color":"#ff1800"});
	if (stamina_stat == 6) $("#cstamina").css({"width": "64px"}).css({"background-color":"#ff1800"});
	if (stamina_stat == 7) $("#cstamina").css({"width": "67px"}).css({"background-color":"#ff1800"});
	if (stamina_stat == 8) $("#cstamina").css({"width": "70px"}).css({"background-color":"#ff1800"});
	if (stamina_stat == 9) $("#cstamina").css({"width": "73px"}).css({"background-color":"#ff1800"});
	if (stamina_stat == 10) $("#cstamina").css({"width": "76px"}).css({"background-color":"#ff1800"});
	if (stamina_stat == 11) $("#cstamina").css({"width": "79px"}).css({"background-color":"#ff4c00"});
	if (stamina_stat == 12) $("#cstamina").css({"width": "82px"}).css({"background-color":"#ff4c00"});
	if (stamina_stat == 13) $("#cstamina").css({"width": "85px"}).css({"background-color":"#ff4c00"});
	if (stamina_stat == 14) $("#cstamina").css({"width": "88px"}).css({"background-color":"#ff4c00"});
	if (stamina_stat == 15) $("#cstamina").css({"width": "91px"}).css({"background-color":"#ff4c00"});
	if (stamina_stat == 16) $("#cstamina").css({"width": "94px"}).css({"background-color":"#ff4c00"});
	if (stamina_stat == 17) $("#cstamina").css({"width": "97px"}).css({"background-color":"#ff4c00"});
	if (stamina_stat == 18) $("#cstamina").css({"width": "100px"}).css({"background-color":"#ff4c00"});
	if (stamina_stat == 19) $("#cstamina").css({"width": "103px"}).css({"background-color":"#ff4c00"});
	if (stamina_stat == 20) $("#cstamina").css({"width": "106px"}).css({"background-color":"#ff4c00"});
	if (stamina_stat == 21) $("#cstamina").css({"width": "109px"}).css({"background-color":"#ff7e00"});
	if (stamina_stat == 22) $("#cstamina").css({"width": "112px"}).css({"background-color":"#ff7e00"});
	if (stamina_stat == 23) $("#cstamina").css({"width": "115px"}).css({"background-color":"#ff7e00"});
	if (stamina_stat == 24) $("#cstamina").css({"width": "118px"}).css({"background-color":"#ff7e00"});
	if (stamina_stat == 25) $("#cstamina").css({"width": "121px"}).css({"background-color":"#ff7e00"});
	if (stamina_stat == 26) $("#cstamina").css({"width": "124px"}).css({"background-color":"#ff7e00"});
	if (stamina_stat == 27) $("#cstamina").css({"width": "127px"}).css({"background-color":"#ff7e00"});
	if (stamina_stat == 28) $("#cstamina").css({"width": "130px"}).css({"background-color":"#ff7e00"});
	if (stamina_stat == 29) $("#cstamina").css({"width": "133px"}).css({"background-color":"#ff7e00"});
	if (stamina_stat == 30) $("#cstamina").css({"width": "136px"}).css({"background-color":"#ff7e00"});
	if (stamina_stat == 31) $("#cstamina").css({"width": "139px"}).css({"background-color":"#ffad00"});
	if (stamina_stat == 32) $("#cstamina").css({"width": "142px"}).css({"background-color":"#ffad00"});
	if (stamina_stat == 33) $("#cstamina").css({"width": "145px"}).css({"background-color":"#ffad00"});
	if (stamina_stat == 34) $("#cstamina").css({"width": "148px"}).css({"background-color":"#ffad00"});
	if (stamina_stat == 35) $("#cstamina").css({"width": "151px"}).css({"background-color":"#ffad00"});
	if (stamina_stat == 36) $("#cstamina").css({"width": "154px"}).css({"background-color":"#ffad00"});
	if (stamina_stat == 37) $("#cstamina").css({"width": "157px"}).css({"background-color":"#ffad00"});
	if (stamina_stat == 38) $("#cstamina").css({"width": "160px"}).css({"background-color":"#ffad00"});
	if (stamina_stat == 39) $("#cstamina").css({"width": "163px"}).css({"background-color":"#ffad00"});	
	if (stamina_stat == 40) $("#cstamina").css({"width": "166px"}).css({"background-color":"#ffad00"});
	if (stamina_stat == 41) $("#cstamina").css({"width": "169px"}).css({"background-color":"#ffe100"});
	if (stamina_stat == 42) $("#cstamina").css({"width": "172px"}).css({"background-color":"#ffe100"});
	if (stamina_stat == 43) $("#cstamina").css({"width": "175px"}).css({"background-color":"#ffe100"});
	if (stamina_stat == 44) $("#cstamina").css({"width": "178px"}).css({"background-color":"#ffe100"});
	if (stamina_stat == 45) $("#cstamina").css({"width": "181px"}).css({"background-color":"#ffe100"});
	if (stamina_stat == 46) $("#cstamina").css({"width": "184px"}).css({"background-color":"#ffe100"});
	if (stamina_stat == 47) $("#cstamina").css({"width": "187px"}).css({"background-color":"#ffe100"});
	if (stamina_stat == 48) $("#cstamina").css({"width": "190px"}).css({"background-color":"#ffe100"});
	if (stamina_stat == 49) $("#cstamina").css({"width": "193px"}).css({"background-color":"#ffe100"});
	if (stamina_stat == 50) $("#cstamina").css({"width": "196px"}).css({"background-color":"#ffe100"});
	if (stamina_stat == 51) $("#cstamina").css({"width": "199px"}).css({"background-color":"#e5f200"});
	if (stamina_stat == 52) $("#cstamina").css({"width": "202px"}).css({"background-color":"#e5f200"});
	if (stamina_stat == 53) $("#cstamina").css({"width": "205px"}).css({"background-color":"#e5f200"});
	if (stamina_stat == 54) $("#cstamina").css({"width": "208px"}).css({"background-color":"#e5f200"});
	if (stamina_stat == 55) $("#cstamina").css({"width": "211px"}).css({"background-color":"#e5f200"});
	if (stamina_stat == 56) $("#cstamina").css({"width": "214px"}).css({"background-color":"#e5f200"});
	if (stamina_stat == 57) $("#cstamina").css({"width": "217px"}).css({"background-color":"#e5f200"});
	if (stamina_stat == 58) $("#cstamina").css({"width": "220px"}).css({"background-color":"#e5f200"});
	if (stamina_stat == 59) $("#cstamina").css({"width": "223px"}).css({"background-color":"#e5f200"});
	if (stamina_stat == 60) $("#cstamina").css({"width": "226px"}).css({"background-color":"#e5f200"});
	if (stamina_stat == 61) $("#cstamina").css({"width": "229px"}).css({"background-color":"#b3d900"});
	if (stamina_stat == 62) $("#cstamina").css({"width": "232px"}).css({"background-color":"#b3d900"});
	if (stamina_stat == 63) $("#cstamina").css({"width": "235px"}).css({"background-color":"#b3d900"});
	if (stamina_stat == 64) $("#cstamina").css({"width": "238px"}).css({"background-color":"#b3d900"});
	if (stamina_stat == 65) $("#cstamina").css({"width": "241px"}).css({"background-color":"#b3d900"});
	if (stamina_stat == 66) $("#cstamina").css({"width": "244px"}).css({"background-color":"#b3d900"});
	if (stamina_stat == 67) $("#cstamina").css({"width": "247px"}).css({"background-color":"#b3d900"});
	if (stamina_stat == 68) $("#cstamina").css({"width": "250px"}).css({"background-color":"#b3d900"});
	if (stamina_stat == 69) $("#cstamina").css({"width": "253px"}).css({"background-color":"#b3d900"});
	if (stamina_stat == 70) $("#cstamina").css({"width": "256px"}).css({"background-color":"#b3d900"});
	if (stamina_stat == 71) $("#cstamina").css({"width": "259px"}).css({"background-color":"#81c000"});
	if (stamina_stat == 72) $("#cstamina").css({"width": "262px"}).css({"background-color":"#81c000"});
	if (stamina_stat == 73) $("#cstamina").css({"width": "265px"}).css({"background-color":"#81c000"});
	if (stamina_stat == 74) $("#cstamina").css({"width": "268px"}).css({"background-color":"#81c000"});
	if (stamina_stat == 75) $("#cstamina").css({"width": "271px"}).css({"background-color":"#81c000"});
	if (stamina_stat == 76) $("#cstamina").css({"width": "274px"}).css({"background-color":"#81c000"});
	if (stamina_stat == 77) $("#cstamina").css({"width": "277px"}).css({"background-color":"#81c000"});
	if (stamina_stat == 78) $("#cstamina").css({"width": "280px"}).css({"background-color":"#81c000"});
	if (stamina_stat == 79) $("#cstamina").css({"width": "283px"}).css({"background-color":"#81c000"});
	if (stamina_stat == 80) $("#cstamina").css({"width": "286px"}).css({"background-color":"#81c000"});
	if (stamina_stat == 81) $("#cstamina").css({"width": "289px"}).css({"background-color":"#4ca600"});
	if (stamina_stat == 82) $("#cstamina").css({"width": "292px"}).css({"background-color":"#4ca600"});
	if (stamina_stat == 83) $("#cstamina").css({"width": "295px"}).css({"background-color":"#4ca600"});
	if (stamina_stat == 84) $("#cstamina").css({"width": "298px"}).css({"background-color":"#4ca600"});
	if (stamina_stat == 85) $("#cstamina").css({"width": "301px"}).css({"background-color":"#4ca600"});
	if (stamina_stat == 86) $("#cstamina").css({"width": "304px"}).css({"background-color":"#4ca600"});
	if (stamina_stat == 87) $("#cstamina").css({"width": "307px"}).css({"background-color":"#4ca600"});
	if (stamina_stat == 88) $("#cstamina").css({"width": "310px"}).css({"background-color":"#4ca600"});
	if (stamina_stat == 89) $("#cstamina").css({"width": "313px"}).css({"background-color":"#4ca600"});
	if (stamina_stat == 90) $("#cstamina").css({"width": "316px"}).css({"background-color":"#4ca600"});
	if (stamina_stat == 91) $("#cstamina").css({"width": "319px"}).css({"background-color":"#198842"});
	if (stamina_stat == 92) $("#cstamina").css({"width": "322px"}).css({"background-color":"#198842"});
	if (stamina_stat == 93) $("#cstamina").css({"width": "325px"}).css({"background-color":"#198842"});
	if (stamina_stat == 94) $("#cstamina").css({"width": "328px"}).css({"background-color":"#198842"});
	if (stamina_stat == 95) $("#cstamina").css({"width": "331px"}).css({"background-color":"#198842"});
	if (stamina_stat == 96) $("#cstamina").css({"width": "334px"}).css({"background-color":"#198842"});
	if (stamina_stat == 97) $("#cstamina").css({"width": "337px"}).css({"background-color":"#198842"});
	if (stamina_stat == 98) $("#cstamina").css({"width": "340px"}).css({"background-color":"#198842"});
	if (stamina_stat == 99) $("#cstamina").css({"width": "343px"}).css({"background-color":"#198842"});
	if (stamina_stat == 100) $("#cstamina").css({"width": "346px"}).css({"background-color":"#198842"});
	
	
	if (fun_stat == 0) $("#cfun").css({"width": "46px"}).css({"background-color":"#070505"}) ;
	if (fun_stat == 1) $("#cfun").css({"width": "49px"}).css({"background-color":"#ff1800"});
	if (fun_stat == 2) $("#cfun").css({"width": "52px"}).css({"background-color":"#ff1800"});
	if (fun_stat == 3) $("#cfun").css({"width": "55px"}).css({"background-color":"#ff1800"});
	if (fun_stat == 4) $("#cfun").css({"width": "58px"}).css({"background-color":"#ff1800"});
	if (fun_stat == 5) $("#cfun").css({"width": "61px"}).css({"background-color":"#ff1800"});
	if (fun_stat == 6) $("#cfun").css({"width": "64px"}).css({"background-color":"#ff1800"});
	if (fun_stat == 7) $("#cfun").css({"width": "67px"}).css({"background-color":"#ff1800"});
	if (fun_stat == 8) $("#cfun").css({"width": "70px"}).css({"background-color":"#ff1800"});
	if (fun_stat == 9) $("#cfun").css({"width": "73px"}).css({"background-color":"#ff1800"});
	if (fun_stat == 10) $("#cfun").css({"width": "76px"}).css({"background-color":"#ff1800"});
	if (fun_stat == 11) $("#cfun").css({"width": "79px"}).css({"background-color":"#ff4c00"});
	if (fun_stat == 12) $("#cfun").css({"width": "82px"}).css({"background-color":"#ff4c00"});
	if (fun_stat == 13) $("#cfun").css({"width": "85px"}).css({"background-color":"#ff4c00"});
	if (fun_stat == 14) $("#cfun").css({"width": "88px"}).css({"background-color":"#ff4c00"});
	if (fun_stat == 15) $("#cfun").css({"width": "91px"}).css({"background-color":"#ff4c00"});
	if (fun_stat == 16) $("#cfun").css({"width": "94px"}).css({"background-color":"#ff4c00"});
	if (fun_stat == 17) $("#cfun").css({"width": "97px"}).css({"background-color":"#ff4c00"});
	if (fun_stat == 18) $("#cfun").css({"width": "100px"}).css({"background-color":"#ff4c00"});
	if (fun_stat == 19) $("#cfun").css({"width": "103px"}).css({"background-color":"#ff4c00"});
	if (fun_stat == 20) $("#cfun").css({"width": "106px"}).css({"background-color":"#ff4c00"});
	if (fun_stat == 21) $("#cfun").css({"width": "109px"}).css({"background-color":"#ff7e00"});
	if (fun_stat == 22) $("#cfun").css({"width": "112px"}).css({"background-color":"#ff7e00"});
	if (fun_stat == 23) $("#cfun").css({"width": "115px"}).css({"background-color":"#ff7e00"});
	if (fun_stat == 24) $("#cfun").css({"width": "118px"}).css({"background-color":"#ff7e00"});
	if (fun_stat == 25) $("#cfun").css({"width": "121px"}).css({"background-color":"#ff7e00"});
	if (fun_stat == 26) $("#cfun").css({"width": "124px"}).css({"background-color":"#ff7e00"});
	if (fun_stat == 27) $("#cfun").css({"width": "127px"}).css({"background-color":"#ff7e00"});
	if (fun_stat == 28) $("#cfun").css({"width": "130px"}).css({"background-color":"#ff7e00"});
	if (fun_stat == 29) $("#cfun").css({"width": "133px"}).css({"background-color":"#ff7e00"});
	if (fun_stat == 30) $("#cfun").css({"width": "136px"}).css({"background-color":"#ff7e00"});
	if (fun_stat == 31) $("#cfun").css({"width": "139px"}).css({"background-color":"#ffad00"});
	if (fun_stat == 32) $("#cfun").css({"width": "142px"}).css({"background-color":"#ffad00"});
	if (fun_stat == 33) $("#cfun").css({"width": "145px"}).css({"background-color":"#ffad00"});
	if (fun_stat == 34) $("#cfun").css({"width": "148px"}).css({"background-color":"#ffad00"});
	if (fun_stat == 35) $("#cfun").css({"width": "151px"}).css({"background-color":"#ffad00"});
	if (fun_stat == 36) $("#cfun").css({"width": "154px"}).css({"background-color":"#ffad00"});
	if (fun_stat == 37) $("#cfun").css({"width": "157px"}).css({"background-color":"#ffad00"});
	if (fun_stat == 38) $("#cfun").css({"width": "160px"}).css({"background-color":"#ffad00"});
	if (fun_stat == 39) $("#cfun").css({"width": "163px"}).css({"background-color":"#ffad00"});	
	if (fun_stat == 40) $("#cfun").css({"width": "166px"}).css({"background-color":"#ffad00"});
	if (fun_stat == 41) $("#cfun").css({"width": "169px"}).css({"background-color":"#ffe100"});
	if (fun_stat == 42) $("#cfun").css({"width": "172px"}).css({"background-color":"#ffe100"});
	if (fun_stat == 43) $("#cfun").css({"width": "175px"}).css({"background-color":"#ffe100"});
	if (fun_stat == 44) $("#cfun").css({"width": "178px"}).css({"background-color":"#ffe100"});
	if (fun_stat == 45) $("#cfun").css({"width": "181px"}).css({"background-color":"#ffe100"});
	if (fun_stat == 46) $("#cfun").css({"width": "184px"}).css({"background-color":"#ffe100"});
	if (fun_stat == 47) $("#cfun").css({"width": "187px"}).css({"background-color":"#ffe100"});
	if (fun_stat == 48) $("#cfun").css({"width": "190px"}).css({"background-color":"#ffe100"});
	if (fun_stat == 49) $("#cfun").css({"width": "193px"}).css({"background-color":"#ffe100"});
	if (fun_stat == 50) $("#cfun").css({"width": "196px"}).css({"background-color":"#ffe100"});
	if (fun_stat == 51) $("#cfun").css({"width": "199px"}).css({"background-color":"#e5f200"});
	if (fun_stat == 52) $("#cfun").css({"width": "202px"}).css({"background-color":"#e5f200"});
	if (fun_stat == 53) $("#cfun").css({"width": "205px"}).css({"background-color":"#e5f200"});
	if (fun_stat == 54) $("#cfun").css({"width": "208px"}).css({"background-color":"#e5f200"});
	if (fun_stat == 55) $("#cfun").css({"width": "211px"}).css({"background-color":"#e5f200"});
	if (fun_stat == 56) $("#cfun").css({"width": "214px"}).css({"background-color":"#e5f200"});
	if (fun_stat == 57) $("#cfun").css({"width": "217px"}).css({"background-color":"#e5f200"});
	if (fun_stat == 58) $("#cfun").css({"width": "220px"}).css({"background-color":"#e5f200"});
	if (fun_stat == 59) $("#cfun").css({"width": "223px"}).css({"background-color":"#e5f200"});
	if (fun_stat == 60) $("#cfun").css({"width": "226px"}).css({"background-color":"#e5f200"});
	if (fun_stat == 61) $("#cfun").css({"width": "229px"}).css({"background-color":"#b3d900"});
	if (fun_stat == 62) $("#cfun").css({"width": "232px"}).css({"background-color":"#b3d900"});
	if (fun_stat == 63) $("#cfun").css({"width": "235px"}).css({"background-color":"#b3d900"});
	if (fun_stat == 64) $("#cfun").css({"width": "238px"}).css({"background-color":"#b3d900"});
	if (fun_stat == 65) $("#cfun").css({"width": "241px"}).css({"background-color":"#b3d900"});
	if (fun_stat == 66) $("#cfun").css({"width": "244px"}).css({"background-color":"#b3d900"});
	if (fun_stat == 67) $("#cfun").css({"width": "247px"}).css({"background-color":"#b3d900"});
	if (fun_stat == 68) $("#cfun").css({"width": "250px"}).css({"background-color":"#b3d900"});
	if (fun_stat == 69) $("#cfun").css({"width": "253px"}).css({"background-color":"#b3d900"});
	if (fun_stat == 70) $("#cfun").css({"width": "256px"}).css({"background-color":"#b3d900"});
	if (fun_stat == 71) $("#cfun").css({"width": "259px"}).css({"background-color":"#81c000"});
	if (fun_stat == 72) $("#cfun").css({"width": "262px"}).css({"background-color":"#81c000"});
	if (fun_stat == 73) $("#cfun").css({"width": "265px"}).css({"background-color":"#81c000"});
	if (fun_stat == 74) $("#cfun").css({"width": "268px"}).css({"background-color":"#81c000"});
	if (fun_stat == 75) $("#cfun").css({"width": "271px"}).css({"background-color":"#81c000"});
	if (fun_stat == 76) $("#cfun").css({"width": "274px"}).css({"background-color":"#81c000"});
	if (fun_stat == 77) $("#cfun").css({"width": "277px"}).css({"background-color":"#81c000"});
	if (fun_stat == 78) $("#cfun").css({"width": "280px"}).css({"background-color":"#81c000"});
	if (fun_stat == 79) $("#cfun").css({"width": "283px"}).css({"background-color":"#81c000"});
	if (fun_stat == 80) $("#cfun").css({"width": "286px"}).css({"background-color":"#81c000"});
	if (fun_stat == 81) $("#cfun").css({"width": "289px"}).css({"background-color":"#4ca600"});
	if (fun_stat == 82) $("#cfun").css({"width": "292px"}).css({"background-color":"#4ca600"});
	if (fun_stat == 83) $("#cfun").css({"width": "295px"}).css({"background-color":"#4ca600"});
	if (fun_stat == 84) $("#cfun").css({"width": "298px"}).css({"background-color":"#4ca600"});
	if (fun_stat == 85) $("#cfun").css({"width": "301px"}).css({"background-color":"#4ca600"});
	if (fun_stat == 86) $("#cfun").css({"width": "304px"}).css({"background-color":"#4ca600"});
	if (fun_stat == 87) $("#cfun").css({"width": "307px"}).css({"background-color":"#4ca600"});
	if (fun_stat == 88) $("#cfun").css({"width": "310px"}).css({"background-color":"#4ca600"});
	if (fun_stat == 89) $("#cfun").css({"width": "313px"}).css({"background-color":"#4ca600"});
	if (fun_stat == 90) $("#cfun").css({"width": "316px"}).css({"background-color":"#4ca600"});
	if (fun_stat == 91) $("#cfun").css({"width": "319px"}).css({"background-color":"#198842"});
	if (fun_stat == 92) $("#cfun").css({"width": "322px"}).css({"background-color":"#198842"});
	if (fun_stat == 93) $("#cfun").css({"width": "325px"}).css({"background-color":"#198842"});
	if (fun_stat == 94) $("#cfun").css({"width": "328px"}).css({"background-color":"#198842"});
	if (fun_stat == 95) $("#cfun").css({"width": "331px"}).css({"background-color":"#198842"});
	if (fun_stat == 96) $("#cfun").css({"width": "334px"}).css({"background-color":"#198842"});
	if (fun_stat == 97) $("#cfun").css({"width": "337px"}).css({"background-color":"#198842"});
	if (fun_stat == 98) $("#cfun").css({"width": "340px"}).css({"background-color":"#198842"});
	if (fun_stat == 99) $("#cfun").css({"width": "343px"}).css({"background-color":"#198842"});
	if (fun_stat == 100) $("#cfun").css({"width": "346px"}).css({"background-color":"#198842"});
	
	if (hunger_stat == 0) $("#chunger").css({"width": "46px"}).css({"background-color":"#070505"}) ;
	if (hunger_stat == 1) $("#chunger").css({"width": "49px"}).css({"background-color":"#ff1800"});
	if (hunger_stat == 2) $("#chunger").css({"width": "52px"}).css({"background-color":"#ff1800"});
	if (hunger_stat == 3) $("#chunger").css({"width": "55px"}).css({"background-color":"#ff1800"});
	if (hunger_stat == 4) $("#chunger").css({"width": "58px"}).css({"background-color":"#ff1800"});
	if (hunger_stat == 5) $("#chunger").css({"width": "61px"}).css({"background-color":"#ff1800"});
	if (hunger_stat == 6) $("#chunger").css({"width": "64px"}).css({"background-color":"#ff1800"});
	if (hunger_stat == 7) $("#chunger").css({"width": "67px"}).css({"background-color":"#ff1800"});
	if (hunger_stat == 8) $("#chunger").css({"width": "70px"}).css({"background-color":"#ff1800"});
	if (hunger_stat == 9) $("#chunger").css({"width": "73px"}).css({"background-color":"#ff1800"});
	if (hunger_stat == 10) $("#chunger").css({"width": "76px"}).css({"background-color":"#ff1800"});
	if (hunger_stat == 11) $("#chunger").css({"width": "79px"}).css({"background-color":"#ff4c00"});
	if (hunger_stat == 12) $("#chunger").css({"width": "82px"}).css({"background-color":"#ff4c00"});
	if (hunger_stat == 13) $("#chunger").css({"width": "85px"}).css({"background-color":"#ff4c00"});
	if (hunger_stat == 14) $("#chunger").css({"width": "88px"}).css({"background-color":"#ff4c00"});
	if (hunger_stat == 15) $("#chunger").css({"width": "91px"}).css({"background-color":"#ff4c00"});
	if (hunger_stat == 16) $("#chunger").css({"width": "94px"}).css({"background-color":"#ff4c00"});
	if (hunger_stat == 17) $("#chunger").css({"width": "97px"}).css({"background-color":"#ff4c00"});
	if (hunger_stat == 18) $("#chunger").css({"width": "100px"}).css({"background-color":"#ff4c00"});
	if (hunger_stat == 19) $("#chunger").css({"width": "103px"}).css({"background-color":"#ff4c00"});
	if (hunger_stat == 20) $("#chunger").css({"width": "106px"}).css({"background-color":"#ff4c00"});
	if (hunger_stat == 21) $("#chunger").css({"width": "109px"}).css({"background-color":"#ff7e00"});
	if (hunger_stat == 22) $("#chunger").css({"width": "112px"}).css({"background-color":"#ff7e00"});
	if (hunger_stat == 23) $("#chunger").css({"width": "115px"}).css({"background-color":"#ff7e00"});
	if (hunger_stat == 24) $("#chunger").css({"width": "118px"}).css({"background-color":"#ff7e00"});
	if (hunger_stat == 25) $("#chunger").css({"width": "121px"}).css({"background-color":"#ff7e00"});
	if (hunger_stat == 26) $("#chunger").css({"width": "124px"}).css({"background-color":"#ff7e00"});
	if (hunger_stat == 27) $("#chunger").css({"width": "127px"}).css({"background-color":"#ff7e00"});
	if (hunger_stat == 28) $("#chunger").css({"width": "130px"}).css({"background-color":"#ff7e00"});
	if (hunger_stat == 29) $("#chunger").css({"width": "133px"}).css({"background-color":"#ff7e00"});
	if (hunger_stat == 30) $("#chunger").css({"width": "136px"}).css({"background-color":"#ff7e00"});
	if (hunger_stat == 31) $("#chunger").css({"width": "139px"}).css({"background-color":"#ffad00"});
	if (hunger_stat == 32) $("#chunger").css({"width": "142px"}).css({"background-color":"#ffad00"});
	if (hunger_stat == 33) $("#chunger").css({"width": "145px"}).css({"background-color":"#ffad00"});
	if (hunger_stat == 34) $("#chunger").css({"width": "148px"}).css({"background-color":"#ffad00"});
	if (hunger_stat == 35) $("#chunger").css({"width": "151px"}).css({"background-color":"#ffad00"});
	if (hunger_stat == 36) $("#chunger").css({"width": "154px"}).css({"background-color":"#ffad00"});
	if (hunger_stat == 37) $("#chunger").css({"width": "157px"}).css({"background-color":"#ffad00"});
	if (hunger_stat == 38) $("#chunger").css({"width": "160px"}).css({"background-color":"#ffad00"});
	if (hunger_stat == 39) $("#chunger").css({"width": "163px"}).css({"background-color":"#ffad00"});	
	if (hunger_stat == 40) $("#chunger").css({"width": "166px"}).css({"background-color":"#ffad00"});
	if (hunger_stat == 41) $("#chunger").css({"width": "169px"}).css({"background-color":"#ffe100"});
	if (hunger_stat == 42) $("#chunger").css({"width": "172px"}).css({"background-color":"#ffe100"});
	if (hunger_stat == 43) $("#chunger").css({"width": "175px"}).css({"background-color":"#ffe100"});
	if (hunger_stat == 44) $("#chunger").css({"width": "178px"}).css({"background-color":"#ffe100"});
	if (hunger_stat == 45) $("#chunger").css({"width": "181px"}).css({"background-color":"#ffe100"});
	if (hunger_stat == 46) $("#chunger").css({"width": "184px"}).css({"background-color":"#ffe100"});
	if (hunger_stat == 47) $("#chunger").css({"width": "187px"}).css({"background-color":"#ffe100"});
	if (hunger_stat == 48) $("#chunger").css({"width": "190px"}).css({"background-color":"#ffe100"});
	if (hunger_stat == 49) $("#chunger").css({"width": "193px"}).css({"background-color":"#ffe100"});
	if (hunger_stat == 50) $("#chunger").css({"width": "196px"}).css({"background-color":"#ffe100"});
	if (hunger_stat == 51) $("#chunger").css({"width": "199px"}).css({"background-color":"#e5f200"});
	if (hunger_stat == 52) $("#chunger").css({"width": "202px"}).css({"background-color":"#e5f200"});
	if (hunger_stat == 53) $("#chunger").css({"width": "205px"}).css({"background-color":"#e5f200"});
	if (hunger_stat == 54) $("#chunger").css({"width": "208px"}).css({"background-color":"#e5f200"});
	if (hunger_stat == 55) $("#chunger").css({"width": "211px"}).css({"background-color":"#e5f200"});
	if (hunger_stat == 56) $("#chunger").css({"width": "214px"}).css({"background-color":"#e5f200"});
	if (hunger_stat == 57) $("#chunger").css({"width": "217px"}).css({"background-color":"#e5f200"});
	if (hunger_stat == 58) $("#chunger").css({"width": "220px"}).css({"background-color":"#e5f200"});
	if (hunger_stat == 59) $("#chunger").css({"width": "223px"}).css({"background-color":"#e5f200"});
	if (hunger_stat == 60) $("#chunger").css({"width": "226px"}).css({"background-color":"#e5f200"});
	if (hunger_stat == 61) $("#chunger").css({"width": "229px"}).css({"background-color":"#b3d900"});
	if (hunger_stat == 62) $("#chunger").css({"width": "232px"}).css({"background-color":"#b3d900"});
	if (hunger_stat == 63) $("#chunger").css({"width": "235px"}).css({"background-color":"#b3d900"});
	if (hunger_stat == 64) $("#chunger").css({"width": "238px"}).css({"background-color":"#b3d900"});
	if (hunger_stat == 65) $("#chunger").css({"width": "241px"}).css({"background-color":"#b3d900"});
	if (hunger_stat == 66) $("#chunger").css({"width": "244px"}).css({"background-color":"#b3d900"});
	if (hunger_stat == 67) $("#chunger").css({"width": "247px"}).css({"background-color":"#b3d900"});
	if (hunger_stat == 68) $("#chunger").css({"width": "250px"}).css({"background-color":"#b3d900"});
	if (hunger_stat == 69) $("#chunger").css({"width": "253px"}).css({"background-color":"#b3d900"});
	if (hunger_stat == 70) $("#chunger").css({"width": "256px"}).css({"background-color":"#b3d900"});
	if (hunger_stat == 71) $("#chunger").css({"width": "259px"}).css({"background-color":"#81c000"});
	if (hunger_stat == 72) $("#chunger").css({"width": "262px"}).css({"background-color":"#81c000"});
	if (hunger_stat == 73) $("#chunger").css({"width": "265px"}).css({"background-color":"#81c000"});
	if (hunger_stat == 74) $("#chunger").css({"width": "268px"}).css({"background-color":"#81c000"});
	if (hunger_stat == 75) $("#chunger").css({"width": "271px"}).css({"background-color":"#81c000"});
	if (hunger_stat == 76) $("#chunger").css({"width": "274px"}).css({"background-color":"#81c000"});
	if (hunger_stat == 77) $("#chunger").css({"width": "277px"}).css({"background-color":"#81c000"});
	if (hunger_stat == 78) $("#chunger").css({"width": "280px"}).css({"background-color":"#81c000"});
	if (hunger_stat == 79) $("#chunger").css({"width": "283px"}).css({"background-color":"#81c000"});
	if (hunger_stat == 80) $("#chunger").css({"width": "286px"}).css({"background-color":"#81c000"});
	if (hunger_stat == 81) $("#chunger").css({"width": "289px"}).css({"background-color":"#4ca600"});
	if (hunger_stat == 82) $("#chunger").css({"width": "292px"}).css({"background-color":"#4ca600"});
	if (hunger_stat == 83) $("#chunger").css({"width": "295px"}).css({"background-color":"#4ca600"});
	if (hunger_stat == 84) $("#chunger").css({"width": "298px"}).css({"background-color":"#4ca600"});
	if (hunger_stat == 85) $("#chunger").css({"width": "301px"}).css({"background-color":"#4ca600"});
	if (hunger_stat == 86) $("#chunger").css({"width": "304px"}).css({"background-color":"#4ca600"});
	if (hunger_stat == 87) $("#chunger").css({"width": "307px"}).css({"background-color":"#4ca600"});
	if (hunger_stat == 88) $("#chunger").css({"width": "310px"}).css({"background-color":"#4ca600"});
	if (hunger_stat == 89) $("#chunger").css({"width": "313px"}).css({"background-color":"#4ca600"});
	if (hunger_stat == 90) $("#chunger").css({"width": "316px"}).css({"background-color":"#4ca600"});
	if (hunger_stat == 91) $("#chunger").css({"width": "319px"}).css({"background-color":"#198842"});
	if (hunger_stat == 92) $("#chunger").css({"width": "322px"}).css({"background-color":"#198842"});
	if (hunger_stat == 93) $("#chunger").css({"width": "325px"}).css({"background-color":"#198842"});
	if (hunger_stat == 94) $("#chunger").css({"width": "328px"}).css({"background-color":"#198842"});
	if (hunger_stat == 95) $("#chunger").css({"width": "331px"}).css({"background-color":"#198842"});
	if (hunger_stat == 96) $("#chunger").css({"width": "334px"}).css({"background-color":"#198842"});
	if (hunger_stat == 97) $("#chunger").css({"width": "337px"}).css({"background-color":"#198842"});
	if (hunger_stat == 98) $("#chunger").css({"width": "340px"}).css({"background-color":"#198842"});
	if (hunger_stat == 99) $("#chunger").css({"width": "343px"}).css({"background-color":"#198842"});
	if (hunger_stat == 100) $("#chunger").css({"width": "346px"}).css({"background-color":"#198842"});
	
	if (cheat_stat == 0) $("#ccheat").css({"width": "46px"}).css({"background-color":"#070505"}) ;
	if (cheat_stat == 1) $("#ccheat").css({"width": "49px"}).css({"background-color":"#ff1800"});
	if (cheat_stat == 2) $("#ccheat").css({"width": "52px"}).css({"background-color":"#ff1800"});
	if (cheat_stat == 3) $("#ccheat").css({"width": "55px"}).css({"background-color":"#ff1800"});
	if (cheat_stat == 4) $("#ccheat").css({"width": "58px"}).css({"background-color":"#ff1800"});
	if (cheat_stat == 5) $("#ccheat").css({"width": "61px"}).css({"background-color":"#ff1800"});
	if (cheat_stat == 6) $("#ccheat").css({"width": "64px"}).css({"background-color":"#ff1800"});
	if (cheat_stat == 7) $("#ccheat").css({"width": "67px"}).css({"background-color":"#ff1800"});
	if (cheat_stat == 8) $("#ccheat").css({"width": "70px"}).css({"background-color":"#ff1800"});
	if (cheat_stat == 9) $("#ccheat").css({"width": "73px"}).css({"background-color":"#ff1800"});
	if (cheat_stat == 10) $("#ccheat").css({"width": "76px"}).css({"background-color":"#ff1800"});
	if (cheat_stat == 11) $("#ccheat").css({"width": "79px"}).css({"background-color":"#ff4c00"});
	if (cheat_stat == 12) $("#ccheat").css({"width": "82px"}).css({"background-color":"#ff4c00"});
	if (cheat_stat == 13) $("#ccheat").css({"width": "85px"}).css({"background-color":"#ff4c00"});
	if (cheat_stat == 14) $("#ccheat").css({"width": "88px"}).css({"background-color":"#ff4c00"});
	if (cheat_stat == 15) $("#ccheat").css({"width": "91px"}).css({"background-color":"#ff4c00"});
	if (cheat_stat == 16) $("#ccheat").css({"width": "94px"}).css({"background-color":"#ff4c00"});
	if (cheat_stat == 17) $("#ccheat").css({"width": "97px"}).css({"background-color":"#ff4c00"});
	if (cheat_stat == 18) $("#ccheat").css({"width": "100px"}).css({"background-color":"#ff4c00"});
	if (cheat_stat == 19) $("#ccheat").css({"width": "103px"}).css({"background-color":"#ff4c00"});
	if (cheat_stat == 20) $("#ccheat").css({"width": "106px"}).css({"background-color":"#ff4c00"});
	if (cheat_stat == 21) $("#ccheat").css({"width": "109px"}).css({"background-color":"#ff7e00"});
	if (cheat_stat == 22) $("#ccheat").css({"width": "112px"}).css({"background-color":"#ff7e00"});
	if (cheat_stat == 23) $("#ccheat").css({"width": "115px"}).css({"background-color":"#ff7e00"});
	if (cheat_stat == 24) $("#ccheat").css({"width": "118px"}).css({"background-color":"#ff7e00"});
	if (cheat_stat == 25) $("#ccheat").css({"width": "121px"}).css({"background-color":"#ff7e00"});
	if (cheat_stat == 26) $("#ccheat").css({"width": "124px"}).css({"background-color":"#ff7e00"});
	if (cheat_stat == 27) $("#ccheat").css({"width": "127px"}).css({"background-color":"#ff7e00"});
	if (cheat_stat == 28) $("#ccheat").css({"width": "130px"}).css({"background-color":"#ff7e00"});
	if (cheat_stat == 29) $("#ccheat").css({"width": "133px"}).css({"background-color":"#ff7e00"});
	if (cheat_stat == 30) $("#ccheat").css({"width": "136px"}).css({"background-color":"#ff7e00"});
	if (cheat_stat == 31) $("#ccheat").css({"width": "139px"}).css({"background-color":"#ffad00"});
	if (cheat_stat == 32) $("#ccheat").css({"width": "142px"}).css({"background-color":"#ffad00"});
	if (cheat_stat == 33) $("#ccheat").css({"width": "145px"}).css({"background-color":"#ffad00"});
	if (cheat_stat == 34) $("#ccheat").css({"width": "148px"}).css({"background-color":"#ffad00"});
	if (cheat_stat == 35) $("#ccheat").css({"width": "151px"}).css({"background-color":"#ffad00"});
	if (cheat_stat == 36) $("#ccheat").css({"width": "154px"}).css({"background-color":"#ffad00"});
	if (cheat_stat == 37) $("#ccheat").css({"width": "157px"}).css({"background-color":"#ffad00"});
	if (cheat_stat == 38) $("#ccheat").css({"width": "160px"}).css({"background-color":"#ffad00"});
	if (cheat_stat == 39) $("#ccheat").css({"width": "163px"}).css({"background-color":"#ffad00"});	
	if (cheat_stat == 40) $("#ccheat").css({"width": "166px"}).css({"background-color":"#ffad00"});
	if (cheat_stat == 41) $("#ccheat").css({"width": "169px"}).css({"background-color":"#ffe100"});
	if (cheat_stat == 42) $("#ccheat").css({"width": "172px"}).css({"background-color":"#ffe100"});
	if (cheat_stat == 43) $("#ccheat").css({"width": "175px"}).css({"background-color":"#ffe100"});
	if (cheat_stat == 44) $("#ccheat").css({"width": "178px"}).css({"background-color":"#ffe100"});
	if (cheat_stat == 45) $("#ccheat").css({"width": "181px"}).css({"background-color":"#ffe100"});
	if (cheat_stat == 46) $("#ccheat").css({"width": "184px"}).css({"background-color":"#ffe100"});
	if (cheat_stat == 47) $("#ccheat").css({"width": "187px"}).css({"background-color":"#ffe100"});
	if (cheat_stat == 48) $("#ccheat").css({"width": "190px"}).css({"background-color":"#ffe100"});
	if (cheat_stat == 49) $("#ccheat").css({"width": "193px"}).css({"background-color":"#ffe100"});
	if (cheat_stat == 50) $("#ccheat").css({"width": "196px"}).css({"background-color":"#ffe100"});
	if (cheat_stat == 51) $("#ccheat").css({"width": "199px"}).css({"background-color":"#e5f200"});
	if (cheat_stat == 52) $("#ccheat").css({"width": "202px"}).css({"background-color":"#e5f200"});
	if (cheat_stat == 53) $("#ccheat").css({"width": "205px"}).css({"background-color":"#e5f200"});
	if (cheat_stat == 54) $("#ccheat").css({"width": "208px"}).css({"background-color":"#e5f200"});
	if (cheat_stat == 55) $("#ccheat").css({"width": "211px"}).css({"background-color":"#e5f200"});
	if (cheat_stat == 56) $("#ccheat").css({"width": "214px"}).css({"background-color":"#e5f200"});
	if (cheat_stat == 57) $("#ccheat").css({"width": "217px"}).css({"background-color":"#e5f200"});
	if (cheat_stat == 58) $("#ccheat").css({"width": "220px"}).css({"background-color":"#e5f200"});
	if (cheat_stat == 59) $("#ccheat").css({"width": "223px"}).css({"background-color":"#e5f200"});
	if (cheat_stat == 60) $("#ccheat").css({"width": "226px"}).css({"background-color":"#e5f200"});
	if (cheat_stat == 61) $("#ccheat").css({"width": "229px"}).css({"background-color":"#b3d900"});
	if (cheat_stat == 62) $("#ccheat").css({"width": "232px"}).css({"background-color":"#b3d900"});
	if (cheat_stat == 63) $("#ccheat").css({"width": "235px"}).css({"background-color":"#b3d900"});
	if (cheat_stat == 64) $("#ccheat").css({"width": "238px"}).css({"background-color":"#b3d900"});
	if (cheat_stat == 65) $("#ccheat").css({"width": "241px"}).css({"background-color":"#b3d900"});
	if (cheat_stat == 66) $("#ccheat").css({"width": "244px"}).css({"background-color":"#b3d900"});
	if (cheat_stat == 67) $("#ccheat").css({"width": "247px"}).css({"background-color":"#b3d900"});
	if (cheat_stat == 68) $("#ccheat").css({"width": "250px"}).css({"background-color":"#b3d900"});
	if (cheat_stat == 69) $("#ccheat").css({"width": "253px"}).css({"background-color":"#b3d900"});
	if (cheat_stat == 70) $("#ccheat").css({"width": "256px"}).css({"background-color":"#b3d900"});
	if (cheat_stat == 71) $("#ccheat").css({"width": "259px"}).css({"background-color":"#81c000"});
	if (cheat_stat == 72) $("#ccheat").css({"width": "262px"}).css({"background-color":"#81c000"});
	if (cheat_stat == 73) $("#ccheat").css({"width": "265px"}).css({"background-color":"#81c000"});
	if (cheat_stat == 74) $("#ccheat").css({"width": "268px"}).css({"background-color":"#81c000"});
	if (cheat_stat == 75) $("#ccheat").css({"width": "271px"}).css({"background-color":"#81c000"});
	if (cheat_stat == 76) $("#ccheat").css({"width": "274px"}).css({"background-color":"#81c000"});
	if (cheat_stat == 77) $("#ccheat").css({"width": "277px"}).css({"background-color":"#81c000"});
	if (cheat_stat == 78) $("#ccheat").css({"width": "280px"}).css({"background-color":"#81c000"});
	if (cheat_stat == 79) $("#ccheat").css({"width": "283px"}).css({"background-color":"#81c000"});
	if (cheat_stat == 80) $("#ccheat").css({"width": "286px"}).css({"background-color":"#81c000"});
	if (cheat_stat == 81) $("#ccheat").css({"width": "289px"}).css({"background-color":"#4ca600"});
	if (cheat_stat == 82) $("#ccheat").css({"width": "292px"}).css({"background-color":"#4ca600"});
	if (cheat_stat == 83) $("#ccheat").css({"width": "295px"}).css({"background-color":"#4ca600"});
	if (cheat_stat == 84) $("#ccheat").css({"width": "298px"}).css({"background-color":"#4ca600"});
	if (cheat_stat == 85) $("#ccheat").css({"width": "301px"}).css({"background-color":"#4ca600"});
	if (cheat_stat == 86) $("#ccheat").css({"width": "304px"}).css({"background-color":"#4ca600"});
	if (cheat_stat == 87) $("#ccheat").css({"width": "307px"}).css({"background-color":"#4ca600"});
	if (cheat_stat == 88) $("#ccheat").css({"width": "310px"}).css({"background-color":"#4ca600"});
	if (cheat_stat == 89) $("#ccheat").css({"width": "313px"}).css({"background-color":"#4ca600"});
	if (cheat_stat == 90) $("#ccheat").css({"width": "316px"}).css({"background-color":"#4ca600"});
	if (cheat_stat == 91) $("#ccheat").css({"width": "319px"}).css({"background-color":"#198842"});
	if (cheat_stat == 92) $("#ccheat").css({"width": "322px"}).css({"background-color":"#198842"});
	if (cheat_stat == 93) $("#ccheat").css({"width": "325px"}).css({"background-color":"#198842"});
	if (cheat_stat == 94) $("#ccheat").css({"width": "328px"}).css({"background-color":"#198842"});
	if (cheat_stat == 95) $("#ccheat").css({"width": "331px"}).css({"background-color":"#198842"});
	if (cheat_stat == 96) $("#ccheat").css({"width": "334px"}).css({"background-color":"#198842"});
	if (cheat_stat == 97) $("#ccheat").css({"width": "337px"}).css({"background-color":"#198842"});
	if (cheat_stat == 98) $("#ccheat").css({"width": "340px"}).css({"background-color":"#198842"});
	if (cheat_stat == 99) $("#ccheat").css({"width": "343px"}).css({"background-color":"#198842"});
	if (cheat_stat == 100) $("#ccheat").css({"width": "346px"}).css({"background-color":"#198842"});
	
	if (intelligent_stat == 0) $("#cintelligent").css({"width": "46px"}).css({"background-color":"#070505"}) ;
	if (intelligent_stat == 1) $("#cintelligent").css({"width": "49px"}).css({"background-color":"#ff1800"});
	if (intelligent_stat == 2) $("#cintelligent").css({"width": "52px"}).css({"background-color":"#ff1800"});
	if (intelligent_stat == 3) $("#cintelligent").css({"width": "55px"}).css({"background-color":"#ff1800"});
	if (intelligent_stat == 4) $("#cintelligent").css({"width": "58px"}).css({"background-color":"#ff1800"});
	if (intelligent_stat == 5) $("#cintelligent").css({"width": "61px"}).css({"background-color":"#ff1800"});
	if (intelligent_stat == 6) $("#cintelligent").css({"width": "64px"}).css({"background-color":"#ff1800"});
	if (intelligent_stat == 7) $("#cintelligent").css({"width": "67px"}).css({"background-color":"#ff1800"});
	if (intelligent_stat == 8) $("#cintelligent").css({"width": "70px"}).css({"background-color":"#ff1800"});
	if (intelligent_stat == 9) $("#cintelligent").css({"width": "73px"}).css({"background-color":"#ff1800"});
	if (intelligent_stat == 10) $("#cintelligent").css({"width": "76px"}).css({"background-color":"#ff1800"});
	if (intelligent_stat == 11) $("#cintelligent").css({"width": "79px"}).css({"background-color":"#ff4c00"});
	if (intelligent_stat == 12) $("#cintelligent").css({"width": "82px"}).css({"background-color":"#ff4c00"});
	if (intelligent_stat == 13) $("#cintelligent").css({"width": "85px"}).css({"background-color":"#ff4c00"});
	if (intelligent_stat == 14) $("#cintelligent").css({"width": "88px"}).css({"background-color":"#ff4c00"});
	if (intelligent_stat == 15) $("#cintelligent").css({"width": "91px"}).css({"background-color":"#ff4c00"});
	if (intelligent_stat == 16) $("#cintelligent").css({"width": "94px"}).css({"background-color":"#ff4c00"});
	if (intelligent_stat == 17) $("#cintelligent").css({"width": "97px"}).css({"background-color":"#ff4c00"});
	if (intelligent_stat == 18) $("#cintelligent").css({"width": "100px"}).css({"background-color":"#ff4c00"});
	if (intelligent_stat == 19) $("#cintelligent").css({"width": "103px"}).css({"background-color":"#ff4c00"});
	if (intelligent_stat == 20) $("#cintelligent").css({"width": "106px"}).css({"background-color":"#ff4c00"});
	if (intelligent_stat == 21) $("#cintelligent").css({"width": "109px"}).css({"background-color":"#ff7e00"});
	if (intelligent_stat == 22) $("#cintelligent").css({"width": "112px"}).css({"background-color":"#ff7e00"});
	if (intelligent_stat == 23) $("#cintelligent").css({"width": "115px"}).css({"background-color":"#ff7e00"});
	if (intelligent_stat == 24) $("#cintelligent").css({"width": "118px"}).css({"background-color":"#ff7e00"});
	if (intelligent_stat == 25) $("#cintelligent").css({"width": "121px"}).css({"background-color":"#ff7e00"});
	if (intelligent_stat == 26) $("#cintelligent").css({"width": "124px"}).css({"background-color":"#ff7e00"});
	if (intelligent_stat == 27) $("#cintelligent").css({"width": "127px"}).css({"background-color":"#ff7e00"});
	if (intelligent_stat == 28) $("#cintelligent").css({"width": "130px"}).css({"background-color":"#ff7e00"});
	if (intelligent_stat == 29) $("#cintelligent").css({"width": "133px"}).css({"background-color":"#ff7e00"});
	if (intelligent_stat == 30) $("#cintelligent").css({"width": "136px"}).css({"background-color":"#ff7e00"});
	if (intelligent_stat == 31) $("#cintelligent").css({"width": "139px"}).css({"background-color":"#ffad00"});
	if (intelligent_stat == 32) $("#cintelligent").css({"width": "142px"}).css({"background-color":"#ffad00"});
	if (intelligent_stat == 33) $("#cintelligent").css({"width": "145px"}).css({"background-color":"#ffad00"});
	if (intelligent_stat == 34) $("#cintelligent").css({"width": "148px"}).css({"background-color":"#ffad00"});
	if (intelligent_stat == 35) $("#cintelligent").css({"width": "151px"}).css({"background-color":"#ffad00"});
	if (intelligent_stat == 36) $("#cintelligent").css({"width": "154px"}).css({"background-color":"#ffad00"});
	if (intelligent_stat == 37) $("#cintelligent").css({"width": "157px"}).css({"background-color":"#ffad00"});
	if (intelligent_stat == 38) $("#cintelligent").css({"width": "160px"}).css({"background-color":"#ffad00"});
	if (intelligent_stat == 39) $("#cintelligent").css({"width": "163px"}).css({"background-color":"#ffad00"});	
	if (intelligent_stat == 40) $("#cintelligent").css({"width": "166px"}).css({"background-color":"#ffad00"});
	if (intelligent_stat == 41) $("#cintelligent").css({"width": "169px"}).css({"background-color":"#ffe100"});
	if (intelligent_stat == 42) $("#cintelligent").css({"width": "172px"}).css({"background-color":"#ffe100"});
	if (intelligent_stat == 43) $("#cintelligent").css({"width": "175px"}).css({"background-color":"#ffe100"});
	if (intelligent_stat == 44) $("#cintelligent").css({"width": "178px"}).css({"background-color":"#ffe100"});
	if (intelligent_stat == 45) $("#cintelligent").css({"width": "181px"}).css({"background-color":"#ffe100"});
	if (intelligent_stat == 46) $("#cintelligent").css({"width": "184px"}).css({"background-color":"#ffe100"});
	if (intelligent_stat == 47) $("#cintelligent").css({"width": "187px"}).css({"background-color":"#ffe100"});
	if (intelligent_stat == 48) $("#cintelligent").css({"width": "190px"}).css({"background-color":"#ffe100"});
	if (intelligent_stat == 49) $("#cintelligent").css({"width": "193px"}).css({"background-color":"#ffe100"});
	if (intelligent_stat == 50) $("#cintelligent").css({"width": "196px"}).css({"background-color":"#ffe100"});
	if (intelligent_stat == 51) $("#cintelligent").css({"width": "199px"}).css({"background-color":"#e5f200"});
	if (intelligent_stat == 52) $("#cintelligent").css({"width": "202px"}).css({"background-color":"#e5f200"});
	if (intelligent_stat == 53) $("#cintelligent").css({"width": "205px"}).css({"background-color":"#e5f200"});
	if (intelligent_stat == 54) $("#cintelligent").css({"width": "208px"}).css({"background-color":"#e5f200"});
	if (intelligent_stat == 55) $("#cintelligent").css({"width": "211px"}).css({"background-color":"#e5f200"});
	if (intelligent_stat == 56) $("#cintelligent").css({"width": "214px"}).css({"background-color":"#e5f200"});
	if (intelligent_stat == 57) $("#cintelligent").css({"width": "217px"}).css({"background-color":"#e5f200"});
	if (intelligent_stat == 58) $("#cintelligent").css({"width": "220px"}).css({"background-color":"#e5f200"});
	if (intelligent_stat == 59) $("#cintelligent").css({"width": "223px"}).css({"background-color":"#e5f200"});
	if (intelligent_stat == 60) $("#cintelligent").css({"width": "226px"}).css({"background-color":"#e5f200"});
	if (intelligent_stat == 61) $("#cintelligent").css({"width": "229px"}).css({"background-color":"#b3d900"});
	if (intelligent_stat == 62) $("#cintelligent").css({"width": "232px"}).css({"background-color":"#b3d900"});
	if (intelligent_stat == 63) $("#cintelligent").css({"width": "235px"}).css({"background-color":"#b3d900"});
	if (intelligent_stat == 64) $("#cintelligent").css({"width": "238px"}).css({"background-color":"#b3d900"});
	if (intelligent_stat == 65) $("#cintelligent").css({"width": "241px"}).css({"background-color":"#b3d900"});
	if (intelligent_stat == 66) $("#cintelligent").css({"width": "244px"}).css({"background-color":"#b3d900"});
	if (intelligent_stat == 67) $("#cintelligent").css({"width": "247px"}).css({"background-color":"#b3d900"});
	if (intelligent_stat == 68) $("#cintelligent").css({"width": "250px"}).css({"background-color":"#b3d900"});
	if (intelligent_stat == 69) $("#cintelligent").css({"width": "253px"}).css({"background-color":"#b3d900"});
	if (intelligent_stat == 70) $("#cintelligent").css({"width": "256px"}).css({"background-color":"#b3d900"});
	if (intelligent_stat == 71) $("#cintelligent").css({"width": "259px"}).css({"background-color":"#81c000"});
	if (intelligent_stat == 72) $("#cintelligent").css({"width": "262px"}).css({"background-color":"#81c000"});
	if (intelligent_stat == 73) $("#cintelligent").css({"width": "265px"}).css({"background-color":"#81c000"});
	if (intelligent_stat == 74) $("#cintelligent").css({"width": "268px"}).css({"background-color":"#81c000"});
	if (intelligent_stat == 75) $("#cintelligent").css({"width": "271px"}).css({"background-color":"#81c000"});
	if (intelligent_stat == 76) $("#cintelligent").css({"width": "274px"}).css({"background-color":"#81c000"});
	if (intelligent_stat == 77) $("#cintelligent").css({"width": "277px"}).css({"background-color":"#81c000"});
	if (intelligent_stat == 78) $("#cintelligent").css({"width": "280px"}).css({"background-color":"#81c000"});
	if (intelligent_stat == 79) $("#cintelligent").css({"width": "283px"}).css({"background-color":"#81c000"});
	if (intelligent_stat == 80) $("#cintelligent").css({"width": "286px"}).css({"background-color":"#81c000"});
	if (intelligent_stat == 81) $("#cintelligent").css({"width": "289px"}).css({"background-color":"#4ca600"});
	if (intelligent_stat == 82) $("#cintelligent").css({"width": "292px"}).css({"background-color":"#4ca600"});
	if (intelligent_stat == 83) $("#cintelligent").css({"width": "295px"}).css({"background-color":"#4ca600"});
	if (intelligent_stat == 84) $("#cintelligent").css({"width": "298px"}).css({"background-color":"#4ca600"});
	if (intelligent_stat == 85) $("#cintelligent").css({"width": "301px"}).css({"background-color":"#4ca600"});
	if (intelligent_stat == 86) $("#cintelligent").css({"width": "304px"}).css({"background-color":"#4ca600"});
	if (intelligent_stat == 87) $("#cintelligent").css({"width": "307px"}).css({"background-color":"#4ca600"});
	if (intelligent_stat == 88) $("#cintelligent").css({"width": "310px"}).css({"background-color":"#4ca600"});
	if (intelligent_stat == 89) $("#cintelligent").css({"width": "313px"}).css({"background-color":"#4ca600"});
	if (intelligent_stat == 90) $("#cintelligent").css({"width": "316px"}).css({"background-color":"#4ca600"});
	if (intelligent_stat == 91) $("#cintelligent").css({"width": "319px"}).css({"background-color":"#198842"});
	if (intelligent_stat == 92) $("#cintelligent").css({"width": "322px"}).css({"background-color":"#198842"});
	if (intelligent_stat == 93) $("#cintelligent").css({"width": "325px"}).css({"background-color":"#198842"});
	if (intelligent_stat == 94) $("#cintelligent").css({"width": "328px"}).css({"background-color":"#198842"});
	if (intelligent_stat == 95) $("#cintelligent").css({"width": "331px"}).css({"background-color":"#198842"});
	if (intelligent_stat == 96) $("#cintelligent").css({"width": "334px"}).css({"background-color":"#198842"});
	if (intelligent_stat == 97) $("#cintelligent").css({"width": "337px"}).css({"background-color":"#198842"});
	if (intelligent_stat == 98) $("#cintelligent").css({"width": "340px"}).css({"background-color":"#198842"});
	if (intelligent_stat == 99) $("#cintelligent").css({"width": "343px"}).css({"background-color":"#198842"});
	if (intelligent_stat == 100) $("#cintelligent").css({"width": "346px"}).css({"background-color":"#198842"});
	
	if (intelligent_stat == 100) {
		$("#cintelligent").css({"width": "346px"});
		$("#ip_app_quiz").css({"display": "inline-block"});
		$("#quiz_button").fadeToggle("slow");
	}
	else if (intelligent_stat != 100) {
		$("#ip_app_quiz").css({"display": "none"});
		$("#quiz_button").fadeOut();
	}
	
	document.getElementById("tstamina").innerHTML = "Stamina " + stamina_stat + "%";
	document.getElementById("tfun").innerHTML = "Fun " + fun_stat + "%";
	document.getElementById("thunger").innerHTML = "Hunger " + hunger_stat + "%";
	document.getElementById("tintelligent").innerHTML = "Intelligent " + intelligent_stat + "%";
	cetak = setTimeout(function(){cetak_stat()}, 100);
}

function normal_mode() {
	document.getElementById("character").innerHTML = sisip_stand;
}

$("#sleep_button").click(function() {
	stamina_stat += 50;
	document.getElementById("character").innerHTML = sisip_sleep;
	jam+=8;
	$("#sleep_button").fadeOut("fast", function() {
		$("#sleep_button").fadeIn("fast");
	});
});

$("#play_button").click(function() {
	fun_stat += 50;
	document.getElementById("character").innerHTML = sisip_play;
	jam+=3;
	$("#play_button").fadeOut("fast", function() {
		$("#play_button").fadeIn("fast");
	});
});

$("#eat_button").click(function() {
	hunger_stat += 50;
	document.getElementById("character").innerHTML = sisip_eat;
	jam+=1;
	$("#eat_button").fadeOut("fast", function() {
		$("#eat_button").fadeIn("fast");
	});
});

$("#study_button").click(function() {
	intelligent_stat += 20;
	document.getElementById("character").innerHTML = sisip_study;
	jam+=3;
	$("#study_button").fadeOut("fast", function() {
		$("#study_button").fadeIn("fast");
	});
});

$("#sleep_button").fadeOut();
$("#play_button").fadeOut();
$("#eat_button").fadeOut();
$("#study_button").fadeOut();
$("#stop_button").fadeOut();
$("#reset_button").fadeOut();

$("#start_button").click(function() {
	stat_dec();
	cetak_stat();
	waktu();
	normal_mode();
	
	$("#cstamina").css({"width": "226px"});
	$("#cfun").css({"width": "226px"});
	$("#chunger").css({"width": "226px"});
	document.getElementById("character").innerHTML = sisip_stand;
	
	$("#ip_app_sleep").css({"display": "inline-block"});
	$("#ip_app_play").css({"display": "inline-block"});
	$("#ip_app_eat").css({"display": "inline-block"});
	$("#ip_app_study").css({"display": "inline-block"});
	$("#ip_app_stop").css({"display": "inline-block"});
	$("#ip_app_reset").css({"display": "inline-block"});
	$("#ip_app_start").css({"display": "none"});
	$("#ip_app_quiz").css({"display": "none"});
	
	
	$("#start_button").fadeOut();
	$("#quiz_button").fadeOut();
	$("#sleep_button").fadeIn();
	$("#play_button").fadeIn();
	$("#eat_button").fadeIn();
	$("#study_button").fadeIn();
	$("#stop_button").fadeIn();
	$("#reset_button").fadeIn();
});

$("#stop_button").click(function() {
	clearTimeout(cetak);
	clearTimeout(dec);
	clearTimeout(time);
	clearTimeout(normal_mode);
	document.getElementById("character").innerHTML = sisip_stop;
	
	$("#ip_app_sleep").css({"display": "none"});
	$("#ip_app_play").css({"display": "none"});
	$("#ip_app_eat").css({"display": "none"});
	$("#ip_app_study").css({"display": "none"});
	$("#ip_app_stop").css({"display": "none"});
	$("#ip_app_reset").css({"display": "none"});
	$("#ip_app_quiz").css({"display": "none"});
	$("#ip_app_start").css({"display": "inline-block"});
	
	$("#start_button").fadeIn();
	$("#sleep_button").fadeOut();
	$("#play_button").fadeOut();
	$("#eat_button").fadeOut();
	$("#study_button").fadeOut();
	$("#stop_button").fadeOut();
	$("#reset_button").fadeOut();
});

$("#reset_button").click(function() {
	stamina_stat = 70;
	fun_stat = 70;
	hunger_stat = 70;
	intelligent_stat = 0;
	cheat_stat = 0;
	
	jam = 0;
	menit = 0;
	tanggal = 1;
	bulan = 1;
	tahun = 2014;
	detik = 0;
	document.getElementById("character").innerHTML = sisip_stand;
	
	$("#reset_button").fadeOut("fast", function() {
		$("#reset_button").fadeIn("fast");
	});
});

$("#quiz_button").click(function(){
	$("#page2").fadeToggle(300, function(){
		$("#page3").show(2000);
	});

});

/* Javascript page 3 */

$("#jawab").click(function() {
	jwbn1 = document.getElementById("a1").value;
		if(jwbn1 == h1) {
			window.alert("Jawaban anda benar!");
		}
		else {
			window.alert("Jawaban anda salah!");
		}
});	
