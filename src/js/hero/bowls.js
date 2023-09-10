export class BowlsHero {
	constructor() {
		this.heroSpiceBlocks = document.querySelectorAll(
			'.hero-right-side-bowls__bowl'
		)

		this.#heroSpiceBowls(this.heroSpiceBlocks)
	}

	#heroSpiceBowls(blocks) {
		blocks.forEach(block => {
			this.#addMouseEnterListener(block, 'mouseenter')
			this.#addMouseLeaveListener(block, 'mouseleave')
		})
	}

	#addMouseEnterListener(block, eventType) {
		block.addEventListener(eventType, () =>
			this.#handleMouseAction(block, eventType)
		)
	}

	#addMouseLeaveListener(block, eventType) {
		block.addEventListener(eventType, () =>
			this.#handleMouseAction(block, eventType)
		)
	}

	#mouseActionType(listenerType, spiceBlock) {
		if (listenerType === 'mouseleave') {
			return spiceBlock.classList.remove('spice-block')
		} else if (listenerType === 'mouseenter') {
			return spiceBlock.classList.add('spice-block')
		}
	}
	#handleMouseAction(block, eventType) {
		const parentHeroSpice = block.closest('.hero-spice')
		if (parentHeroSpice) {
			const spiceBlock = parentHeroSpice.querySelector('.hero-spice-block')
			this.#mouseActionType(eventType, spiceBlock)
		}
	}
}
