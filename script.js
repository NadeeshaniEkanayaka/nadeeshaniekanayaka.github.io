// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // resume.js

function downloadResume() {
  // ✅ Option 1: if you rename the file without spaces
  const fileUrl = "files/Nadeeshani_Ekanayaka.pdf"; 

  // ❌ If you keep the space, then use:
  // const fileUrl = "files/NADEESHANI%20EKANYAKA.PDF"; 

  const fileName = "NADEESHANI EKANAYAKA CV.pdf"; // name for download

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}