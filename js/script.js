document.addEventListener("DOMContentLoaded", function () { // javascript dijalankan setelah seluruh HTML selesai dimuat

  const navItems = document.querySelectorAll(".rm-nav-item"); // ambil semua link navbar

  const currentPath = window.location.pathname.split("/").pop(); // ambil path URL saat ini (misalnya: /pages/reminder.html)

  navItems.forEach((item) => { // melakukan perulangan/pengecekan pada setiap link navbar
    const href = item.getAttribute("href"); // ambil href dari menu

    // Jika href sama dengan halaman saat ini
    if (href === currentPath) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});