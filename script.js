function pesan() {
  // Ambil nilai dari input
  var pilihan = document.getElementById("makanan").value;
  var jumlah  = parseInt(document.getElementById("jumlah").value);
  var harga = 0;
  var nama  = "";

  // 🔁 SWITCH: Menentukan nama & harga berdasarkan pilihan
  switch(pilihan) {
    case "cireng": nama = "Cireng"; harga = 15000; break;
    case "mie":  nama = "Mie Ayam";    harga = 12000; break;
    case "sate": nama = "Sate Ayam";   harga = 20000; break;
    case "es":   nama = "Es Teh";      harga = 5000;  break;
    default:     nama = "Tidak dikenal"; harga = 0;
  }

  var total = harga * jumlah;
  var pesan = "";

  // 🔀 IF / ELSE IF / ELSE: Memberi bonus sesuai jumlah pesanan
  if (jumlah >= 5) {
    pesan = "🎉 Wah banyak banget! Kamu dapat DISKON 10%!";
    total = total * 0.9;
  } else if (jumlah >= 3) {
    pesan = "🎁 Asyik! Kamu dapat FREE kerupuk!";
  } else {
    pesan = "😊 Terima kasih sudah memesan!";
  }

  // Tampilkan hasil
  document.getElementById("hasil").innerHTML =
    "Kamu pesan: <b>" + nama + "</b> x " + jumlah +
    "<br>Total: Rp " + total.toLocaleString("id-ID") +
    "<br>" + pesan;
}