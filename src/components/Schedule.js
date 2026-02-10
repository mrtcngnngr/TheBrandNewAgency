import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Schedule.css';
import { 
  validateEmail, 
  validatePhone, 
  validateName, 
  validateMessage, 
  sanitizeInput,
  checkRateLimit 
} from '../utils/validation';

const Schedule = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    company: false,
    message: false
  });

  const MAX_MESSAGE_LENGTH = 250;

  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.name === 'message' && value.length > MAX_MESSAGE_LENGTH) {
      return;
    }
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleFocus = (field) => {
    setFocused({
      ...focused,
      [field]: true
    });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused({
        ...focused,
        [field]: false
      });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad gereklidir';
    } else if (!validateName(formData.name)) {
      newErrors.name = 'Geçerli bir ad soyad giriniz';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon gereklidir';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Geçerli bir telefon numarası giriniz';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj gereklidir';
    } else if (!validateMessage(formData.message, MAX_MESSAGE_LENGTH)) {
      newErrors.message = `Mesaj en fazla ${MAX_MESSAGE_LENGTH} karakter olabilir`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    let timeoutId = null;
    
    if (submitStatus === 'success') {
      timeoutId = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } else if (submitStatus === 'error') {
      timeoutId = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [submitStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!checkRateLimit()) {
      setSubmitStatus('error');
      return;
    }

    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    try {
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        company: sanitizeInput(formData.company || ''),
        message: sanitizeInput(formData.message),
      };

      const emailData = {
        to: 'info@thebrandnew.agency',
        from: sanitizedData.email,
        subject: `Yeni İletişim Formu - ${sanitizedData.name}`,
        name: sanitizedData.name,
        phone: sanitizedData.phone,
        company: sanitizedData.company || 'Belirtilmemiş',
        message: sanitizedData.message,
      };

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      setFocused({
        name: false,
        email: false,
        phone: false,
        company: false,
        message: false
      });

    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="schedule-wrapper dark">
      <div className="aurora-background"></div>
      <section className="schedule" id="schedule">
        <div className="schedule-container">
          <div className="schedule-header">
            <motion.h2 
              className="schedule-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Görüşme Ayarlayın
            </motion.h2>
            <motion.p 
              className="schedule-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Projenizi konuşmak için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
            </motion.p>
          </div>

          <motion.form 
            className="schedule-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="schedule-form-columns">
              <div className="schedule-left-form-column">
                <div className="input-container">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => {
                      handleFocus('name');
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    onBlur={() => handleBlur('name')}
                    className={`schedule-input ${errors.name ? 'error' : ''}`}
                    required
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    autoComplete="name"
                  />
                  <label 
                    htmlFor="name" 
                    className={`schedule-label ${focused.name || formData.name ? 'focused' : ''}`}
                  >
                    Ad Soyad
                  </label>
                  <div className="input-underline"></div>
                  {errors.name && (
                    <span id="name-error" className="error-message" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="input-container">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => {
                      handleFocus('phone');
                      if (errors.phone) setErrors({ ...errors, phone: null });
                    }}
                    onBlur={() => handleBlur('phone')}
                    className={`schedule-input ${errors.phone ? 'error' : ''}`}
                    required
                    aria-required="true"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    autoComplete="tel"
                  />
                  <label 
                    htmlFor="phone" 
                    className={`schedule-label ${focused.phone || formData.phone ? 'focused' : ''}`}
                  >
                    Telefon
                  </label>
                  <div className="input-underline"></div>
                  {errors.phone && (
                    <span id="phone-error" className="error-message" role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className="schedule-right-form-column">
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => {
                      handleFocus('email');
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    onBlur={() => handleBlur('email')}
                    className={`schedule-input ${errors.email ? 'error' : ''}`}
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    autoComplete="email"
                  />
                  <label 
                    htmlFor="email" 
                    className={`schedule-label ${focused.email || formData.email ? 'focused' : ''}`}
                  >
                    E-posta
                  </label>
                  <div className="input-underline"></div>
                  {errors.email && (
                    <span id="email-error" className="error-message" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="input-container">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => handleFocus('company')}
                    onBlur={() => handleBlur('company')}
                    className="schedule-input"
                    autoComplete="organization"
                  />
                  <label 
                    htmlFor="company" 
                    className={`schedule-label ${focused.company || formData.company ? 'focused' : ''}`}
                  >
                    Şirket (Opsiyonel)
                  </label>
                  <div className="input-underline"></div>
                </div>

                <div className="input-container textarea-container">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => {
                      handleFocus('message');
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    onBlur={() => handleBlur('message')}
                    className={`schedule-input schedule-textarea ${errors.message ? 'error' : ''}`}
                    rows="5"
                    maxLength={MAX_MESSAGE_LENGTH}
                    required
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : 'message-count'}
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className={`schedule-label ${focused.message || formData.message ? 'focused' : ''}`}
                  >
                    Mesajınız
                  </label>
                  <div className="input-underline"></div>
                  <div 
                    id="message-count"
                    className={`character-count ${formData.message.length >= MAX_MESSAGE_LENGTH * 0.9 ? 'warning' : ''} ${formData.message.length >= MAX_MESSAGE_LENGTH * 0.95 ? 'danger' : ''}`}
                    aria-live="polite"
                  >
                    {formData.message.length}/{MAX_MESSAGE_LENGTH}
                  </div>
                  {errors.message && (
                    <span id="message-error" className="error-message" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="schedule-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Gönderiliyor...</span>
              ) : submitStatus === 'success' ? (
                <span>Gönderildi ✓</span>
              ) : submitStatus === 'error' ? (
                <span>Hata! Tekrar Dene</span>
              ) : (
                <>
                  <span>Gönder</span>
                  <span className="submit-arrow" aria-hidden="true">→</span>
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <motion.div
                className="submit-status success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                className="submit-status error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan info@thebrandnew.agency adresine mail gönderin.
              </motion.div>
            )}
          </motion.form>
        </div>
    </section>
    </div>
  );
};

export default Schedule;

