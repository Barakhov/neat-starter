// Target an HTML element with a specific ID
const htmlTag = document.getElementById('html')

const btn = document.querySelector('.btn-toggle')

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

btn.addEventListener('click', function () {
  htmlTag.classList.toggle('dark')

  let theme = 'light'
  if (htmlTag.classList.contains('dark')) {
    theme = 'dark'
  }
  localStorage.setItem('theme', theme)
})

// Headings to IDs

document.addEventListener('DOMContentLoaded', function () {
  const articleContent = document.getElementById('article-content')

  if (articleContent) {
    const headings = articleContent.querySelectorAll('h2, h3')
    const usedIds = new Set()
    const linkList = document.createElement('ul')
    const asideNav = document.getElementById('aside-nav')

    let currentList = linkList // Keep track of the current list to handle nesting

    headings.forEach(function (heading) {
      const headingText = heading.textContent
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase()
      let uniqueId = headingText
      let counter = 1

      while (usedIds.has(uniqueId)) {
        uniqueId = headingText + '-' + counter++
      }

      heading.id = uniqueId
      usedIds.add(uniqueId)

      const linkListItem = document.createElement('li')
      const headingLink = document.createElement('a')
      headingLink.classList.add('aside-nav-item')

      headingLink.textContent = heading.textContent.trim()
      headingLink.href = '#' + heading.id

      linkListItem.appendChild(headingLink)

      // Check the level of the heading
      if (heading.tagName === 'H2') {
        // If it's H2, close any existing nested list
        currentList = linkList
        currentList.appendChild(linkListItem)
      } else if (heading.tagName === 'H3') {
        // If it's H3, create a nested ul
        const nestedList = document.createElement('ul')
        nestedList.appendChild(linkListItem)
        currentList.lastChild.appendChild(nestedList)
        currentList = nestedList // Update currentList for further nesting
      }
    })

    asideNav.appendChild(linkList)
  }
})
