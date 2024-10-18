function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
    
    // Reset form after submission
    document.getElementById('contactForm').reset();
    return false; // Prevent actual form submission
}
