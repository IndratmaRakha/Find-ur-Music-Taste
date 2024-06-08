let currentSlide = 0;

        function showSlide(n) {
            const track = document.querySelector('.carousel-track');
            const itemWidth = document.querySelector('.carousel-item').clientWidth;
            track.style.transform = `translateX(-${n * itemWidth * 1}px)`;
        }

        function changeSlide(n) {
            const slidesCount = document.querySelectorAll('.carousel-item').length / 1;
            currentSlide += n;
            if (currentSlide < 0) {
                currentSlide = slidesCount - 1;
            } else if (currentSlide >= slidesCount) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        }

        // Tampilkan 3 slide pertama saat halaman dimuat
        window.onload = function () {
            showSlide(currentSlide);
        };

    // Fungsi untuk mengubah background navbar saat di-scroll
    function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Tambahkan event listener pada scroll
window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const navItems = document.querySelectorAll('.nav-item');

    menuBtn.addEventListener('change', function () {
        navItems.forEach(item => {
            if (menuBtn.checked) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


        // // Ambil elemen pemutar audio dan bilah kemajuan
        // const audioPlayer = document.getElementById('audio-player');
        // const progressBar = document.getElementById('progress-bar');
        // const progress = document.getElementById('progress');

        // // Fungsi play/pause
        // function playPause() {
        //     if (audioPlayer.paused) {
        //         audioPlayer.play();
        //         this.textContent = 'Pause';
        //     } else {
        //         audioPlayer.pause();
        //         this.textContent = 'Play';
        //     }
        // }

        // // Fungsi stop
        // function stop() {
        //     audioPlayer.pause();
        //     audioPlayer.currentTime = 0;
        //     document.querySelector('.controls button').textContent = 'Play';
        // }

        // // Fungsi track sebelumnya
        // function previous() {
        //     // Implementasikan logika untuk track sebelumnya
        // }

        // // Fungsi track berikutnya
        // function next() {
        //     // Implementasikan logika untuk track berikutnya
        // }

        // // Pembarui bilah kemajuan saat audio diputar
        // audioPlayer.ontimeupdate = function() {
        //     const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        //     progress.style.width = `${progressPercentage}%`;
        // };