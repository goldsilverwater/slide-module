/**
 * Created by zach on 2016. 7. 1..
 */
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');


gulp.task('sync', function(){
	browserSync.init({
		server:'./src'
	});

	gulp.watch('./src/css/**/*.scss', ['css']);
	browserSync.watch('./src').on('all', browserSync.reload);
});

gulp.task('css', function(){
	return gulp.src('./src/css/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/css'));
});

gulp.task('default', ['css', 'sync'], function(){

});