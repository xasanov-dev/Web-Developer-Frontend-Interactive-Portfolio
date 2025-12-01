// index.js

// ===== Loyihalar ma'lumotlari =====
const projects = [
  { title: "Portfolio Website", desc: "Zamonaviy responsive portfolio sayt.", link: "#" },
  { title: "Landing Page", desc: "Marketing uchun professional landing.", link: "#" },
  { title: "YouTube Clone", desc: "YouTube dizaynidan ilhomlangan mini platforma.", link: "#" },
  { title: "Interactive Game", desc: "HTML, CSS va JS asosida mini o‘yin.", link: "#" },
  { title: "React Blog", desc: "React bilan yaratilgan interaktiv blog platformasi.", link: "#" }
];

// ===== Project kartochkalarni yaratish =====
const projectList = document.getElementById("projectList");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${project.title}</h3><p>${project.desc}</p>`;
  
  // Kartochka bosilganda demo alert
  card.onclick = () => {
    alert(`${project.title} — demo yoki link qo‘shiladi`);
  };

  // Kartochka animatsiya delay
  card.style.animationDelay = `${0.2 + index * 0.2}s`;
  
  projectList.appendChild(card);
});

// ===== CV yuklab olish funksiyasi =====
function downloadCV() {
  const cvContent = `
Avazbek Hasanov
Web Developer

Email: example@mail.com
Telefon: +99890XXXXXXX

Skills:
- HTML & CSS
- JavaScript
- React
- Figma
- Responsive Design
`;

  const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Avazbek_Hasanov_CV.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// ===== Smooth Scroll for navigation =====
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
