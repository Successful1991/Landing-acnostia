var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var spritesmith = require('gulp.spritesmith');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');


//--server--//
gulp.task('server', function() {
	gulp.src('')
		.pipe(server({
			livereload: true,
			open: true
		}));
});

//--compiler--//
gulp.task('sass', function () {

	return gulp.src('app/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
			browsers:['last 6 versions']
		}))
		.pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
	gulp.watch('app/sass/*.scss', ['sass']);
});

gulp.task('default', ['server','watch']);


gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}});
});
//----sprite----//

gulp.task('sprite', function () {
    var spriteData = gulp.src('app/img/sprite/*.png').pipe(spritesmith({
        imgName: '../img/sprite.png',
        cssName: 'sprite.css',
		padding: 20
    }));
    spriteData.img.pipe(gulp.dest('build/img/'));
    spriteData.css.pipe(gulp.dest('app/css/'));
});

//---css min----//
gulp.task('minify', function () {
    gulp.src('app/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build'));
});

//---js min---//
gulp.task('compress', function (cb) {
    pump([
            gulp.src('app/**/*.js'),
            uglify(),
            rename({suffix: '.min'}),
            gulp.dest('build')
        ],
        cb
    );
});
gulp.task('minificator', ['minify','compress']);


//------copy--app-in-build------//
gulp.task('copy:img',function () {
	return gulp.src('./app/img/**.*')
		.pipe(gulp.dest('build/img'))
});
gulp.task('copy:font',function () {
    return gulp.src('./app/img/**.*')
        .pipe(gulp.dest('build/font'))
});
gulp.task('copy:html',function () {
    return gulp.src('./app/**.html')
        .pipe(gulp.dest('build'))
});

gulp.task('copy-all',['copy:img','copy:font','copy:html'] );