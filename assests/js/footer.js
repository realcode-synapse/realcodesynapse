function openWhatsApp() {
    const phoneNumber = '917659844898'; // Your number
    const message = encodeURIComponent("Hello! I'm interested in taking training at RCS. Please share more details.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }