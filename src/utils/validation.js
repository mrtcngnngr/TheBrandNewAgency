export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 13;
};

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
};

export const sanitizeHTML = (html) => {
  if (typeof html !== 'string') return html;
  
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

export const validateName = (name) => {
  if (!name || name.trim().length < 2) return false;
  const nameRegex = /^[a-zA-ZçğıöşüÇĞIİÖŞÜ\s]+$/;
  return nameRegex.test(name.trim());
};

export const validateMessage = (message, maxLength = 250) => {
  if (!message || message.trim().length === 0) return false;
  return message.trim().length <= maxLength;
};

export const checkRateLimit = () => {
  const lastSubmit = localStorage.getItem('lastFormSubmit');
  if (lastSubmit) {
    const timeDiff = Date.now() - parseInt(lastSubmit, 10);
    if (timeDiff < 5000) {
      return false;
    }
  }
  localStorage.setItem('lastFormSubmit', Date.now().toString());
  return true;
};

