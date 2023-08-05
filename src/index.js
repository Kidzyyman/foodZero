import { AsyncLoad } from './js/core/asyncLoad.js'
import { ModalReservationWindow } from './js/ui/modalReservation.js'
;(function (window) {
	window.onload = init

	new AsyncLoad()

	function init() {
		new ModalReservationWindow()
	}
})(window, document, undefined)
