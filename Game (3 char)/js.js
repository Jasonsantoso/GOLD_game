/* Javascript */
$("#ok").click(function(){
	inputan_nama = document.getElementById("name").value;
	document.getElementById("charname").innerHTML = inputan_nama;
	$("#page1").fadeToggle(300, function(){
		$("#page2").show(2000);
	});
	
	cek_play_as = document.getElementById("play_as").value;
	if(cek_play_as == "worm") {
		sisip_stand = "<center><img src='gambar/character/worm_stand.png'/></center>";
		sisip_sleep = "<center><img src='gambar/character/worm_sleep.png'/></center>";
		sisip_play = "<center><img src='gambar/character/worm_play.png'/></center>";
		sisip_eat = "<center><img src='gambar/character/worm_eat.png'/></center>";
		sisip_study = "<center><img src='gambar/character/worm_study.png'/></center>";
		sisip_stop = "<center><img src='gambar/character/worm_grayscale.png'/></center>";
		$("#frame2").css({"background-color": "#9de084"});
	}
	if(cek_play_as == "pig") {
		sisip_stand = "<center><img src='gambar/character/pig_stand.png'/></center>";
		sisip_sleep = "<center><img src='gambar/character/pig_sleep.png'/></center>";
		sisip_play = "<center><img src='gambar/character/pig_play.png'/></center>";
		sisip_eat = "<center><img src='gambar/character/pig_eat.png'/></center>";
		sisip_study = "<center><img src='gambar/character/pig_study.png'/></center>";
		sisip_stop = "<center><img src='gambar/character/pig_grayscale.png'/></center>";
		$("#frame2").css({"background-color": "#f38f9f"});
	}
	if(cek_play_as == "buffalo") {
		sisip_stand = "<center><img src='gambar/character/buffalo_stand.png'/></center>";
		sisip_sleep = "<center><img src='gambar/character/buffalo_sleep.png'/></center>";
		sisip_play = "<center><img src='gambar/character/buffalo_play.png'/></center>";
		sisip_eat = "<center><img src='gambar/character/buffalo_eat.png'/></center>";
		sisip_study = "<center><img src='gambar/character/buffalo_study.png'/></center>";
		sisip_stop = "<center><img src='gambar/character/buffalo_grayscale.png'/></center>";
		$("#frame2").css({"background-color": "#8479bd"});
	}
		document.getElementById("tipe").innerHTML = cek_play_as;
});

/* Javascript Page 1 */

/* Fungsi pilih char */
$("#worm").click(function(){
	w_value = document.getElementById("worm").value;
	$("#play_as").css({"color":"#9de084"});
	document.getElementById("play_as").innerHTML = w_value;
	document.getElementById("play_as").value = "worm";
});

$("#pig").click(function(){
	p_value = document.getElementById("pig").value;
	$("#play_as").css({"color":"#f38f9f"});
	document.getElementById("play_as").innerHTML = p_value;
	document.getElementById("play_as").value = "pig";
});

$("#buffalo").click(function(){
	b_value = document.getElementById("buffalo").value;
	$("#play_as").css({"color":"#8479bd"});
	document.getElementById("play_as").innerHTML = b_value;
	document.getElementById("play_as").value = "buffalo";
});

/* Javascript Page 2 */

stamina_stat = 70;
fun_stat = 70;
hunger_stat = 70;
intelligent_stat = 0;

/* Fungsi Waktu */
jam = 0;
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
	
	if (menit == 60) {
		menit = 0;
		jam += 1;
	}
	
	if (jam == 24) {
		jam = 0;
		tanggal += 1;
	}
	
	if (tanggal == 2) {
		tanggal = 1;
		bulan += 1;
	}
	
	if (bulan == 13) {
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
	time = setTimeout(function(){waktu()}, 500);
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
	
	cek_stamina = $("#cstamina").css("width");
	cek_fun = $("#cfun").css("width");
	cek_hunger = $("#chunger").css("width");
	cek_intelligent = $("#cintelligent").css("width");
	
	if (stamina_stat == 0) $("#cstamina").css({"width": "46px"});
	if (stamina_stat == 1) $("#cstamina").css({"width": "49px"});
	if (stamina_stat == 2) $("#cstamina").css({"width": "52px"});
	if (stamina_stat == 3) $("#cstamina").css({"width": "55px"});
	if (stamina_stat == 4) $("#cstamina").css({"width": "58px"});
	if (stamina_stat == 5) $("#cstamina").css({"width": "61px"});
	if (stamina_stat == 6) $("#cstamina").css({"width": "64px"});
	if (stamina_stat == 7) $("#cstamina").css({"width": "67px"});
	if (stamina_stat == 8) $("#cstamina").css({"width": "70px"});
	if (stamina_stat == 9) $("#cstamina").css({"width": "73px"});
	if (stamina_stat == 10) $("#cstamina").css({"width": "76px"});
	if (stamina_stat == 11) $("#cstamina").css({"width": "79px"});
	if (stamina_stat == 12) $("#cstamina").css({"width": "82px"});
	if (stamina_stat == 13) $("#cstamina").css({"width": "85px"});
	if (stamina_stat == 14) $("#cstamina").css({"width": "88px"});
	if (stamina_stat == 15) $("#cstamina").css({"width": "91px"});
	if (stamina_stat == 16) $("#cstamina").css({"width": "94px"});
	if (stamina_stat == 17) $("#cstamina").css({"width": "97px"});
	if (stamina_stat == 18) $("#cstamina").css({"width": "100px"});
	if (stamina_stat == 19) $("#cstamina").css({"width": "103px"});
	if (stamina_stat == 20) $("#cstamina").css({"width": "106px"});
	if (stamina_stat == 21) $("#cstamina").css({"width": "109px"});
	if (stamina_stat == 22) $("#cstamina").css({"width": "112px"});
	if (stamina_stat == 23) $("#cstamina").css({"width": "115px"});
	if (stamina_stat == 24) $("#cstamina").css({"width": "118px"});
	if (stamina_stat == 25) $("#cstamina").css({"width": "121px"});
	if (stamina_stat == 26) $("#cstamina").css({"width": "124px"});
	if (stamina_stat == 27) $("#cstamina").css({"width": "127px"});
	if (stamina_stat == 28) $("#cstamina").css({"width": "130px"});
	if (stamina_stat == 29) $("#cstamina").css({"width": "133px"});
	if (stamina_stat == 30) $("#cstamina").css({"width": "136px"});
	if (stamina_stat == 31) $("#cstamina").css({"width": "139px"});
	if (stamina_stat == 32) $("#cstamina").css({"width": "142px"});
	if (stamina_stat == 33) $("#cstamina").css({"width": "145px"});
	if (stamina_stat == 34) $("#cstamina").css({"width": "148px"});
	if (stamina_stat == 35) $("#cstamina").css({"width": "151px"});
	if (stamina_stat == 36) $("#cstamina").css({"width": "154px"});
	if (stamina_stat == 37) $("#cstamina").css({"width": "157px"});
	if (stamina_stat == 38) $("#cstamina").css({"width": "160px"});
	if (stamina_stat == 39) $("#cstamina").css({"width": "163px"});	
	if (stamina_stat == 40) $("#cstamina").css({"width": "166px"});
	if (stamina_stat == 41) $("#cstamina").css({"width": "169px"});
	if (stamina_stat == 42) $("#cstamina").css({"width": "172px"});
	if (stamina_stat == 43) $("#cstamina").css({"width": "175px"});
	if (stamina_stat == 44) $("#cstamina").css({"width": "178px"});
	if (stamina_stat == 45) $("#cstamina").css({"width": "181px"});
	if (stamina_stat == 46) $("#cstamina").css({"width": "184px"});
	if (stamina_stat == 47) $("#cstamina").css({"width": "187px"});
	if (stamina_stat == 48) $("#cstamina").css({"width": "190px"});
	if (stamina_stat == 49) $("#cstamina").css({"width": "193px"});
	if (stamina_stat == 50) $("#cstamina").css({"width": "196px"});
	if (stamina_stat == 51) $("#cstamina").css({"width": "199px"});
	if (stamina_stat == 52) $("#cstamina").css({"width": "202px"});
	if (stamina_stat == 53) $("#cstamina").css({"width": "205px"});
	if (stamina_stat == 54) $("#cstamina").css({"width": "208px"});
	if (stamina_stat == 55) $("#cstamina").css({"width": "211px"});
	if (stamina_stat == 56) $("#cstamina").css({"width": "214px"});
	if (stamina_stat == 57) $("#cstamina").css({"width": "217px"});
	if (stamina_stat == 58) $("#cstamina").css({"width": "220px"});
	if (stamina_stat == 59) $("#cstamina").css({"width": "223px"});
	if (stamina_stat == 60) $("#cstamina").css({"width": "226px"});
	if (stamina_stat == 61) $("#cstamina").css({"width": "229px"});
	if (stamina_stat == 62) $("#cstamina").css({"width": "232px"});
	if (stamina_stat == 63) $("#cstamina").css({"width": "235px"});
	if (stamina_stat == 64) $("#cstamina").css({"width": "238px"});
	if (stamina_stat == 65) $("#cstamina").css({"width": "241px"});
	if (stamina_stat == 66) $("#cstamina").css({"width": "244px"});
	if (stamina_stat == 67) $("#cstamina").css({"width": "247px"});
	if (stamina_stat == 68) $("#cstamina").css({"width": "250px"});
	if (stamina_stat == 69) $("#cstamina").css({"width": "253px"});
	if (stamina_stat == 70) $("#cstamina").css({"width": "256px"});
	if (stamina_stat == 71) $("#cstamina").css({"width": "259px"});
	if (stamina_stat == 72) $("#cstamina").css({"width": "262px"});
	if (stamina_stat == 73) $("#cstamina").css({"width": "265px"});
	if (stamina_stat == 74) $("#cstamina").css({"width": "268px"});
	if (stamina_stat == 75) $("#cstamina").css({"width": "271px"});
	if (stamina_stat == 76) $("#cstamina").css({"width": "274px"});
	if (stamina_stat == 77) $("#cstamina").css({"width": "277px"});
	if (stamina_stat == 78) $("#cstamina").css({"width": "280px"});
	if (stamina_stat == 79) $("#cstamina").css({"width": "283px"});
	if (stamina_stat == 80) $("#cstamina").css({"width": "286px"});
	if (stamina_stat == 81) $("#cstamina").css({"width": "289px"});
	if (stamina_stat == 82) $("#cstamina").css({"width": "292px"});
	if (stamina_stat == 83) $("#cstamina").css({"width": "295px"});
	if (stamina_stat == 84) $("#cstamina").css({"width": "298px"});
	if (stamina_stat == 85) $("#cstamina").css({"width": "301px"});
	if (stamina_stat == 86) $("#cstamina").css({"width": "304px"});
	if (stamina_stat == 87) $("#cstamina").css({"width": "307px"});
	if (stamina_stat == 88) $("#cstamina").css({"width": "310px"});
	if (stamina_stat == 89) $("#cstamina").css({"width": "313px"});
	if (stamina_stat == 90) $("#cstamina").css({"width": "316px"});
	if (stamina_stat == 91) $("#cstamina").css({"width": "319px"});
	if (stamina_stat == 92) $("#cstamina").css({"width": "322px"});
	if (stamina_stat == 93) $("#cstamina").css({"width": "325px"});
	if (stamina_stat == 94) $("#cstamina").css({"width": "328px"});
	if (stamina_stat == 95) $("#cstamina").css({"width": "331px"});
	if (stamina_stat == 96) $("#cstamina").css({"width": "334px"});
	if (stamina_stat == 97) $("#cstamina").css({"width": "337px"});
	if (stamina_stat == 98) $("#cstamina").css({"width": "340px"});
	if (stamina_stat == 99) $("#cstamina").css({"width": "343px"});
	if (stamina_stat == 100) $("#cstamina").css({"width": "346px"});
	
	
	if (fun_stat == 0) $("#cfun").css({"width": "46px"});
	if (fun_stat == 1) $("#cfun").css({"width": "49px"});
	if (fun_stat == 2) $("#cfun").css({"width": "52px"});
	if (fun_stat == 3) $("#cfun").css({"width": "55px"});
	if (fun_stat == 4) $("#cfun").css({"width": "58px"});
	if (fun_stat == 5) $("#cfun").css({"width": "61px"});
	if (fun_stat == 6) $("#cfun").css({"width": "64px"});
	if (fun_stat == 7) $("#cfun").css({"width": "67px"});
	if (fun_stat == 8) $("#cfun").css({"width": "70px"});
	if (fun_stat == 9) $("#cfun").css({"width": "73px"});
	if (fun_stat == 10) $("#cfun").css({"width": "76px"});
	if (fun_stat == 11) $("#cfun").css({"width": "79px"});
	if (fun_stat == 12) $("#cfun").css({"width": "82px"});
	if (fun_stat == 13) $("#cfun").css({"width": "85px"});
	if (fun_stat == 14) $("#cfun").css({"width": "88px"});
	if (fun_stat == 15) $("#cfun").css({"width": "91px"});
	if (fun_stat == 16) $("#cfun").css({"width": "94px"});
	if (fun_stat == 17) $("#cfun").css({"width": "97px"});
	if (fun_stat == 18) $("#cfun").css({"width": "100px"});
	if (fun_stat == 19) $("#cfun").css({"width": "103px"});
	if (fun_stat == 20) $("#cfun").css({"width": "106px"});
	if (fun_stat == 21) $("#cfun").css({"width": "109px"});
	if (fun_stat == 22) $("#cfun").css({"width": "112px"});
	if (fun_stat == 23) $("#cfun").css({"width": "115px"});
	if (fun_stat == 24) $("#cfun").css({"width": "118px"});
	if (fun_stat == 25) $("#cfun").css({"width": "121px"});
	if (fun_stat == 26) $("#cfun").css({"width": "124px"});
	if (fun_stat == 27) $("#cfun").css({"width": "127px"});
	if (fun_stat == 28) $("#cfun").css({"width": "130px"});
	if (fun_stat == 29) $("#cfun").css({"width": "133px"});
	if (fun_stat == 30) $("#cfun").css({"width": "136px"});
	if (fun_stat == 31) $("#cfun").css({"width": "139px"});
	if (fun_stat == 32) $("#cfun").css({"width": "142px"});
	if (fun_stat == 33) $("#cfun").css({"width": "145px"});
	if (fun_stat == 34) $("#cfun").css({"width": "148px"});
	if (fun_stat == 35) $("#cfun").css({"width": "151px"});
	if (fun_stat == 36) $("#cfun").css({"width": "154px"});
	if (fun_stat == 37) $("#cfun").css({"width": "157px"});
	if (fun_stat == 38) $("#cfun").css({"width": "160px"});
	if (fun_stat == 39) $("#cfun").css({"width": "163px"});	
	if (fun_stat == 40) $("#cfun").css({"width": "166px"});
	if (fun_stat == 41) $("#cfun").css({"width": "169px"});
	if (fun_stat == 42) $("#cfun").css({"width": "172px"});
	if (fun_stat == 43) $("#cfun").css({"width": "175px"});
	if (fun_stat == 44) $("#cfun").css({"width": "178px"});
	if (fun_stat == 45) $("#cfun").css({"width": "181px"});
	if (fun_stat == 46) $("#cfun").css({"width": "184px"});
	if (fun_stat == 47) $("#cfun").css({"width": "187px"});
	if (fun_stat == 48) $("#cfun").css({"width": "190px"});
	if (fun_stat == 49) $("#cfun").css({"width": "193px"});
	if (fun_stat == 50) $("#cfun").css({"width": "196px"});
	if (fun_stat == 51) $("#cfun").css({"width": "199px"});
	if (fun_stat == 52) $("#cfun").css({"width": "202px"});
	if (fun_stat == 53) $("#cfun").css({"width": "205px"});
	if (fun_stat == 54) $("#cfun").css({"width": "208px"});
	if (fun_stat == 55) $("#cfun").css({"width": "211px"});
	if (fun_stat == 56) $("#cfun").css({"width": "214px"});
	if (fun_stat == 57) $("#cfun").css({"width": "217px"});
	if (fun_stat == 58) $("#cfun").css({"width": "220px"});
	if (fun_stat == 59) $("#cfun").css({"width": "223px"});
	if (fun_stat == 60) $("#cfun").css({"width": "226px"});
	if (fun_stat == 61) $("#cfun").css({"width": "229px"});
	if (fun_stat == 62) $("#cfun").css({"width": "232px"});
	if (fun_stat == 63) $("#cfun").css({"width": "235px"});
	if (fun_stat == 64) $("#cfun").css({"width": "238px"});
	if (fun_stat == 65) $("#cfun").css({"width": "241px"});
	if (fun_stat == 66) $("#cfun").css({"width": "244px"});
	if (fun_stat == 67) $("#cfun").css({"width": "247px"});
	if (fun_stat == 68) $("#cfun").css({"width": "250px"});
	if (fun_stat == 69) $("#cfun").css({"width": "253px"});
	if (fun_stat == 70) $("#cfun").css({"width": "256px"});
	if (fun_stat == 71) $("#cfun").css({"width": "259px"});
	if (fun_stat == 72) $("#cfun").css({"width": "262px"});
	if (fun_stat == 73) $("#cfun").css({"width": "265px"});
	if (fun_stat == 74) $("#cfun").css({"width": "268px"});
	if (fun_stat == 75) $("#cfun").css({"width": "271px"});
	if (fun_stat == 76) $("#cfun").css({"width": "274px"});
	if (fun_stat == 77) $("#cfun").css({"width": "277px"});
	if (fun_stat == 78) $("#cfun").css({"width": "280px"});
	if (fun_stat == 79) $("#cfun").css({"width": "283px"});
	if (fun_stat == 80) $("#cfun").css({"width": "286px"});
	if (fun_stat == 81) $("#cfun").css({"width": "289px"});
	if (fun_stat == 82) $("#cfun").css({"width": "292px"});
	if (fun_stat == 83) $("#cfun").css({"width": "295px"});
	if (fun_stat == 84) $("#cfun").css({"width": "298px"});
	if (fun_stat == 85) $("#cfun").css({"width": "301px"});
	if (fun_stat == 86) $("#cfun").css({"width": "304px"});
	if (fun_stat == 87) $("#cfun").css({"width": "307px"});
	if (fun_stat == 88) $("#cfun").css({"width": "310px"});
	if (fun_stat == 89) $("#cfun").css({"width": "313px"});
	if (fun_stat == 90) $("#cfun").css({"width": "316px"});
	if (fun_stat == 91) $("#cfun").css({"width": "319px"});
	if (fun_stat == 92) $("#cfun").css({"width": "322px"});
	if (fun_stat == 93) $("#cfun").css({"width": "325px"});
	if (fun_stat == 94) $("#cfun").css({"width": "328px"});
	if (fun_stat == 95) $("#cfun").css({"width": "331px"});
	if (fun_stat == 96) $("#cfun").css({"width": "334px"});
	if (fun_stat == 97) $("#cfun").css({"width": "337px"});
	if (fun_stat == 98) $("#cfun").css({"width": "340px"});
	if (fun_stat == 99) $("#cfun").css({"width": "343px"});
	if (fun_stat == 100) $("#cfun").css({"width": "346px"});
	
	if (hunger_stat == 0) $("#chunger").css({"width": "46px"});
	if (hunger_stat == 1) $("#chunger").css({"width": "49px"});
	if (hunger_stat == 2) $("#chunger").css({"width": "52px"});
	if (hunger_stat == 3) $("#chunger").css({"width": "55px"});
	if (hunger_stat == 4) $("#chunger").css({"width": "58px"});
	if (hunger_stat == 5) $("#chunger").css({"width": "61px"});
	if (hunger_stat == 6) $("#chunger").css({"width": "64px"});
	if (hunger_stat == 7) $("#chunger").css({"width": "67px"});
	if (hunger_stat == 8) $("#chunger").css({"width": "70px"});
	if (hunger_stat == 9) $("#chunger").css({"width": "73px"});
	if (hunger_stat == 10) $("#chunger").css({"width": "76px"});
	if (hunger_stat == 11) $("#chunger").css({"width": "79px"});
	if (hunger_stat == 12) $("#chunger").css({"width": "82px"});
	if (hunger_stat == 13) $("#chunger").css({"width": "85px"});
	if (hunger_stat == 14) $("#chunger").css({"width": "88px"});
	if (hunger_stat == 15) $("#chunger").css({"width": "91px"});
	if (hunger_stat == 16) $("#chunger").css({"width": "94px"});
	if (hunger_stat == 17) $("#chunger").css({"width": "97px"});
	if (hunger_stat == 18) $("#chunger").css({"width": "100px"});
	if (hunger_stat == 19) $("#chunger").css({"width": "103px"});
	if (hunger_stat == 20) $("#chunger").css({"width": "106px"});
	if (hunger_stat == 21) $("#chunger").css({"width": "109px"});
	if (hunger_stat == 22) $("#chunger").css({"width": "112px"});
	if (hunger_stat == 23) $("#chunger").css({"width": "115px"});
	if (hunger_stat == 24) $("#chunger").css({"width": "118px"});
	if (hunger_stat == 25) $("#chunger").css({"width": "121px"});
	if (hunger_stat == 26) $("#chunger").css({"width": "124px"});
	if (hunger_stat == 27) $("#chunger").css({"width": "127px"});
	if (hunger_stat == 28) $("#chunger").css({"width": "130px"});
	if (hunger_stat == 29) $("#chunger").css({"width": "133px"});
	if (hunger_stat == 30) $("#chunger").css({"width": "136px"});
	if (hunger_stat == 31) $("#chunger").css({"width": "139px"});
	if (hunger_stat == 32) $("#chunger").css({"width": "142px"});
	if (hunger_stat == 33) $("#chunger").css({"width": "145px"});
	if (hunger_stat == 34) $("#chunger").css({"width": "148px"});
	if (hunger_stat == 35) $("#chunger").css({"width": "151px"});
	if (hunger_stat == 36) $("#chunger").css({"width": "154px"});
	if (hunger_stat == 37) $("#chunger").css({"width": "157px"});
	if (hunger_stat == 38) $("#chunger").css({"width": "160px"});
	if (hunger_stat == 39) $("#chunger").css({"width": "163px"});	
	if (hunger_stat == 40) $("#chunger").css({"width": "166px"});
	if (hunger_stat == 41) $("#chunger").css({"width": "169px"});
	if (hunger_stat == 42) $("#chunger").css({"width": "172px"});
	if (hunger_stat == 43) $("#chunger").css({"width": "175px"});
	if (hunger_stat == 44) $("#chunger").css({"width": "178px"});
	if (hunger_stat == 45) $("#chunger").css({"width": "181px"});
	if (hunger_stat == 46) $("#chunger").css({"width": "184px"});
	if (hunger_stat == 47) $("#chunger").css({"width": "187px"});
	if (hunger_stat == 48) $("#chunger").css({"width": "190px"});
	if (hunger_stat == 49) $("#chunger").css({"width": "193px"});
	if (hunger_stat == 50) $("#chunger").css({"width": "196px"});
	if (hunger_stat == 51) $("#chunger").css({"width": "199px"});
	if (hunger_stat == 52) $("#chunger").css({"width": "202px"});
	if (hunger_stat == 53) $("#chunger").css({"width": "205px"});
	if (hunger_stat == 54) $("#chunger").css({"width": "208px"});
	if (hunger_stat == 55) $("#chunger").css({"width": "211px"});
	if (hunger_stat == 56) $("#chunger").css({"width": "214px"});
	if (hunger_stat == 57) $("#chunger").css({"width": "217px"});
	if (hunger_stat == 58) $("#chunger").css({"width": "220px"});
	if (hunger_stat == 59) $("#chunger").css({"width": "223px"});
	if (hunger_stat == 60) $("#chunger").css({"width": "226px"});
	if (hunger_stat == 61) $("#chunger").css({"width": "229px"});
	if (hunger_stat == 62) $("#chunger").css({"width": "232px"});
	if (hunger_stat == 63) $("#chunger").css({"width": "235px"});
	if (hunger_stat == 64) $("#chunger").css({"width": "238px"});
	if (hunger_stat == 65) $("#chunger").css({"width": "241px"});
	if (hunger_stat == 66) $("#chunger").css({"width": "244px"});
	if (hunger_stat == 67) $("#chunger").css({"width": "247px"});
	if (hunger_stat == 68) $("#chunger").css({"width": "250px"});
	if (hunger_stat == 69) $("#chunger").css({"width": "253px"});
	if (hunger_stat == 70) $("#chunger").css({"width": "256px"});
	if (hunger_stat == 71) $("#chunger").css({"width": "259px"});
	if (hunger_stat == 72) $("#chunger").css({"width": "262px"});
	if (hunger_stat == 73) $("#chunger").css({"width": "265px"});
	if (hunger_stat == 74) $("#chunger").css({"width": "268px"});
	if (hunger_stat == 75) $("#chunger").css({"width": "271px"});
	if (hunger_stat == 76) $("#chunger").css({"width": "274px"});
	if (hunger_stat == 77) $("#chunger").css({"width": "277px"});
	if (hunger_stat == 78) $("#chunger").css({"width": "280px"});
	if (hunger_stat == 79) $("#chunger").css({"width": "283px"});
	if (hunger_stat == 80) $("#chunger").css({"width": "286px"});
	if (hunger_stat == 81) $("#chunger").css({"width": "289px"});
	if (hunger_stat == 82) $("#chunger").css({"width": "292px"});
	if (hunger_stat == 83) $("#chunger").css({"width": "295px"});
	if (hunger_stat == 84) $("#chunger").css({"width": "298px"});
	if (hunger_stat == 85) $("#chunger").css({"width": "301px"});
	if (hunger_stat == 86) $("#chunger").css({"width": "304px"});
	if (hunger_stat == 87) $("#chunger").css({"width": "307px"});
	if (hunger_stat == 88) $("#chunger").css({"width": "310px"});
	if (hunger_stat == 89) $("#chunger").css({"width": "313px"});
	if (hunger_stat == 90) $("#chunger").css({"width": "316px"});
	if (hunger_stat == 91) $("#chunger").css({"width": "319px"});
	if (hunger_stat == 92) $("#chunger").css({"width": "322px"});
	if (hunger_stat == 93) $("#chunger").css({"width": "325px"});
	if (hunger_stat == 94) $("#chunger").css({"width": "328px"});
	if (hunger_stat == 95) $("#chunger").css({"width": "331px"});
	if (hunger_stat == 96) $("#chunger").css({"width": "334px"});
	if (hunger_stat == 97) $("#chunger").css({"width": "337px"});
	if (hunger_stat == 98) $("#chunger").css({"width": "340px"});
	if (hunger_stat == 99) $("#chunger").css({"width": "343px"});
	if (hunger_stat == 100) $("#chunger").css({"width": "346px"});
	
	
	if (intelligent_stat == 0) $("#cintelligent").css({"width": "46px"});
	if (intelligent_stat == 1) $("#cintelligent").css({"width": "49px"});
	if (intelligent_stat == 2) $("#cintelligent").css({"width": "52px"});
	if (intelligent_stat == 3) $("#cintelligent").css({"width": "55px"});
	if (intelligent_stat == 4) $("#cintelligent").css({"width": "58px"});
	if (intelligent_stat == 5) $("#cintelligent").css({"width": "61px"});
	if (intelligent_stat == 6) $("#cintelligent").css({"width": "64px"});
	if (intelligent_stat == 7) $("#cintelligent").css({"width": "67px"});
	if (intelligent_stat == 8) $("#cintelligent").css({"width": "70px"});
	if (intelligent_stat == 9) $("#cintelligent").css({"width": "73px"});
	if (intelligent_stat == 10) $("#cintelligent").css({"width": "76px"});
	if (intelligent_stat == 11) $("#cintelligent").css({"width": "79px"});
	if (intelligent_stat == 12) $("#cintelligent").css({"width": "82px"});
	if (intelligent_stat == 13) $("#cintelligent").css({"width": "85px"});
	if (intelligent_stat == 14) $("#cintelligent").css({"width": "88px"});
	if (intelligent_stat == 15) $("#cintelligent").css({"width": "91px"});
	if (intelligent_stat == 16) $("#cintelligent").css({"width": "94px"});
	if (intelligent_stat == 17) $("#cintelligent").css({"width": "97px"});
	if (intelligent_stat == 18) $("#cintelligent").css({"width": "100px"});
	if (intelligent_stat == 19) $("#cintelligent").css({"width": "103px"});
	if (intelligent_stat == 20) $("#cintelligent").css({"width": "106px"});
	if (intelligent_stat == 21) $("#cintelligent").css({"width": "109px"});
	if (intelligent_stat == 22) $("#cintelligent").css({"width": "112px"});
	if (intelligent_stat == 23) $("#cintelligent").css({"width": "115px"});
	if (intelligent_stat == 24) $("#cintelligent").css({"width": "118px"});
	if (intelligent_stat == 25) $("#cintelligent").css({"width": "121px"});
	if (intelligent_stat == 26) $("#cintelligent").css({"width": "124px"});
	if (intelligent_stat == 27) $("#cintelligent").css({"width": "127px"});
	if (intelligent_stat == 28) $("#cintelligent").css({"width": "130px"});
	if (intelligent_stat == 29) $("#cintelligent").css({"width": "133px"});
	if (intelligent_stat == 30) $("#cintelligent").css({"width": "136px"});
	if (intelligent_stat == 31) $("#cintelligent").css({"width": "139px"});
	if (intelligent_stat == 32) $("#cintelligent").css({"width": "142px"});
	if (intelligent_stat == 33) $("#cintelligent").css({"width": "145px"});
	if (intelligent_stat == 34) $("#cintelligent").css({"width": "148px"});
	if (intelligent_stat == 35) $("#cintelligent").css({"width": "151px"});
	if (intelligent_stat == 36) $("#cintelligent").css({"width": "154px"});
	if (intelligent_stat == 37) $("#cintelligent").css({"width": "157px"});
	if (intelligent_stat == 38) $("#cintelligent").css({"width": "160px"});
	if (intelligent_stat == 39) $("#cintelligent").css({"width": "163px"});	
	if (intelligent_stat == 40) $("#cintelligent").css({"width": "166px"});
	if (intelligent_stat == 41) $("#cintelligent").css({"width": "169px"});
	if (intelligent_stat == 42) $("#cintelligent").css({"width": "172px"});
	if (intelligent_stat == 43) $("#cintelligent").css({"width": "175px"});
	if (intelligent_stat == 44) $("#cintelligent").css({"width": "178px"});
	if (intelligent_stat == 45) $("#cintelligent").css({"width": "181px"});
	if (intelligent_stat == 46) $("#cintelligent").css({"width": "184px"});
	if (intelligent_stat == 47) $("#cintelligent").css({"width": "187px"});
	if (intelligent_stat == 48) $("#cintelligent").css({"width": "190px"});
	if (intelligent_stat == 49) $("#cintelligent").css({"width": "193px"});
	if (intelligent_stat == 50) $("#cintelligent").css({"width": "196px"});
	if (intelligent_stat == 51) $("#cintelligent").css({"width": "199px"});
	if (intelligent_stat == 52) $("#cintelligent").css({"width": "202px"});
	if (intelligent_stat == 53) $("#cintelligent").css({"width": "205px"});
	if (intelligent_stat == 54) $("#cintelligent").css({"width": "208px"});
	if (intelligent_stat == 55) $("#cintelligent").css({"width": "211px"});
	if (intelligent_stat == 56) $("#cintelligent").css({"width": "214px"});
	if (intelligent_stat == 57) $("#cintelligent").css({"width": "217px"});
	if (intelligent_stat == 58) $("#cintelligent").css({"width": "220px"});
	if (intelligent_stat == 59) $("#cintelligent").css({"width": "223px"});
	if (intelligent_stat == 60) $("#cintelligent").css({"width": "226px"});
	if (intelligent_stat == 61) $("#cintelligent").css({"width": "229px"});
	if (intelligent_stat == 62) $("#cintelligent").css({"width": "232px"});
	if (intelligent_stat == 63) $("#cintelligent").css({"width": "235px"});
	if (intelligent_stat == 64) $("#cintelligent").css({"width": "238px"});
	if (intelligent_stat == 65) $("#cintelligent").css({"width": "241px"});
	if (intelligent_stat == 66) $("#cintelligent").css({"width": "244px"});
	if (intelligent_stat == 67) $("#cintelligent").css({"width": "247px"});
	if (intelligent_stat == 68) $("#cintelligent").css({"width": "250px"});
	if (intelligent_stat == 69) $("#cintelligent").css({"width": "253px"});
	if (intelligent_stat == 70) $("#cintelligent").css({"width": "256px"});
	if (intelligent_stat == 71) $("#cintelligent").css({"width": "259px"});
	if (intelligent_stat == 72) $("#cintelligent").css({"width": "262px"});
	if (intelligent_stat == 73) $("#cintelligent").css({"width": "265px"});
	if (intelligent_stat == 74) $("#cintelligent").css({"width": "268px"});
	if (intelligent_stat == 75) $("#cintelligent").css({"width": "271px"});
	if (intelligent_stat == 76) $("#cintelligent").css({"width": "274px"});
	if (intelligent_stat == 77) $("#cintelligent").css({"width": "277px"});
	if (intelligent_stat == 78) $("#cintelligent").css({"width": "280px"});
	if (intelligent_stat == 79) $("#cintelligent").css({"width": "283px"});
	if (intelligent_stat == 80) $("#cintelligent").css({"width": "286px"});
	if (intelligent_stat == 81) $("#cintelligent").css({"width": "289px"});
	if (intelligent_stat == 82) $("#cintelligent").css({"width": "292px"});
	if (intelligent_stat == 83) $("#cintelligent").css({"width": "295px"});
	if (intelligent_stat == 84) $("#cintelligent").css({"width": "298px"});
	if (intelligent_stat == 85) $("#cintelligent").css({"width": "301px"});
	if (intelligent_stat == 86) $("#cintelligent").css({"width": "304px"});
	if (intelligent_stat == 87) $("#cintelligent").css({"width": "307px"});
	if (intelligent_stat == 88) $("#cintelligent").css({"width": "310px"});
	if (intelligent_stat == 89) $("#cintelligent").css({"width": "313px"});
	if (intelligent_stat == 90) $("#cintelligent").css({"width": "316px"});
	if (intelligent_stat == 91) $("#cintelligent").css({"width": "319px"});
	if (intelligent_stat == 92) $("#cintelligent").css({"width": "322px"});
	if (intelligent_stat == 93) $("#cintelligent").css({"width": "325px"});
	if (intelligent_stat == 94) $("#cintelligent").css({"width": "328px"});
	if (intelligent_stat == 95) $("#cintelligent").css({"width": "331px"});
	if (intelligent_stat == 96) $("#cintelligent").css({"width": "334px"});
	if (intelligent_stat == 97) $("#cintelligent").css({"width": "337px"});
	if (intelligent_stat == 98) $("#cintelligent").css({"width": "340px"});
	if (intelligent_stat == 99) $("#cintelligent").css({"width": "343px"});
	if (intelligent_stat == 100) $("#cintelligent").css({"width": "346px"});
	
	document.getElementById("tstamina").innerHTML = "Stamina " + stamina_stat + "%";
	document.getElementById("tfun").innerHTML = "Fun " + fun_stat + "%";
	document.getElementById("thunger").innerHTML = "Hunger " + hunger_stat + "%";
	document.getElementById("tintelligent").innerHTML = "Intelligent " + intelligent_stat + "%";
	cetak = setTimeout(function(){cetak_stat()}, 100);
}

function normal_mode() {
	document.getElementById("character").innerHTML = sisip_stand;
}

/* Tombol ganti lokasi */
a = 0;
pos = $("#bgpage2 img:first");
			
$("#prev").click(function(){
	a--;
	pos.fadeToggle(1000);
	if(a == -1){
		pos = $("#bgpage2 img:last");
		pos.fadeIn(1000);
		a = 3;
	}
	else {
		pos = pos.prev();
		pos.fadeToggle(1000);
	}
});
				
$("#next").click(function(){
	a++;
	pos.fadeToggle(1000);
	if(a != 4){
		pos = pos.next();				
		pos.fadeToggle(1000);
	}
	else {
		pos = $("#bgpage2 img:first");
		pos.fadeIn(1000);
		a = 0;
	}
});

$("#sleep_button").click(function() {
	stamina_stat += 50;
	document.getElementById("character").innerHTML = sisip_sleep;
	to_stand_png = setTimeout(function() {normal_mode()},5000);
	jam+=8;
});

$("#play_button").click(function() {
	fun_stat += 50;
	document.getElementById("character").innerHTML = sisip_play;
	to_stand_png = setTimeout(function() {normal_mode()},5000);
	jam+=3;
});

$("#eat_button").click(function() {
	hunger_stat += 50;
	document.getElementById("character").innerHTML = sisip_eat;
	to_stand_png = setTimeout(function() {normal_mode()},5000);
	jam+=1;
});

$("#study_button").click(function() {
	intelligent_stat += 20;
	document.getElementById("character").innerHTML = sisip_study;
	to_stand_png = setTimeout(function() {normal_mode()},5000);
	jam+=3;
});

$("#start_button").click(function() {
	stat_dec();
	cetak_stat();
	waktu();
	normal_mode();
	
	$("#cstamina").css({"width": "226px"});
	$("#cfun").css({"width": "226px"});
	$("#chunger").css({"width": "226px"});
	document.getElementById("character").innerHTML = sisip_stand;
});

$("#stop_button").click(function() {
	clearTimeout(cetak);
	clearTimeout(dec);
	clearTimeout(time);
	clearTimeout(normal_mode);
	document.getElementById("character").innerHTML = sisip_stop;
});

$("#reset_button").click(function() {
	stamina_stat = 70;
	fun_stat = 70;
	hunger_stat = 70;
	intelligent_stat = 0;
	
	jam = 0;
	menit = 0;
	tanggal = 1;
	bulan = 1;
	tahun = 2014;
	detik = 0;
});

sisip_quiz = "<a href='soal.html'> </a>";
$("#quiz_button").click(function(){
	$("#page2").fadeToggle(300, function(){
		$("#page3").show(2000);
	});
	document.getElementById("character").innerHTML = sisip_quiz;
});
