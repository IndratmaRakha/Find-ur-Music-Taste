{/* <script>
    // Fungsi untuk menampilkan pesan kesalahan
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    // Fungsi untuk menampilkan pesan sukses
    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    // Fungsi untuk memeriksa apakah input kosong
    function checkRequired(inputArray) {
        let isRequired = false;
        inputArray.forEach(function(input) {
            if (input.value.trim() === '') {
                showError(input, `${getFieldName(input)} is required`);
                isRequired = true;
            } else {
                showSuccess(input);
            }
        });
        return !isRequired;
    }

    // Fungsi untuk mendapatkan nama field
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    // Event listener untuk form registrasi
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Memeriksa kevalidan input
        if (checkRequired([username, email, password, confirmPassword])) {
            alert('Registrasi berhasil!');
            // Lakukan tindakan lanjutan di sini, misalnya mengirim data ke server
        }
    });
</script> */}

// Mendapatkan elemen tombol untuk membuka popup
const openPopupBtn = document.getElementById("open-popup-btn");
// Mendapatkan elemen popup
const scrollablePopup = document.getElementById("scrollable-popup");
// Mendapatkan tombol "Play"
const playButton = document.querySelector('.popup-content .btn');

// Fungsi untuk membuka popup
function openPopup() {
    scrollablePopup.style.display = 'flex';
}

// Fungsi untuk menutup popup
function closePopup() {
    scrollablePopup.style.display = 'none';
}

// Fungsi asynchronous untuk menangani tindakan ketika tombol "Play" diklik
// Fungsi asynchronous untuk menangani tindakan ketika tombol "Play" diklik
async function handlePlayButtonClick() {
    const checkboxes = document.querySelectorAll('.item-checkbox');

    // Kumpulkan nilai-nilai yang dipilih
    const selectedValues = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    });
    try {
        // Simulasikan tindakan yang dilakukan oleh tombol "Play" menggunakan promise
        await playMedia();
        // Tampilkan pesan sukses
        alert(`Berhasil Memutar: ${selectedValues.join(', ')}`);

        // Setelah pesan alert ditampilkan, tutup pop-up
        closePopup();

        // Opsi: Anda juga bisa melakukan refresh halaman setelah alert, jika ingin
        // location.reload();
    } catch (error) {
        // Tangani kesalahan jika ada
        alert(`Terjadi kesalahan: ${error.message}`);
    }
}


// Fungsi promise untuk mensimulasikan tindakan play media atau tugas tertentu
function playMedia() {
    return new Promise((resolve, reject) => {
        // Simulasikan waktu tunggu (misalnya, 2 detik) untuk menjalankan tindakan
        setTimeout(() => {
            // Misalnya, simulasi tindakan berhasil
            const isSuccess = true; // Ubah ini sesuai kondisi yang diinginkan

            if (isSuccess) {
                resolve("Media berhasil diputar!"); // Simulasi hasil sukses
            } else {
                reject(new Error("Kesalahan saat memutar media.")); // Simulasi kesalahan
            }
        }, 2000);
    });
}

// Menambahkan event listener ke tombol "Play"
playButton.addEventListener("click", handlePlayButtonClick);

// Menambahkan event listener ke tombol untuk membuka popup
openPopupBtn.addEventListener("click", openPopup);

// Menambahkan event listener ke tombol tutup untuk menutup popup
const closeButton = document.querySelector(".popup-close");
closeButton.addEventListener("click", closePopup);
