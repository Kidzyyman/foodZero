export class SectionsHtml {
  constructor() {
    this.sections = []
  }

  async addSection(classNameContainer, sectionHtml) {
    try {
      const headerContainer = document.getElementById(classNameContainer)

      if (!headerContainer) {
        console.error(`Элемент с классом "${classNameContainer}" не найден.`)
        return
      }

      const html = await this.loadHtml(sectionHtml)
      if (html) {
        this.displayHtml(headerContainer, html)
        this.hidePreloader()
      } else {
        console.error(`Ошибка при загрузке секции "${sectionHtml}"`)
      }
    } catch (error) {
      console.error('Произошла ошибка:', error)
    }
  }

  async loadHtml(sectionHtml) {
    try {
      const response = await fetch(`html/${sectionHtml}`)

      if (response.status === 200) {
        return await response.text()
      } else {
        console.error(`Ошибка при загрузке: статус ${response.status}`)
        return null
      }
    } catch (error) {
      console.error('Произошла ошибка при загрузке HTML:', error)
      return null
    }
  }

  displayHtml(container, html) {
    container.innerHTML = html
  }

  hidePreloader() {
    const preload = document.querySelector('.preload-page')
    if (preload) {
      preload.classList.add('active')
      setTimeout(() => {
        preload.classList.remove('active')
        setTimeout(() => {
          preload.style.display = 'none'
        }, 1000)
      }, 2000)
    }
  }
}
