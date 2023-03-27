const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

function njk() {
    return gulp.src('src/*.njk')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('dist'))
};

function watch() {
    gulp.watch('src/**/*.njk', njk);
}

exports.default = gulp.series(njk, watch);
