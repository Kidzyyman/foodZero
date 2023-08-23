export function hero() {
	const heroSpiceBlocks = document.querySelectorAll(
		'.hero-right-side-bowls__bowl'
	)

	heroSpiceBlocks.forEach(block => {
		block.addEventListener('mouseenter', () => {
			const parentHeroSpice = block.closest('.hero-spice')
			if (parentHeroSpice) {
				const spiceBlock = parentHeroSpice.querySelector('.hero-spice-block')
				spiceBlock.classList.add('spice-block')
			}
		})

		block.addEventListener('mouseleave', () => {
			const parentHeroSpice = block.closest('.hero-spice')
			if (parentHeroSpice) {
				const spiceBlock = parentHeroSpice.querySelector('.hero-spice-block')
				spiceBlock.classList.remove('spice-block')
			}
		})
	})
	
}
