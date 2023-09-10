class ColorManager {
	constructor(images) {
		this.images = images
		this.currentColorIndex = 0
		this.colorChangeInterval = null
		this.handleScroll = this.handleScroll.bind(this)
	}

	init() {
		this.initScroll()
		this.startColorChange()
	}

	initScroll() {
		window.addEventListener('scroll', this.handleScroll)
	}

	changeColor() {
		const previousIndex =
			(this.currentColorIndex - 1 + this.images.length) % this.images.length
		this.images[previousIndex].style.fill = 'black'
		this.images[this.currentColorIndex].style.fill = this.getRandomColorByIndex(
			this.currentColorIndex
		)
		this.currentColorIndex = (this.currentColorIndex + 1) % this.images.length
	}

	getRandomColorByIndex(index) {
		const colors = [
			// Голубые оттенки
			['#0099CC', '#0066CC', '#0033CC', '#66CCFF', '#3399FF'],

			// Оранжевые оттенки
			['#FF9900', '#FF6600', '#FF3300', '#FFCC00', '#FF6600'],

			// Желтые оттенки
			['#FFFF00', '#FFCC00', '#FF9900', '#FFCC33', '#FFCC66'],
		]

		if (index >= 0 && index < colors.length) {
			const colorShades = colors[index]
			const randomIndex = Math.floor(Math.random() * colorShades.length)
			return colorShades[randomIndex]
		} else {
			return this.getRandomColor()
		}
	}

	startColorChange() {
		const scrollHeight = window.scrollY

		if (scrollHeight > 4450 && scrollHeight < 5500) {
			if (!this.colorChangeInterval) {
				this.changeColor()
				this.colorChangeInterval = setInterval(
					this.changeColor.bind(this),
					3000
				)
			}
		} else {
			clearInterval(this.colorChangeInterval)
			this.colorChangeInterval = null
		}
	}
	getRandomColor() {
		const letters = '0123456789ABCDEF'
		let color = '#'
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)]
		}
		return color
	}

	handleScroll() {
		this.startColorChange()
	}
}

export class PostExcellentCook {
	constructor() {
		const images = document.querySelectorAll(
			'.post-excellentCook-item__icon path'
		)
		this.colorManager = new ColorManager(images)
	}

	initScroll() {
		this.colorManager.init()
	}
}
