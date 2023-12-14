import {generateHeadingsIds} from './partials/headings.js'

// Generate IDs for headings
generateHeadingsIds()

// const headerScrolledClass = 'header--blur'

// function handleHeaderClass(header) {
//   header.classList.toggle(headerScrolledClass, window.scrollY > 0)
// }

// // Simple debounce function
// function debounce(func, delay) {
//   let timeoutId
//   return function () {
//     clearTimeout(timeoutId)
//     timeoutId = setTimeout(func, delay)
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   const header = document.getElementById('header')

//   const debouncedScrollHandler = debounce(function () {
//     handleHeaderClass(header)
//   }, 10)

//   window.addEventListener('scroll', debouncedScrollHandler)
// })

const lenis = new Lenis({lerp: 0.075, smooth: true})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
