const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require('gulp-csso');
const path = require("path");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");
const cheerio = require("gulp-cheerio");
const svgmin = require("gulp-svgmin");
const replace = require("gulp-replace");
// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer
    ]))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
}

exports.styles = styles;

const html = () => {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("build"))
}

exports.styles = styles;

// Images

const images = () => {
  return gulp.src("source/img/**/*.{jpg, png, jpeg}")
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
      ])
    )
    .pipe(gulp.dest("build/img"))
};

exports.images = images;

const towebp = () => {
  return gulp.src("source/img/**/*.{png, jpg, jpeg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
};

// TODO: в билд не попадают вебпишки от jpg

exports.towebp = towebp;

const prepareSvg = () => {
  return gulp.src("source/img/**/*.svg")
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(gulp.dest("build/img"))
}

// TODO: Некоторые свг даже с currentColor не меняют цвет

const sprite = () => {
  return gulp.src("source/img/**/*.svg")
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(svgstore({inlineSvg: true, svgAttrs: true}))
    .pipe(cheerio({
      run: function ($) {
        $('symbol').attr('fill', 'currentColor');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
}

exports.sprite = sprite;

const svg = gulp.series(
  prepareSvg, sprite
);

exports.svg = svg;

// Server

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
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles, sync.reload));
  gulp.watch("source/*.html").on("change", gulp.series(html, sync.reload));
}

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff, woff2}",
    // "source/img/**/*.{png, jpg, jpeg, svg}",
    "source/js/**",
    "source//*.ico",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
};

exports.copy = copy;

const clean = () => {
  return del("build");
};

exports.clean = clean;

const build = gulp.series(
  clean, copy, styles, images, towebp, svg, html
);

exports.build = build;

const start = gulp.series(
  build, server, watcher
);

exports.start = start;

exports.default = gulp.series(
  styles, server, watcher
);


