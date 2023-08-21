import { Animation } from '../animation.js'
import { SectionsHtml } from '../sectionsHtml.js'

export class AsyncLoad {
	constructor() {
		this.#initAnimationsForCore()
		this.#initSectionsHtmlForCore()
	}
	#initAnimationsForCore = () => {
		const heroAnimations = {
			init() {
				new Animation('hero-main-img_1', 400, 0, 0.3)
				new Animation('hero-main-description', 400, -0.1, -0.15)
				new Animation('hero-left-side__subtitle', 400, -0.15, -0.15)

				new Animation('hero-main-img_2', 400, 0, -0.13)
				new Animation('hero-main-img_3', 400, 0, -0.13)

				new Animation('hero-main-description-1', 100, 0, -0.15)
				new Animation('hero-main-description-2', 100, 0, -0.15)
				new Animation('our-menu-margin-title', 100, -0.1, -0.13, {
					positionBlock: 'relative',
					top: '-300px',
					left: '-260px',
				})
				new Animation('our-menu_margin-top', 100, -0.08, -0.13, {
					positionBlock: 'relative',
					top: '-300px',
					left: '-190px',
				})
				new Animation('our-menu-block-right-one__img', 100, 0.11, -0.13, {
					positionBlock: 'absolute',
					top: '-350px',
					right: '-300px',
				})
				new Animation('excellent-main-img', 0, 0.05, -0.008, {
					positionBlock: 'relative',
					top: '-20px',
					right: '-200px',
				})
				new Animation('excellent-leaf-left', 100, 0.07, -0.08, {
					positionBlock: 'absolute',
					top: '-180px',
					left: '380px',
				})
				new Animation('excellent-leaf-right', 100, 0, 0.09, {
					positionBlock: 'relative',
					top: '450px',
					right: '-150px',
				})
			},
		}

		heroAnimations.init()
	}
	#initSectionsHtmlForCore = () => {
		new SectionsHtml(
			{
				classNameContainer: 'preloader-page',
				sectionHtml: 'preloadPage.html',
			},
			{
				classNameContainer: 'header-container',
				sectionHtml: 'header.html',
			},
			{
				classNameContainer: 'hero-container',
				sectionHtml: 'hero.html',
			},
			{
				classNameContainer: 'modal-reservation-container',
				sectionHtml: '../../html/ui/reservation-form.html',
			},
			{
				classNameContainer: 'our-menu-container',
				sectionHtml: 'ourMenu.html',
			},
			{
				classNameContainer: 'excellent-cook-container',
				sectionHtml: 'excellentCook.html',
			}
		)
	}
}
