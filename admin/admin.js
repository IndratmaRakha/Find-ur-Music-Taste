document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    // Menambahkan atau menghapus kelas 'open' pada sidebar
    document.querySelector('.sidebar').classList.toggle('open');
});