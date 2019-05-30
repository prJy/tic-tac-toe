const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const rename = require('gulp-rename');

async function styles(){
    return gulp.src('./src/css/app.css')     
    .pipe(csso())      
    .pipe(gulp.dest('./dist/css'));
}
gulp.task(styles);

async function scripts() {
    return gulp.src('./src/js/**/*.js')          
    .pipe(concat('app.js')) 
    .pipe(
        minify({
            ext:{
                src:'',
                min:'.min.js'
            },
            noSource: true
        })
    )   
    .pipe(gulp.dest('./dist/js'));
}
gulp.task(scripts);

async function html(){
    return gulp.src(['./src/index.dist.html'])
    .pipe(htmlmin({
      collapseWhitespace: false,
      removeComments: true
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'));
}
gulp.task(html);

async function clear(){
   await del(['dist']);
}
gulp.task(clear);

gulp.task('build', gulp.series(clear, styles, scripts, html));