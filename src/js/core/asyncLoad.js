import { Animation } from '../animation.js'
import { SectionsHtml } from '../sectionsHtml.js'

export class AsyncLoad {
	constructor() {
		this.initAnimationsForCore()
		this.initSectionsHtmlForCore()
	}
	initAnimationsForCore = () => {
		const heroAnimations = {
			init() {
				new Animation('hero-main-img_1', 400, 0, 0.3)
				new Animation('hero-main-description', 400, -0.1, -0.15)
				new Animation('hero-left-side__subtitle', 400, -0.15, -0.15)

				new Animation('hero-main-img_2', 400, 0, -0.13)
				new Animation('hero-main-img_3', 400, 0, -0.13)

				new Animation('hero-main-description-1', 100, 0, -0.15)
				new Animation('hero-main-description-2', 100, 0, -0.15)
			},
		}
		heroAnimations.init()
	}
	initSectionsHtmlForCore = () => {
		new SectionsHtml(
			{
				classNameContainer: 'header-container',
				sectionHtml: 'header.html',
			},
			{
				classNameContainer: 'hero-container',
				sectionHtml: 'hero.html',
			}
		)
	}
}
