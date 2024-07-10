// Función para encriptar el texto ingresado por el usuario
function encriptar() {
    // Capturar el texto del campo de entrada
    const inputText = document.getElementById('inputText').value;

    // Validar que solo contenga letras minúsculas y sin acentos
    if (!/^[a-z\s]*$/.test(inputText)) {
        alert('Solo se permiten letras minúsculas y sin acentos');
        return;
    }

    // Reemplazar cada letra según las reglas de encriptación
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    // Mostrar el texto encriptado en el área de salida
    document.getElementById('outputText').value = encryptedText;
}

// Función para desencriptar el texto ingresado por el usuario
function desencriptar() {
    // Capturar el texto del campo de entrada
    const inputText = document.getElementById('inputText').value;

    // Validar que solo contenga letras minúsculas y sin acentos
    if (!/^[a-z\s]*$/.test(inputText)) {
        alert('Solo se permiten letras minúsculas y sin acentos');
        return;
    }

    // Reemplazar cada secuencia de encriptación por su letra correspondiente
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Mostrar el texto desencriptado en el área de salida
    document.getElementById('outputText').value = decryptedText;
}

// Función para copiar el texto del área de salida al portapapeles
function copiarTexto() {
    // Seleccionar el texto del área de salida
    const outputText = document.getElementById('outputText');
    outputText.select();

    // Copiar el texto al portapapeles
    document.execCommand('copy');

    // Mostrar una alerta indicando que el texto ha sido copiado
    alert('Texto copiado al portapapeles');
}