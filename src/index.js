import { AsyncLoad } from './js/core/asyncLoad.js'
import { hero } from './js/hero/bowls.js'
import { ModalReservationWindow } from './js/ui/modalReservation.js'
;(function (window) {
	window.onload = init

	new AsyncLoad()

	function init() {
		new ModalReservationWindow()
		hero()
	}
})(window, document, undefined)
