var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    path = require('path'),
    wrap = require('gulp-wrap'),
    concat = require('gulp-concat'),
    handlebars = require('gulp-handlebars'),
    browserSync = require('browser-sync').create();


var tasks = ['js', 'sass', 'html', 'partials'];


/**********************************************************************
 *                      Gulp Tasks
 **********************************************************************/

gulp.task('js', function() {
    gulp.src(['source/js/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.stream());
});


gulp.task('sass', function() {
    gulp.src('source/sass/*.scss')
        .pipe(sass({outputStyle : "expanded"}).on('error', sass.logError))
        .pipe(sourcemaps.init()).pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

gulp.task('html', function() {
    gulp.src('source/**/*.html')
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
});

gulp.task('partials', function() {
    // Assume all partials start with an underscore
    // You could also put them in a folder such as source/templates/partials/*.hbs
    gulp.src(['source/templates/_*.hbs'])
        .pipe(handlebars({
            handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
            imports: {
                processPartialName: function(fileName) {
                    // Strip the extension and the underscore
                    // Escape the output with JSON.stringify
                    return JSON.stringify(path.basename(fileName, '.js').substr(1));
                }
            }
        }))
        .pipe(concat('partials.js'))
        .pipe(gulp.dest('source/js/'));
});

gulp.task('serve', tasks, function() {
    browserSync.init({
        server : 'build'
    });

    gulp.watch('source/js/*.js', ['js']);
    gulp.watch('source/**/*.html', ['html']);
    gulp.watch('source/**/*.hbs', ['partials']);
    gulp.watch('source/sass/**/*.scss', ['sass']);

});

/**********************************************************************
 *                      Gulp Default Task
 **********************************************************************/

gulp.task('default', ['serve']);