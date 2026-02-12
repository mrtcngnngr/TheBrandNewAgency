export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 13;
};

const DANGEROUS_PATTERNS = /javascript:|data:|vbscript:|blob:/gi;
const EVENT_HANDLER = /on\w+\s*=/gi;
const HTML_AND_SCRIPT = /[<>]/g;
const NULL_AND_CONTROL = /[\0-\x1F\x7F]/g;
const MAX_INPUT_LENGTH = 10000;

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  let out = input
    .replace(NULL_AND_CONTROL, '')
    .replace(HTML_AND_SCRIPT, '')
    .replace(DANGEROUS_PATTERNS, '')
    .replace(EVENT_HANDLER, '')
    .trim();
  return out.length > MAX_INPUT_LENGTH ? out.slice(0, MAX_INPUT_LENGTH) : out;
};

export const isSafeUrl = (url) => {
  if (typeof url !== 'string' || !url.trim()) return false;
  const trimmed = url.trim();
  return (
    trimmed.startsWith('#') ||
    trimmed.startsWith('/') ||
    (trimmed.startsWith('https://') && !trimmed.includes(' '))
  );
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

const RATE_LIMIT_MS = 5000;

export const checkRateLimit = () => {
  try {
    const lastSubmit = localStorage.getItem('lastFormSubmit');
    if (lastSubmit) {
      const ts = parseInt(lastSubmit, 10);
      if (Number.isNaN(ts) || Date.now() - ts < RATE_LIMIT_MS) return false;
    }
    localStorage.setItem('lastFormSubmit', String(Date.now()));
    return true;
  } catch {
    return false;
  }
};

