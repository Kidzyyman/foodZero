export class Animation {
	constructor(idItem, scrollY, speedX, speedY) {
		this.idItem = idItem
		this.scroll = scrollY
		this.speedX = speedX
		this.speedY = speedY

		this.#init()
	}

	#init() {
		this.#addListeners()
		this.#removeListeners(this.scroll)
	}

	#addListeners() {
		window.addEventListener(
			'scroll',
			this.#scrollWindow.bind(this, this.speedX, this.speedY)
		)
	}
	#removeListeners(scrollY) {
		if (window.scrollY < scrollY) {
			window.removeEventListener('scroll', this.#scrollWindow.bind(this))
		}
	}
	#scrollWindow(speedX = 0, speedY = 0) {
		const item = document.getElementById(this.idItem)

		let scrollValue = window.scrollY

		let translateY = -scrollValue * speedY
		let translateX = -scrollValue * speedX

		item.style.transform = `translate(${translateX}px,${translateY}px)`
	}
}
