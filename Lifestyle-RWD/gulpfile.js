var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('styles', function(){
    return gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
});


//watch task
// gulp.task('default', function(){
//     gulp.watch('sass/**/*.scss', ['styles']);
// })