import { asyncLoad } from './js/core/asyncLoad.js'
import { BowlsHero } from './js/hero/bowls.js'
import { PostExcellentCook } from './js/postExcellentCook/post-excellentCook.js'
import { ModalReservationWindow } from './js/ui/modalReservation.js'
document.addEventListener('DOMContentLoaded', () => {
	asyncLoad.init()

	setTimeout(() => {
		new ModalReservationWindow()
		new BowlsHero()
		new PostExcellentCook().initScroll()
	}, 1000)
})
