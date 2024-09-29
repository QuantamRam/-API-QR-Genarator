const qr_box = document.querySelector(".qr_box"),
      qrInput = qr_box.querySelector(".form input"),
      generateBtn = qr_box.querySelector(".form button"),
      qrImg = qr_box.querySelector(".qr_code img");
let preValue = "";

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;

    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrValue)}`;
    
    // Ensure image is loaded before showing
    qrImg.addEventListener("load", () => {
        qr_box.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    }, { once: true }); // Ensure event listener is only called once
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        qr_box.classList.remove("active");
        preValue = "";
    }
});
