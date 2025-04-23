// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle")
const navLinks = document.querySelector(".nav-links")

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active")
})

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    navLinks.classList.remove("active")

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Form Submission
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()
    alert("Thank you for your message! This is a demo form.")
    this.reset()
  })
}

// Sticky Navigation on Scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav")
  if (window.scrollY > 50) {
    nav.style.padding = "10px 0"
  } else {
    nav.style.padding = "15px 0"
  }
})
