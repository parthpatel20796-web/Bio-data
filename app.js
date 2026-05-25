let isEditing = false;
let currentTheme = 'slate';
let currentLang = 'en';

const STORAGE_KEY = 'marriage_biodata_shared_v5';
const PHOTO_KEY = 'marriage_biodata_photo_v3';
const OWNER_KEY = 'marriage_biodata_owner';

const labels = {
  en: {
    'btn-edit': 'Edit Info', 'btn-save': 'Save Changes', 'btn-print': 'Print / PDF',
    'lbl-upload': 'Click to Upload Profile Photo', 'lbl-change': 'Change Photo',
    'lbl-dob': 'Date of Birth', 'lbl-tob': 'Time of Birth', 'lbl-pob': 'Place of Birth', 'lbl-height': 'Height', 'lbl-rashi': 'Rashi', 'lbl-gotra': 'Gotra', 'lbl-community': 'Community', 'lbl-diet': 'Diet',
    'lbl-edit-helper': 'Tap any text to edit. Changes save instantly on this device.',
    'tab-career': 'Career & Edu', 'tab-family': 'Family Details', 'tab-lifestyle': 'Lifestyle', 'tab-contact': 'Contact',
    'sec-edu': 'Education (Brief)', 'sec-job': 'Career & Job Duties',
    'lbl-edu-c1': 'Centennial College (2023)', 'lbl-edu-c2': 'Centennial College (2022)', 'lbl-edu-u1': 'RKDF University (2018)',
    'lbl-job-date1': 'August 2025 - Present', 'lbl-job-date2': 'November 2023 - Present', 'lbl-job-date3': 'August 2018 - August 2021',
    'sec-family': 'Family Details (Brief)', 'lbl-father': 'Father', 'lbl-mother': 'Mother', 'lbl-brother': 'Brother', 'lbl-sister': 'Sister',
    'sec-settlement': 'Settlement Status', 'sec-adventures': 'Favorite Adventures', 'sec-contact': 'Contact & Socials',
    'lbl-phone': 'Phone', 'lbl-email': 'Email', 'lbl-linkedin': 'LinkedIn', 'lbl-instagram': 'Instagram', 'lbl-address': 'Residence Address',
    'sec-share': 'Quick Share', 'desc-share': 'Copy a WhatsApp-friendly summary to share directly.', 'btn-share': 'Copy WhatsApp Summary',
    'hb-sky': 'Sky Diving', 'hb-sky-desc': 'Loved the ultimate free-fall thrill', 'hb-raft': 'River Rafting', 'hb-raft-desc': 'Navigating strong rapids', 'hb-hike': 'Hiking', 'hb-hike-desc': 'Scaling majestic mountain trails', 'hb-scuba': 'Scuba Diving', 'hb-scuba-desc': 'Exploring deep underwater realms', 'hb-mountain': 'Mountains', 'hb-mountain-desc': 'Elevated views & crisp air', 'hb-cloud': 'Cloudscapes', 'hb-cloud-desc': 'Watching shifting cloud details',
    'toast-saved': 'Saved instantly on this device.', 'toast-edit': 'Edit mode active. Tap any text to modify.', 'toast-photo': 'Profile photo updated!', 'toast-copied': 'WhatsApp summary copied!'
  },
  hi: {
    'btn-edit': 'जानकारी बदलें', 'btn-save': 'बदलाव सहेजें', 'btn-print': 'प्रिंट / PDF',
    'lbl-upload': 'प्रोफाइल फोटो अपलोड करें', 'lbl-change': 'फोटो बदलें',
    'lbl-dob': 'जन्म तारीख', 'lbl-tob': 'जन्म समय', 'lbl-pob': 'जन्म स्थान', 'lbl-height': 'ऊंचाई', 'lbl-rashi': 'राशि', 'lbl-gotra': 'गोत्र', 'lbl-community': 'समुदाय', 'lbl-diet': 'आहार',
    'lbl-edit-helper': 'किसी भी जानकारी पर टैप करके बदलें। बदलाव इस डिवाइस पर तुरंत सहेजे जाएंगे।',
    'tab-career': 'करियर और शिक्षा', 'tab-family': 'परिवार विवरण', 'tab-lifestyle': 'जीवनशैली', 'tab-contact': 'संपर्क',
    'sec-edu': 'शिक्षा (संक्षेप में)', 'sec-job': 'करियर और जिम्मेदारियां',
    'lbl-edu-c1': 'Centennial College (2023)', 'lbl-edu-c2': 'Centennial College (2022)', 'lbl-edu-u1': 'RKDF University (2018)',
    'lbl-job-date1': 'अगस्त 2025 - वर्तमान', 'lbl-job-date2': 'नवंबर 2023 - वर्तमान', 'lbl-job-date3': 'अगस्त 2018 - अगस्त 2021',
    'sec-family': 'परिवार विवरण (संक्षेप में)', 'lbl-father': 'पिता', 'lbl-mother': 'माता', 'lbl-brother': 'भाई', 'lbl-sister': 'बहन',
    'sec-settlement': 'सेटलमेंट स्थिति', 'sec-adventures': 'पसंदीदा एडवेंचर', 'sec-contact': 'संपर्क और सोशल',
    'lbl-phone': 'फोन', 'lbl-email': 'ईमेल', 'lbl-linkedin': 'LinkedIn', 'lbl-instagram': 'Instagram', 'lbl-address': 'निवास पता',
    'sec-share': 'जल्दी शेयर करें', 'desc-share': 'WhatsApp के लिए तैयार सारांश कॉपी करें।', 'btn-share': 'WhatsApp सारांश कॉपी करें',
    'hb-sky': 'स्काई डाइविंग', 'hb-sky-desc': 'फ्री-फॉल का रोमांच', 'hb-raft': 'रिवर राफ्टिंग', 'hb-raft-desc': 'तेज बहाव में रोमांच', 'hb-hike': 'हाइकिंग', 'hb-hike-desc': 'सुंदर पहाड़ी रास्ते', 'hb-scuba': 'स्कूबा डाइविंग', 'hb-scuba-desc': 'पानी के अंदर की खोज', 'hb-mountain': 'पर्वत', 'hb-mountain-desc': 'ऊंचे दृश्य और ताजी हवा', 'hb-cloud': 'बादल देखना', 'hb-cloud-desc': 'बदलते बादलों की सुंदरता',
    'toast-saved': 'इस डिवाइस पर तुरंत सेव हो गया।', 'toast-edit': 'एडिट मोड चालू है। किसी भी टेक्स्ट पर टैप करें।', 'toast-photo': 'प्रोफाइल फोटो अपडेट हो गई!', 'toast-copied': 'WhatsApp सारांश कॉपी हो गया!'
  },
  gu: {
    'btn-edit': 'માહિતી બદલો', 'btn-save': 'ફેરફાર સાચવો', 'btn-print': 'પ્રિન્ટ / PDF',
    'lbl-upload': 'પ્રોફાઇલ ફોટો અપલોડ કરો', 'lbl-change': 'ફોટો બદલો',
    'lbl-dob': 'જન્મ તારીખ', 'lbl-tob': 'જન્મ સમય', 'lbl-pob': 'જન્મ સ્થળ', 'lbl-height': 'ઊંચાઈ', 'lbl-rashi': 'રાશિ', 'lbl-gotra': 'ગોત્ર', 'lbl-community': 'સમુદાય', 'lbl-diet': 'આહાર',
    'lbl-edit-helper': 'કોઈપણ માહિતી પર ટેપ કરીને બદલો. ફેરફાર આ ડિવાઇસ પર તરત સાચવાશે.',
    'tab-career': 'કારકિર્દી અને શિક્ષણ', 'tab-family': 'પરિવાર વિગતો', 'tab-lifestyle': 'જીવનશૈલી', 'tab-contact': 'સંપર્ક',
    'sec-edu': 'શિક્ષણ (ટૂંકમાં)', 'sec-job': 'કારકિર્દી અને જવાબદારીઓ',
    'lbl-edu-c1': 'Centennial College (2023)', 'lbl-edu-c2': 'Centennial College (2022)', 'lbl-edu-u1': 'RKDF University (2018)',
    'lbl-job-date1': 'ઓગસ્ટ 2025 - હાલમાં', 'lbl-job-date2': 'નવેમ્બર 2023 - હાલમાં', 'lbl-job-date3': 'ઓગસ્ટ 2018 - ઓગસ્ટ 2021',
    'sec-family': 'પરિવાર વિગતો (ટૂંકમાં)', 'lbl-father': 'પિતા', 'lbl-mother': 'માતા', 'lbl-brother': 'ભાઈ', 'lbl-sister': 'બહેન',
    'sec-settlement': 'સેટલમેન્ટ સ્થિતિ', 'sec-adventures': 'પ્રિય સાહસો', 'sec-contact': 'સંપર્ક અને સોશિયલ',
    'lbl-phone': 'ફોન', 'lbl-email': 'ઇમેઇલ', 'lbl-linkedin': 'LinkedIn', 'lbl-instagram': 'Instagram', 'lbl-address': 'રહેઠાણ સરનામું',
    'sec-share': 'ઝડપી શેર', 'desc-share': 'WhatsApp માટે તૈયાર સારાંશ કોપી કરો.', 'btn-share': 'WhatsApp સારાંશ કોપી કરો',
    'hb-sky': 'સ્કાય ડાઇવિંગ', 'hb-sky-desc': 'ફ્રી-ફોલનો રોમાંચ', 'hb-raft': 'રિવર રાફ્ટિંગ', 'hb-raft-desc': 'ઝડપી પ્રવાહમાં રોમાંચ', 'hb-hike': 'હાઇકિંગ', 'hb-hike-desc': 'સુંદર પર્વતીય રસ્તા', 'hb-scuba': 'સ્કૂબા ડાઇવિંગ', 'hb-scuba-desc': 'પાણીની અંદર શોધ', 'hb-mountain': 'પર્વતો', 'hb-mountain-desc': 'ઊંચા દ્રશ્યો અને તાજી હવા', 'hb-cloud': 'વાદળો', 'hb-cloud-desc': 'બદલાતા વાદળોની સુંદરતા',
    'toast-saved': 'આ ડિવાઇસ પર તરત સાચવાયું.', 'toast-edit': 'એડિટ મોડ ચાલુ છે. કોઈપણ લખાણ પર ટેપ કરો.', 'toast-photo': 'પ્રોફાઇલ ફોટો અપડેટ થયો!', 'toast-copied': 'WhatsApp સારાંશ કોપી થયો!'
  }
};

function hasOwnerAccess() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('viewer') === '1') {
    localStorage.removeItem(OWNER_KEY);
    return false;
  }
  if (params.get('admin') === '1' || params.get('edit') === '1') {
    localStorage.setItem(OWNER_KEY, '1');
    return true;
  }
  return localStorage.getItem(OWNER_KEY) === '1';
}

function ownerAccess() {
  return document.body.dataset.owner === 'true';
}

function t(key) {
  return (labels[currentLang] && labels[currentLang][key]) || labels.en[key] || key;
}

function allEditable() {
  return Array.from(document.querySelectorAll('[data-key]'));
}

function saveToStorage() {
  const data = {};
  allEditable().forEach((el) => { data[el.dataset.key] = el.innerHTML; });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadFromStorage() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    allEditable().forEach((el) => {
      if (Object.prototype.hasOwnProperty.call(data, el.dataset.key)) el.innerHTML = data[el.dataset.key];
    });
  } catch (error) {
    console.warn('Could not load saved bio-data', error);
  }
}

function applyUILabels() {
  document.querySelectorAll('[data-ui-key]').forEach((el) => { el.textContent = t(el.dataset.uiKey); });
  const editBtnText = document.getElementById('edit-btn-text');
  if (editBtnText) editBtnText.textContent = isEditing ? t('btn-save') : t('btn-edit');
}

function setTheme(theme) {
  document.body.className = `theme-${theme}${isEditing ? ' edit-active' : ''}`;
  document.body.dataset.owner = ownerAccess() ? 'true' : 'false';
  document.querySelectorAll('.theme-dot').forEach((dot) => dot.classList.remove('active'));
  const activeDot = document.querySelector(`.dot-${theme}`);
  if (activeDot) activeDot.classList.add('active');
  currentTheme = theme;
  localStorage.setItem('marriage_biodata_theme', theme);
}

function setLanguage(lang) {
  if (isEditing) saveToStorage();
  currentLang = labels[lang] ? lang : 'en';
  localStorage.setItem('marriage_biodata_lang', currentLang);
  document.querySelectorAll('.lang-btn').forEach((btn) => btn.classList.toggle('active', btn.id === `lang-${currentLang}`));
  applyUILabels();
}

function switchTab(event, tabId) {
  document.querySelectorAll('.tab-content').forEach((content) => content.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach((button) => button.classList.remove('active'));
  const tab = document.getElementById(tabId);
  if (tab) tab.classList.add('active');
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
}

function toggleEditMode() {
  if (!ownerAccess()) return;
  isEditing = !isEditing;
  const button = document.getElementById('edit-btn');
  const text = document.getElementById('edit-btn-text');
  if (isEditing) {
    document.body.classList.add('edit-active');
    if (text) text.textContent = t('btn-save');
    if (button) button.style.cssText = 'background:#22c55e;color:#fff;border-color:#22c55e;';
    allEditable().forEach((el) => el.setAttribute('contenteditable', 'true'));
    showToast(t('toast-edit'), '#e2b857');
  } else {
    saveToStorage();
    document.body.classList.remove('edit-active');
    if (text) text.textContent = t('btn-edit');
    if (button) button.style.cssText = '';
    allEditable().forEach((el) => el.setAttribute('contenteditable', 'false'));
    showToast(t('toast-saved'), '#22c55e');
  }
}

function triggerPhotoUpload() {
  if (!ownerAccess()) return;
  const input = document.getElementById('photo-file-input');
  if (input) input.click();
}

function loadPhoto(event) {
  if (!ownerAccess()) return;
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.getElementById('profile-img');
    const placeholder = document.getElementById('img-placeholder');
    if (img) { img.src = e.target.result; img.style.display = 'block'; }
    if (placeholder) placeholder.style.display = 'none';
    localStorage.setItem(PHOTO_KEY, e.target.result);
    showToast(t('toast-photo'), '#22c55e');
  };
  reader.readAsDataURL(file);
}

function loadPhotoFromStorage() {
  const src = localStorage.getItem(PHOTO_KEY);
  if (!src) return;
  const img = document.getElementById('profile-img');
  const placeholder = document.getElementById('img-placeholder');
  if (img) { img.src = src; img.style.display = 'block'; }
  if (placeholder) placeholder.style.display = 'none';
}

function showToast(message, bgColor) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toast-message');
  if (!toast || !msg) return;
  toast.style.background = bgColor || '#22c55e';
  msg.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1600);
}

function textOf(id) {
  const el = document.getElementById(id);
  return el ? el.innerText.replace(/\s+/g, ' ').trim() : '';
}

function copyWhatsAppSummary() {
  const text = `*MARRIAGE BIO-DATA*\n\n*PERSONAL DETAILS*\n- Name: ${textOf('val-fullname')}\n- Date of Birth: ${textOf('val-dob')}\n- Height: ${textOf('val-height')}\n- Rashi: ${textOf('val-rashi')}\n- Gotra: ${textOf('val-gotra')}\n- Community: ${textOf('val-community')}\n- Diet: ${textOf('val-diet')}\n\n*EDUCATION & CAREER*\n- ${textOf('val-edu1')}\n- ${textOf('val-edu2')}\n- ${textOf('val-edu3')}\n- ${textOf('val-job1')}\n- ${textOf('val-job2')}\n- ${textOf('val-job3')}\n\n*FAMILY BACKGROUND*\n- Father: ${textOf('val-father')}\n- Mother: ${textOf('val-mother')}\n- Brother: ${textOf('val-brother')}\n- Sister: ${textOf('val-sister')}\n- Uncle: ${textOf('val-uncle')}\n- Aunt: ${textOf('val-aunt')}\n- Cousin Brother: ${textOf('val-cousin-brother')}\n- Cousin Sister: ${textOf('val-cousin-sister')}\n\n*CONTACT DETAILS*\n- Phone: ${textOf('val-phone')}\n- Email: ${textOf('val-email')}\n- LinkedIn: ${textOf('val-linkedin')}\n- Instagram: ${textOf('val-instagram')}\n- Address: ${textOf('val-address')}`;
  navigator.clipboard.writeText(text)
    .then(() => showToast(t('toast-copied'), '#075e54'))
    .catch(() => showToast('Could not copy. Please try again.', '#ef4444'));
}

function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const createStar = () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: 0.45 + Math.random() * 1.4,
    alpha: Math.random(),
    target: Math.random(),
    speed: 0.006 + Math.random() * 0.016,
    color: Math.floor(Math.random() * 4)
  });

  let stars = Array.from({ length: Math.min(210, Math.floor(width * height / 8500)) }, createStar);
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    stars = Array.from({ length: Math.min(210, Math.floor(width * height / 8500)) }, createStar);
  });

  function palette() {
    if (currentTheme === 'linen') return ['rgba(255,240,210,', 'rgba(255,220,170,', 'rgba(220,180,130,', 'rgba(255,255,240,'];
    if (currentTheme === 'blush') return ['rgba(255,200,220,', 'rgba(255,170,200,', 'rgba(255,230,250,', 'rgba(255,215,157,'];
    return ['rgba(255,255,255,', 'rgba(226,184,87,', 'rgba(200,220,255,', 'rgba(255,240,180,'];
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const colors = palette();
    stars.forEach((star) => {
      if (Math.abs(star.alpha - star.target) < 0.01) star.target = 0.08 + Math.random() * 0.92;
      star.alpha += (star.target - star.alpha) * star.speed;
      const color = colors[star.color];
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `${color}${star.alpha.toFixed(2)})`;
      ctx.fill();
      if (star.size > 1.4) {
        ctx.strokeStyle = `${color}${(star.alpha * 0.7).toFixed(2)})`;
        ctx.beginPath();
        ctx.moveTo(star.x - star.size * 4, star.y);
        ctx.lineTo(star.x + star.size * 4, star.y);
        ctx.moveTo(star.x, star.y - star.size * 4);
        ctx.lineTo(star.x, star.y + star.size * 4);
        ctx.stroke();
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.dataset.owner = hasOwnerAccess() ? 'true' : 'false';
  const editButton = document.getElementById('edit-btn');
  if (editButton && !ownerAccess()) editButton.style.display = 'none';
  if (!ownerAccess()) document.querySelectorAll('[data-key]').forEach((el) => el.setAttribute('contenteditable', 'false'));

  loadFromStorage();
  setTheme(localStorage.getItem('marriage_biodata_theme') || 'slate');
  setLanguage(localStorage.getItem('marriage_biodata_lang') || 'en');
  loadPhotoFromStorage();
  initParticles();

  document.addEventListener('input', (event) => {
    if (!ownerAccess() || !event.target.matches('[data-key]')) return;
    saveToStorage();
    showToast(t('toast-saved'), '#22c55e');
  });
});
