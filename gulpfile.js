import browserSync from 'browser-sync'
import gulp from 'gulp'
import nodemon from 'gulp-nodemon' // Добавили этот импорт

// Задача для запуска сервера Node.js с использованием nodemon
gulp.task('start-server', cb => {
	let started = false

	return nodemon({
		script: 'server/server.js', // Путь к файлу сервера
		watch: 'server',
		env: {
			PORT: 5000,
		}, // Папка, которую следует наблюдать за изменениями
	}).on('start', () => {
		if (!started) {
			cb()
			started = true
		}
	})
})

// Задача для запуска BrowserSync
gulp.task(
	'serve',
	gulp.series('start-server', () => {
		browserSync.init({
			proxy: 'http://localhost:5000', // Измените на другой свободный порт
			notify: false,
			port: 3000,
		})

		gulp.watch('src/html/**/*.html').on('change', browserSync.reload)
		gulp.watch('src/styles/**/*.css').on('change', browserSync.reload)
		gulp.watch('src/js/**/*.js').on('change', browserSync.reload)
	})
)

// Задача по умолчанию
gulp.task('default', gulp.series('serve'))
