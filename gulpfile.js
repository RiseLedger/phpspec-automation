var gulp = require('gulp');
var phpspec = require('gulp-phpspec');
var notify = require('gulp-notify');

gulp.task('phpspec', function() {
    gulp.src('spec/**')
        .pipe(phpspec('', { clear: true, notify: true }))
        .on('error', notify.onError({
            title: 'Fail',
            message: 'Some Tests Failed'
        }))
        .pipe(notify({
            title: 'Success',
            message: 'All Tests Passed'
        }));
});

gulp.task('watch', function () {
    gulp.watch(['spec/**', 'src/**'], ['phpspec']);
});

gulp.task('default', ['phpspec', 'watch']);