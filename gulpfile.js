var gulp    = require('gulp');
var concat  = require('gulp-concat');
var clean   = require('gulp-clean');
var uglify  = require('gulp-uglify');
var sass    = require('gulp-sass');

var paths = {
    vendorJs: [
        './app/Resources/front_end/vendors/jquery/dist/jquery.min.js',
        './app/Resources/front_end/vendors/bootstrap/dist/js/bootstrap.min.js'
    ],
    vendorCss: [
        './app/Resources/front_end/vendors/bootstrap/dist/css/bootstrap.min.css'
    ],
    fonts: [
        './app/Resources/front_end/vendors/bootstrap/dist/fonts/*',
        './app/Resources/front_end/dev/sass/fonts/*'
    ],
    js: [
        './app/Resources/front_end/dev/js/*.js'
    ],
    sass: [
        './app/Resources/front_end/dev/sass/**/*.sass',
        './app/Resources/front_end/dev/sass/*.sass'
    ],
    images: [
        './app/Resources/front_end/dev/sass/img/*',
        './app/Resources/front_end/dev/sass/img/**/*'
    ],
    dist: {
        js:         './web/assets/js',
        css:        './web/assets/css',
        fonts:      './web/assets/fonts',
        assets:     './web/assets',
        images:     './web/assets/img'
    }
};

gulp.task('default', ['vendors', 'src'], function(){

});

gulp.task('vendor-js', function(){
    return gulp.src(paths.vendorJs)
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(paths.dist.js))
});

gulp.task('vendor-css', function(){
    return gulp.src(paths.vendorCss)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(paths.dist.css))
});

gulp.task('fonts', function(){
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(paths.dist.fonts))
});

gulp.task('vendors', ['vendor-js', 'vendor-css', 'fonts'], function(){

});

gulp.task('js', function(){
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.dist.js))
});

gulp.task('sass', function(){
    return gulp.src(paths.sass)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(paths.dist.css))
});


gulp.task('images', function(){
    return gulp.src(paths.images)
        .pipe(gulp.dest(paths.dist.images))
});

gulp.task('src', ['js', 'sass', 'images'], function(){

});

gulp.task('watch', function(){
    gulp.watch([paths.sass], ['sass']);
    gulp.watch([paths.js], ['js']);
});

gulp.task('clean', function(){
    return gulp.src([paths.dist.assets], {read: false}).pipe(clean());
});