/* Javascript */

jam = 0;
detik = 0;
tanggal = 1;
bulan = 1;
tahun = 2014;

function waktu() {
	detik += 1;
	
	if (detik < 10) {
		detikText =  ":0" + detik;
	}
	else {
		detikText = ":" + detik;
	}
	
	if (jam < 10) {
		jamText = "0" + jam;
	}
	else {
		jamText = jam;
	}
	
	if (detik == 60) {
		detik = 0;
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
	
	waktuText = jamText + detikText;
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