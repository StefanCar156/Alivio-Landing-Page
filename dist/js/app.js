const navLists = document.querySelector(".nav__lists")
const menuBtn = document.querySelector(".nav__btn")

menuBtn.addEventListener("click", () => {
  navLists.classList.toggle("nav__lists--active")
  navLists.classList.contains("nav__lists--active")
    ? (menuBtn.querySelector("img").src = "./img/close-icon.png")
    : (menuBtn.querySelector("img").src = "./img/menu-icon.png")

  navLists.classList.contains("nav__lists--active")
    ? menuBtn.classList.add("nav__btn--fixed")
    : menuBtn.classList.remove("nav__btn--fixed")
})

// Testimonials

const testimonialsData = [
  {
    name: "Kayla",
    video: "./img/video-1.mp4",
  },
  {
    name: "Jacob",
    video: "./img/video-2.mp4",
  },
  {
    name: "Bill",
    video: "./img/video-3.mp4",
  },
]

const video = document.querySelector(".testimonials__video")
const videoBtn = document.querySelector(".testimonials__video__btn")
const testimonialsName = document.querySelector(".testimonials__name")
let counter = 1

// Check if video is playing
Object.defineProperty(HTMLMediaElement.prototype, "playing", {
  get: function () {
    return !!(
      this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    )
  },
})

// Play / Pause video

videoBtn.addEventListener("click", () => {
  if (video.playing) {
    videoBtn.querySelector("img").src = "./img/play-btn.png"
    video.pause()
  } else {
    videoBtn.querySelector("img").src = "./img/pause-btn.png"
    video.play()
  }
})

video.addEventListener("ended", () => {
  videoBtn.querySelector("img").src = "./img/play-btn.png"
})

// Change testimonial data

const changeTestimonial = () => {
  if (!video.playing) {
    counter > 2 ? (counter = 0) : counter
    video.src = testimonialsData[counter].video
    testimonialsName.textContent = testimonialsData[counter].name
    counter++
  }
}

setInterval(() => {
  changeTestimonial()
}, 15000)
