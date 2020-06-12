// gulp 호출
var gulp = require("gulp");

// 플러그인 패키지 호출
var sass = require("gulp-sass");
(sourcemaps = require("gulp-sourcemaps")),
  (headerComment = require("gulp-header-comment")),
  (fileinclude = require("gulp-file-include")),
  (autoprefixer = require("gulp-autoprefixer")),
  (imagemin = require("gulp-imagemin")),
  (webp = require("gulp-webp")),
  (uglify = require("gulp-uglify")),
  (rename = require("gulp-rename")),
  (htmlmin = require('gulp-htmlmin')),
  (concat = require("gulp-concat"));
browserSync = require("browser-sync").create();

// 경로 변수
var title = "nanalike";
var PORT = 3330;
var root = "../app";
var src = root + "/src";
var dist = root + "/dist";

var paths = {
  html: src + "/**/*.html",
  scss: src + "/scss/**/*.scss",
  image: src + "/images/**/*",
  js: src + "/js/**/*.js"
};

// 타임스탬프용 날짜 생성
Object.defineProperty(Date.prototype, "YYYYMMDDHHMMSS", {
  value: function () {
    function pad2(n) {
      return (n < 10 ? "0" : "") + n;
    }
    return (
      this.getFullYear() +
      "-" +
      pad2(this.getMonth() + 1) +
      "-" +
      pad2(this.getDate()) +
      " " +
      pad2(this.getHours()) +
      ":" +
      pad2(this.getMinutes()) +
      ":" +
      pad2(this.getSeconds())
    );
  }
});

// SASS 정의
var sassOptions = {
  // outputStyle: "expanded",
  outputStyle: "compressed",
  indentType: "tab"
};
sass.compiler = require("node-sass");

gulp.task("sass", function () {
  var myDate = new Date().YYYYMMDDHHMMSS();

  return (
    gulp
      .src(paths.scss)
      // .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on("error", sass.logError))
      .pipe(
        autoprefixer({
          cascade: false
        })
      )
      .pipe(
        headerComment(`
      -----------------------------------------------
       Last Modified: ${myDate}
       Author: Nana (nykim@nykim.net)
       Description: ${title} CSS
      -----------------------------------------------
    `)
      )
      // .pipe(sourcemaps.write())
      .pipe(gulp.dest(dist + "/css"))
      .pipe(browserSync.stream())
  );
});

// HTML include 정의
gulp.task("fileinclude", function () {
  return gulp
    .src(paths.html)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
        context: {
          required: "",
          error: "",
          login: "",
          status: "",
          btnPage: "",
          type: ""
        }
      })
    )
    .pipe(gulp.dest(dist));
});

// 이미지 압축 정의
gulp.task("imagemin", function () {
  return gulp
    .src(paths.image)
    .pipe(imagemin())
    .pipe(gulp.dest(dist + "/images"));
});

// WebP 압축
gulp.task("webp", function () {
  return gulp
    .src(paths.image)
    .pipe(webp())
    .pipe(gulp.dest(dist + "/images"));
});

// Browser-sync 정의
gulp.task("reload", function () {
  browserSync.reload();
});

gulp.task("browserSync", function () {
  return browserSync.init({
    port: PORT,
    server: {
      baseDir: dist
    }
  });
});


// html 압축
gulp.task('minify:html', function () {
  return gulp
    .src(dist + "/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(dist));
});

// js 파일 난독화
gulp.task("combine:js", function () {
  return gulp
    .src([src + "/js/common.js", src + "/js/scrollAnimation.js"])
    .pipe(concat("ui.js")) //하나로 합치기
    .pipe(gulp.dest(dist + "/js"))
    .pipe(uglify())
    .pipe(rename("ui.min.js"))
    .pipe(gulp.dest(dist + "/js"));
});

gulp.task("watch", function () {
  gulp.watch(
    paths.scss,
    {
      interval: 500
    },
    ["sass"]
  );
  gulp.watch(
    paths.html,
    {
      interval: 100
    },
    ["fileinclude", "reload"]
  );
  gulp.watch(
    dist + "/index.html",
    {
      interval: 500
    },
    ["minify:html"]
  );
  gulp.watch(
    paths.image,
    {
      interval: 800
    },
    ["imagemin"]
  );
  gulp.watch(
    paths.js,
    {
      interval: 800
    },
    ["combine:js"]
  );
});

gulp.task(
  "default",
  ["fileinclude", "minify:html", "imagemin", "sass", "combine:js", "browserSync", "watch"],
  function () {
    console.log(" ~~~ 👩‍🔧 걸프가 열심히 일하고 있습니다 👨‍🔧 ~~~ ");
  }
);
