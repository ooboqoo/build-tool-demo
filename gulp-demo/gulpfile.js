const gulp = require('gulp')

const myPlugin = require('./myplugin')

gulp.task('default', function () {
  gulp.src('src/**/*.js')
    .pipe(myPlugin())
    .pipe(gulp.dest('dist'))
})
