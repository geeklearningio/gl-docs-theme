var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('zip', function () {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**', 
        '!scss', '!scss/**', 
        '!gulpfile.js', '!package.json', '!yarn.lock', '!yarn-error.log'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
});