// JavaScript untuk menampilkan teks saat tombol "Selengkapnya" ditekan
document.getElementById("lihat").addEventListener("click", function () {
    var teks = document.getElementById("teks");
    if (teks.style.display === "none") {
        teks.style.display = "block";
    } else {
        teks.style.display = "none";
    }
});

const dataDukungan = [];

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#gambar img");
    let currentIndex = 0;

    function showImage(index) {
        images[currentIndex].style.display = "none";
        currentIndex = (index + images.length) % images.length;
        images[currentIndex].style.display = "block";
    }

    setInterval(function() {
        showImage(currentIndex + 1);
    }, 3000); // Ganti gambar setiap 3 detik (3000 ms)
});

function handleGetFormData() {
    var nama = document.getElementById("nama").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var zipCode = document.getElementById("zip-code").value;
    var status = document.getElementById("status").checked;

    return {
        name: nama,
        city: city,
        email: email,
        zipCode: zipCode,
        status: status
    };
}

function isNumber(value) {
    return !isNaN(value);
}

function checkboxIsChecked() {
    return document.getElementById("status").checked;
}

function validateFormData(formData) {
    if (
        formData &&
        isNumber(formData.zipCode) &&
        checkboxIsChecked()
    ) {
        return true;
    } else {
        return false;
    }
}

document.getElementById("form-dukungan").addEventListener("submit", function (event) {
    event.preventDefault();
    
    var formData = handleGetFormData();
    
    if (validateFormData(formData)) {
        // Submit data atau jalankan tindakan lain di sini
        document.getElementById("warning").textContent = "";
    } else {
        document.getElementById("warning").textContent = "Periksa form anda sekali lagi.";
    }
});


document.getElementById("submit-form").addEventListener("click", function (event) {
    event.preventDefault();

    var formData = handleGetFormData();

    if (validateFormData(formData)) {
        // Submit data atau jalankan tindakan lain di sini
        dataDukungan.push(formData); // Push data yang valid ke dalam array
        console.log("Data yang tersimpan:", dataDukungan);

        // Kosongkan input setelah submit
        document.getElementById("nama").value = "";
        document.getElementById("city").value = "";
        document.getElementById("email").value = "";
        document.getElementById("zip-code").value = "";
        document.getElementById("status").checked = false;


        // Tambahkan logika untuk mengirim data ke server di sini jika diperlukan
    } else {
        document.getElementById("warning").textContent = "Periksa form anda sekali lagi.";
    }
});
