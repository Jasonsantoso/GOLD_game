/* Javascript */
$("#ok").click(function(){
	inputan_nama = document.getElementById("name").value;
	document.getElementById("charname").innerHTML = inputan_nama;
	$("#page1").fadeToggle(300, function(){
		$("#page2").show(2000);
	});
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
	stamina_stat -= 10;
	fun_stat -= 10;
	hunger_stat -= 10;
	
	dec = setTimeout(function(){stat_dec();},4000);
}

function cetak_stat() {
	if(stamina_stat <= 0) stamina_stat = 0;
	if(fun_stat <= 0) fun_stat = 0;
	if(hunger_stat <= 0) hunger_stat = 0;
	
	if(stamina_stat >= 100) stamina_stat = 100;
	if(fun_stat >= 100) fun_stat = 100;
	if(hunger_stat >= 100) hunger_stat = 100;
	if(intelligent_stat >= 100) intelligent_stat = 100;
	
	document.getElementById("istamina").innerHTML = "Stamina " + stamina_stat + "%";
	document.getElementById("ifun").innerHTML = "Fun " + fun_stat + "%";
	document.getElementById("ihunger").innerHTML = "Hunger " + hunger_stat + "%";
	document.getElementById("iintelligent").innerHTML = "Intelligent " + intelligent_stat + "%";
	cetak = setTimeout(function(){cetak_stat()}, 500);
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
});

$("#play_button").click(function() {
	fun_stat += 50;
});

$("#eat_button").click(function() {
	hunger_stat += 50;
});

$("#study_button").click(function() {
	intelligent_stat += 20;
});

$("#start_button").click(function() {
	stat_dec();
	cetak_stat();
	waktu();
});

$("#stop_button").click(function() {
	clearTimeout(cetak);
	clearTimeout(dec);
	clearTimeout(time);
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