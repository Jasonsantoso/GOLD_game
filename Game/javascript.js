/* Javascript */

jam = 0;
menit = 0;
tanggal = 1;
bulan = 1;
tahun = 2014;
detik = 0;
function waktu() {
	detik +=1;
	
	
	if(detik %10==0){
	menit+=1;
	}
	
	if (menit < 10) {
		menitText =  ":0" + menit;
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
	
	if (bulan == 1) {
		bln = "Jan";
	}
	else if (bulan == 2) {
		bln = "Feb";
	}
	else if (bulan == 3) {
		bln = "Mar";
	}
	else if (bulan == 4) {
		bln = "Apr";
	}
	else if (bulan == 5) {
		bln = "May";
	}
	else if (bulan == 6) {
		bln = "Jun";
	}
	else if (bulan == 7) {
		bln = "Jul";
	}
	else if (bulan == 8) {
		bln = "Aug";
	}
	else if (bulan == 9) {
		bln = "Sep";
	}
	else if (bulan == 10) {
		bln = "Okt";
	}
	else if (bulan == 11) {
		bln = "Nov";
	}
	else if (bulan == 12) {
		bln = "Dec";
	}
	
	waktuText = jamText + menitText;
	document.getElementById("time").innerHTML = waktuText;
	tanggalText = tanggal + "/" + bln + "/" +tahun;
	document.getElementById("date").innerHTML = tanggalText;
	time = setTimeout(function(){waktu()}, 500);
}
waktu();

function pilihboy() {
	cwo = document.getElementById("boy").value;
	document.getElementById("play_as").innerHTML = cwo;
}

function pilihgirl() {
	cwe = document.getElementById("girl").value;
	document.getElementById("play_as").innerHTML = cwe;
}


	a = 0;
	pos = $("img:first");
			
	$("#prev").click(function(){
		a--;
		pos.fadeToggle(1000);
		if(a == -1){
			pos = $("img:last");
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
			pos = $("img:first");
			pos.fadeIn(1000);
			a = 0;
		}
	});