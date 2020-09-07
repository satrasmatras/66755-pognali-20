const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sync = require('browser-sync').create();
const path = require('path');
const rename = require('gulp-rename');
const del = require('del');

const validator = require('gulp-html');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');

const imagemin = require('gulp-imagemin');
const towebp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');

const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

const uglify = require('gulp-uglify');

const styles = () => {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer
    ]))
    .pipe(csso())
    .pipe(rename('styles.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
};
exports.styles = styles;

const html = () => {
  return gulp.src('source/**/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('build'))
};
exports.html = html;

const js = () => {
  return gulp.src('source/js/*.js')
    .pipe(gulp.dest('build/js'))
};
exports.js = js;

const images = () => {
  return gulp.src('source/img/**/*{jpg,png,jpeg}')
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.svgo()
      ])
    )
    .pipe(gulp.dest('build/img'))
};
exports.images = images;

const webp = () => {
  return gulp.src('source/img/**/*.{png,jpg,jpeg}')
    .pipe(towebp({quality: 90}))
    .pipe(gulp.dest('source/img'))
};
exports.webp = webp;

const sprite = () => {
  return gulp.src('source/img/**/*-icon.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(svgstore({inlineSvg: true, svgAttrs: true}))
    .pipe(cheerio({
      run: function ($) {
        $('style').remove();
        $('path').removeAttr('fill');
        $('symbol').attr('fill', 'currentColor');
      },

      parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'))
};
exports.sprite = sprite;

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};
exports.server = server;

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html', gulp.series(html));
  gulp.watch('source/*.js', js);
  gulp.watch('source/img/**/*.{png,img}', images);
  gulp.watch('source/img/**/*.webp', webp);
  gulp.watch('source/img/**/*.svg', sprite);
};

const copy = () => {
  return gulp.src([
    // 'source//*.html',
    'source/fonts/**/*.{woff, woff2}',
    'source/img/**/*.{png,jpg,jpeg,svg}',
    'source/img/**/*.webp',
    'source/js/**',
    'source//*.ico',
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('build'));
};
exports.copy = copy;

const clean = () => {
  return del('build');
};
exports.clean = clean;

const build = gulp.series(
  clean, copy, gulp.parallel(styles, js, sprite, html)
);
exports.build = build;

const start = gulp.series(
  build, server, watcher
);
exports.start = start;
