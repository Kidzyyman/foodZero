export class ModalReservationWindow {
	constructor() {
		this.reservationButton = document.getElementById('reservation-link')
		this.modalReservation = document.getElementById('modal-reservation')
		this.#clickButton()
		this.#clickNotModal()
	}
	#clickButton() {
		this.reservationButton.addEventListener('click', () => {
			this.modalReservation.classList.add('active')
		})
	}

	#clickNotModal() {
		document.addEventListener('click', event => {
			if (!this.modalReservation.contains(event.target)) {
				this.modalReservation.classList.remove('active')
			}
			if (this.reservationButton.contains(event.target)) {
				this.modalReservation.classList.add('active')
			}
		})
	}
}
