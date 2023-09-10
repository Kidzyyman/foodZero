import browserSync from 'browser-sync'
import gulp from 'gulp'
import nodemon from 'gulp-nodemon'

gulp.task('start-node-server', (done) => {
  nodemon({
    script: 'server/server.js',
    ext: 'js',
    env: {
      NODE_ENV: 'development',
    },
    done,
  })
})

gulp.task(
  'serve',
  gulp.series('start-node-server', () => {
    browserSync.init({
      proxy: 'http://localhost:5000',
      notify: false,
      port: 3000,
      open: true,
    })

    gulp.watch('src/html/**/*.html').on('change', browserSync.reload)
    gulp.watch('src/styles/**/*.css').on('change', browserSync.reload)
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload)
  }),
)

// Задача по умолчанию
gulp.task('default', gulp.series('serve'))
