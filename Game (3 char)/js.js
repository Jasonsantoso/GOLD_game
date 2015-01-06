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
	}
	if(cek_play_as == "pig") {
		sisip_stand = "<center><img src='gambar/character/pig_stand.png'/></center>";
		sisip_sleep = "<center><img src='gambar/character/pig_sleep.png'/></center>";
		sisip_play = "<center><img src='gambar/character/pig_play.png'/></center>";
		sisip_eat = "<center><img src='gambar/character/pig_eat.png'/></center>";
		sisip_study = "<center><img src='gambar/character/pig_study.png'/></center>";
		sisip_stop = "<center><img src='gambar/character/pig_grayscale.png'/></center>";
	}
	if(cek_play_as == "buffalo") {
		sisip_stand = "<center><img src='gambar/character/buffalo_stand.png'/></center>";
		sisip_sleep = "<center><img src='gambar/character/buffalo_sleep.png'/></center>";
		sisip_play = "<center><img src='gambar/character/buffalo_play.png'/></center>";
		sisip_eat = "<center><img src='gambar/character/buffalo_eat.png'/></center>";
		sisip_study = "<center><img src='gambar/character/buffalo_study.png'/></center>";
		sisip_stop = "<center><img src='gambar/character/buffalo_grayscale.png'/></center>";
	}
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
	stamina_stat -= 20;
	fun_stat -= 20;
	hunger_stat -= 20;
	
	dec = setTimeout(function(){stat_dec();},5500);
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
	if (stamina_stat == 10) $("#cstamina").css({"width": "76px"});
	if (stamina_stat == 20) $("#cstamina").css({"width": "106px"});
	if (stamina_stat == 30) $("#cstamina").css({"width": "136px"});
	if (stamina_stat == 40) $("#cstamina").css({"width": "166px"});
	if (stamina_stat == 50) $("#cstamina").css({"width": "196px"});
	if (stamina_stat == 60) $("#cstamina").css({"width": "226px"});
	if (stamina_stat == 70) $("#cstamina").css({"width": "256px"});
	if (stamina_stat == 80) $("#cstamina").css({"width": "286px"});
	if (stamina_stat == 90) $("#cstamina").css({"width": "316px"});
	if (stamina_stat == 100) $("#cstamina").css({"width": "346px"});
	
	if (fun_stat == 0) $("#cfun").css({"width": "46px"});
	if (fun_stat == 10) $("#cfun").css({"width": "76px"});
	if (fun_stat == 20) $("#cfun").css({"width": "106px"});
	if (fun_stat == 30) $("#cfun").css({"width": "136px"});
	if (fun_stat == 40) $("#cfun").css({"width": "166px"});
	if (fun_stat == 50) $("#cfun").css({"width": "196px"});
	if (fun_stat == 60) $("#cfun").css({"width": "226px"});
	if (fun_stat == 70) $("#cfun").css({"width": "256px"});
	if (fun_stat == 80) $("#cfun").css({"width": "286px"});
	if (fun_stat == 90) $("#cfun").css({"width": "316px"});
	if (fun_stat == 100) $("#cfun").css({"width": "346px"});
	
	if (hunger_stat == 0) $("#chunger").css({"width": "46px"});
	if (hunger_stat == 10) $("#chunger").css({"width": "76px"});
	if (hunger_stat == 20) $("#chunger").css({"width": "106px"});
	if (hunger_stat == 30) $("#chunger").css({"width": "136px"});
	if (hunger_stat == 40) $("#chunger").css({"width": "166px"});
	if (hunger_stat == 50) $("#chunger").css({"width": "196px"});
	if (hunger_stat == 60) $("#chunger").css({"width": "226px"});
	if (hunger_stat == 70) $("#chunger").css({"width": "256px"});
	if (hunger_stat == 80) $("#chunger").css({"width": "286px"});
	if (hunger_stat == 90) $("#chunger").css({"width": "316px"});
	if (hunger_stat == 100) $("#chunger").css({"width": "346px"});
	
	if (intelligent_stat == 0) $("#cintelligent").css({"width": "46px"});
	if (intelligent_stat == 20) $("#cintelligent").css({"width": "106px"});
	if (intelligent_stat == 40) $("#cintelligent").css({"width": "166px"});
	if (intelligent_stat == 60) $("#cintelligent").css({"width": "226px"});
	if (intelligent_stat == 80) $("#cintelligent").css({"width": "286px"});
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
});

$("#play_button").click(function() {
	fun_stat += 50;
	document.getElementById("character").innerHTML = sisip_play;
	to_stand_png = setTimeout(function() {normal_mode()},5000);
});

$("#eat_button").click(function() {
	hunger_stat += 50;
	document.getElementById("character").innerHTML = sisip_eat;
	to_stand_png = setTimeout(function() {normal_mode()},5000);
});

$("#study_button").click(function() {
	intelligent_stat += 20;
	document.getElementById("character").innerHTML = sisip_study;
	to_stand_png = setTimeout(function() {normal_mode()},5000);
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
