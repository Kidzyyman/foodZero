export class ModalReservationWindow {
	constructor() {
		this.reservationButton = document.getElementById('reservation-link')
		this.modalReservation = document.getElementById('modal-reservation')
		this.successfullyMessage = document.getElementById(
			'reservation-successfully'
		)
		this.errorMessage = document.getElementById('reservation-error')
		this.form = document.getElementById('reservation-form')

		this.#bindEventListeners()
	}

	#bindEventListeners() {
		this.reservationButton.addEventListener(
			'click',
			this.#handleReservationButtonClick
		)
		document.addEventListener('click', this.#handleDocumentClick)
		this.form.addEventListener('submit', this.#handleFormSubmit)
	}

	#handleReservationButtonClick = () => {
		this.modalReservation.classList.add('active')
	}

	#handleDocumentClick = event => {
		if (!this.modalReservation.contains(event.target)) {
			this.modalReservation.classList.remove('active')
		}
		if (this.reservationButton.contains(event.target)) {
			this.modalReservation.classList.add('active')
		}
	}

	#handleFormSubmit = async e => {
		e.preventDefault()

		const form = e.target
		const formData = new FormData(form)
		const encodedFormData = new URLSearchParams(formData).toString()

		try {
			const response = await fetch('/send-email', {
				method: 'POST',
				body: encodedFormData,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			})

			form.reset()

			if (response.ok) {
				this.#showMessage(this.successfullyMessage)
				console.log('Email sent successfully')
			} else {
				this.#showMessage(this.errorMessage)
				console.error('Email sending failed')
			}
		} catch (error) {
			console.error('An error occurred:', error)
		}
	}

	#showMessage(messageElement) {
		setTimeout(() => {
			messageElement.classList.add('active')
		}, 300)
		setTimeout(() => {
			messageElement.classList.remove('active')
		}, 3000)
	}
}
