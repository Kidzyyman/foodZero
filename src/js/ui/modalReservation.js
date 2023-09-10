class Modal {
	constructor(element) {
		this.element = element
	}

	show() {
		this.element.classList.add('active')
	}

	hide() {
		this.element.classList.remove('active')
	}

	contains(element) {
		return this.element.contains(element)
	}
}

class FormSubmitter {
	async submitForm(form) {
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

			return response.ok
		} catch (error) {
			console.error('An error occurred:', error)
			return false
		}
	}
}

export class ModalReservationWindow {
	constructor() {
		this.reservationButton = document.getElementById('reservation-link')
		this.modalReservation = new Modal(
			document.getElementById('modal-reservation')
		)
		this.successfullyMessage = document.getElementById(
			'reservation-successfully'
		)
		this.errorMessage = document.getElementById('reservation-error')
		this.form = document.getElementById('reservation-form')
		this.formSubmitter = new FormSubmitter()

		this.bindEventListeners()
	}

	bindEventListeners() {
		this.reservationButton.addEventListener(
			'click',
			this.handleReservationButtonClick.bind(this)
		)
		document.addEventListener('click', this.handleDocumentClick.bind(this))
		this.form.addEventListener('submit', this.handleFormSubmit.bind(this))
	}

	handleReservationButtonClick() {
		this.modalReservation.show()
	}

	handleDocumentClick(event) {
		if (!this.modalReservation.contains(event.target)) {
			this.modalReservation.hide()
		}
		if (this.reservationButton.contains(event.target)) {
			this.modalReservation.show()
		}
	}

	async handleFormSubmit(e) {
		e.preventDefault()
		const isSuccess = await this.formSubmitter.submitForm(this.form)

		if (isSuccess) {
			this.showMessage(this.successfullyMessage, 'Email sent successfully')
		} else {
			this.showMessage(this.errorMessage, 'Email sending failed', true)
		}
	}

	showMessage(messageElement, message, isError = false) {
		messageElement.textContent = message
		messageElement.classList.add('active')
		setTimeout(() => {
			messageElement.classList.remove('active')
			if (isError) {
				messageElement.textContent = ''
			}
		}, 3000)
	}
}
