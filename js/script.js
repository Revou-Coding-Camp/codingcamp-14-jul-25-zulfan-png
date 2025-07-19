window.addEventListener("DOMContentLoaded", () => {
    let input = window.prompt("Siapa nama mu?");
    if (input) {
        let username = input.charAt(0).toUpperCase() + input.slice(1);
        document.getElementById("user-greet").innerHTML =
            "Hi " + username + ", Welcome To Website";
    }
});

function execute() {
  const nama = document.getElementById("nama").value;
  const tgl = document.getElementById("tgl_lahir").value;
  const kelamin = document.getElementById("kelamin").value;
  const pesan = document.getElementById("pesan").value;

  const time = document.getElementById("currtime");
  const nmout = document.getElementById("nmout");
  const tlout = document.getElementById("tlout");
  const jeout = document.getElementById("jeout");
  const pesanout = document.getElementById("msgout");

  const now = new Date();

  if (!nama || !tgl || !pesan) {
    window.alert("Mohon untuk mengisi semua input pada form!");
  } else if (!/^[A-Za-z\s]+$/.test(nama)) {
    window.alert("Mohon hanya mengisi huruf dan spasi pada kolom nama.");
  } else if (pesan.length > 100) {
    window.alert("Tidak dapat menulis pesan lebih dari 100 karakter.");
  } else {
    time.innerHTML = now
      .toString()
      .substring(0, now.toString().indexOf("(") - 1);
    nmout.innerHTML = nama;
    tlout.innerHTML = tgl;
    jeout.innerHTML = kelamin;
    pesanout.innerHTML = pesan;
  }
}