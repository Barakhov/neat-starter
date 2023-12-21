import {generateHeadingsIds} from './partials/headings.js'

// Generate IDs for headings
generateHeadingsIds()

gsap.set('.cursor', {force3D: true})
document.addEventListener('mousemove', (e) => {
  let x = e.clientX
  let y = e.clientY

  gsap.to('.cursor', {
    x: x - 12,
    y: y - 12,
    ease: 'slow(0.7,0.7,false)'
  })
})

document.body.addEventListener('mouseleave', () => {
  gsap.to('.cursor', {
    scale: 0,
    duration: 0.1,
    ease: 'none',
    backgroundColor: 'black'
  })
})

document.body.addEventListener('mouseenter', () => {
  gsap.to('.cursor', {
    scale: 1,
    duration: 0.1,
    ease: 'none',
    backgroundColor: 'white'
  })
})

let hoverCursors1 = document.querySelectorAll('[data-cursor="hover-1"]')
let hoverCursors2 = document.querySelectorAll('[data-cursor="hover-2"]')

hoverCursors1.forEach(function (cursor) {
  cursor.addEventListener('mouseenter', () => {
    gsap.to('.cursor', {
      scale: 2
    })
  })

  cursor.addEventListener('mouseleave', () => {
    gsap.to('.cursor', {
      scale: 1
    })
  })
})
hoverCursors2.forEach(function (cursor) {
  cursor.addEventListener('mouseenter', () => {
    gsap.to('.cursor', {
      scale: 1.5,
      backgroundColor: '#ff0000',
      borderRadius: '0%'
    })
  })
  cursor.addEventListener('mouseleave', () => {
    gsap.to('.cursor', {
      scale: 1,
      backgroundColor: 'white',
      borderRadius: '50%'
    })
  })
})

/********/

const lenis = new Lenis({lerp: 0.05, smooth: true})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
