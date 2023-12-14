export function generateHeadingsIds() {
  document.addEventListener('DOMContentLoaded', function () {
    const articleContent = document.getElementById('article-content')

    if (articleContent) {
      const headings = articleContent.querySelectorAll('h2, h3')
      const usedIds = new Set()
      const linkList = document.createElement('ul')
      const asideNav = document.getElementById('aside-nav')

      let currentList = linkList

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

        if (heading.tagName === 'H2') {
          currentList = linkList
          currentList.appendChild(linkListItem)
        } else if (heading.tagName === 'H3') {
          const nestedList = document.createElement('ul')
          nestedList.appendChild(linkListItem)
          currentList.lastChild.appendChild(nestedList)
          currentList = nestedList
        }
      })

      asideNav.appendChild(linkList)
    }
  })
}
