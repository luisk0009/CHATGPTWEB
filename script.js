// Script para manejar el envío del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Validación simple
    if (name && email && message) {
        alert(`Gracias por contactarte, ${name}. He recibido tu mensaje y pronto te responderé.`);
        
        // Limpiar formulario
        document.getElementById("contactForm").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
