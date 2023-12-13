const htmlTag = document.getElementById('html')

const currentTheme = localStorage.getItem('theme')

if (
  currentTheme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  htmlTag.classList.add('dark')
} else {
  htmlTag.classList.remove('dark')
}

window.addEventListener('DOMContentLoaded', (event) => {
  const btn = document.querySelector('.btn-toggle')
  if (btn) {
    btn.addEventListener('click', function () {
      htmlTag.classList.toggle('dark')

      let theme = 'light'
      if (htmlTag.classList.contains('dark')) {
        theme = 'dark'
      }
      localStorage.setItem('theme', theme)
    })
  }
})
