const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const nunjucks = require('gulp-nunjucks');
const { watch, series } = require('gulp');


// Copy assets after build
async function copyAssets() {
    gulp.src(['src/assets/**/*'])
        .pipe(gulp.dest("dist/assets/"));
}

async function copyScripts() {
    gulp.src(['src/scripts/**/*'])
        .pipe(gulp.dest("dist/scripts/"));
}

async function compileSass() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

async function njk() {
    return gulp.src('src/*.njk')
        .pipe(nunjucks.compile())
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(gulp.dest('dist/'))
};

// Build files html and reload server
async function build() {
    await compileSass();
    await njk();
    await copyAssets();
    await copyScripts()
}


exports.default = async function () {
    build();
    watch(["src/**/*.njk", "src/assets/**/*", "src/sass/**/*.scss", "src/scripts/**/*.js"], series(build));

};
