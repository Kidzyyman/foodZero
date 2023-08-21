export class Animation {
	constructor(idItem, scrollY, speedX, speedY, position) {
		this.idItem = idItem
		this.scroll = scrollY
		this.speedX = speedX
		this.speedY = speedY
		this.position = position

		this.#init()
	}

	#init() {
		this.#addListeners()
		this.#removeListeners(this.scroll)
	}

	#addListeners() {
		window.addEventListener(
			'scroll',
			this.#scrollWindow.bind(this, this.speedX, this.speedY, this.position)
		)
	}
	#removeListeners(scrollY) {
		if (window.scrollY < scrollY) {
			window.removeEventListener('scroll', this.#scrollWindow.bind(this))
		}
	}
	#scrollWindow(speedX = 0, speedY = 0, position = {}) {
		const item = document.getElementById(this.idItem)

		let scrollValue = window.scrollY

		let translateY = -scrollValue * speedY
		let translateX = -scrollValue * speedX

		if (position.length !== 0) {
			const { positionBlock = 'relative', top, bottom, left, right } = position

			item.style.position = positionBlock
			item.style.top = top
			item.style.bottom = bottom
			item.style.left = left
			item.style.right = right
		}
		item.style.transform = `translate(${translateX}px,${translateY}px)`
	}
}
