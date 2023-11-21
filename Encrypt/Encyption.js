export default function vigenereCipher(text) {
    const key = 'EcoInnovation';
    const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    let encryptedText = '';
    let extendedKey = '';
  
    // Extender la clave para que tenga la misma longitud que el texto
    for (let i = 0; i < text.length; i++) {
      extendedKey += key.charAt(i % key.length);
    }
  
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      let charIndex;
  
      if (/[A-Z]/.test(char)) {
        const keyChar = extendedKey.charAt(i).toUpperCase();
        const keyIndexInAlphabet = alphabetUpper.indexOf(keyChar);
  
        charIndex = alphabetUpper.indexOf(char);
  
        if (charIndex !== -1) {
          charIndex = (charIndex + keyIndexInAlphabet) % 26;
          encryptedText += alphabetUpper.charAt(charIndex);
        } else {
          encryptedText += char;
        }
      } else if (/[a-z]/.test(char)) {
        const keyChar = extendedKey.charAt(i).toLowerCase();
        const keyIndexInAlphabet = alphabetLower.indexOf(keyChar);
  
        charIndex = alphabetLower.indexOf(char);
  
        if (charIndex !== -1) {
          charIndex = (charIndex + keyIndexInAlphabet) % 26;
          encryptedText += alphabetLower.charAt(charIndex);
        } else {
          encryptedText += char;
        }
      } else {
        encryptedText += char;
      }
    }
  
    return encryptedText;
  }