export class SectionsHtml {
	constructor(...sections) {
		this.sections = sections
		this.#initSections()
	}
	#initSections() {
		this.sections.forEach(section => {
			const { classNameContainer, sectionHtml } = section
			this.#includeSection(classNameContainer, sectionHtml)
		})
	}
	#includeSection(classNameContainer, sectionHtml) {
		const headerContainer = document.getElementById(classNameContainer)
		const xhr = new XMLHttpRequest()

		xhr.open('GET', `html/${sectionHtml}`, true)
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				headerContainer.innerHTML = xhr.responseText
				const preload = document.querySelector('.preload-page')
				preload.classList.add('active')
				setTimeout(() => {
					preload.classList.remove('active')
					setTimeout(() => {
						preload.style.display = 'none'
					}, 1000)
				}, 2000)
			}
		}
		xhr.send()
	}
}
