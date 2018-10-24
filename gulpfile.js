let gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
nested = require("postcss-nested"),
plumber = require("gulp-plumber"),
util = require("gulp-util");

gulp.task("default", function(){
  console.log("Running gulp...");
});

gulp.task("styles", function(){
  return gulp.src("./assets/styles/*.css")
  .pipe(plumber(errorHandler))
  .pipe(postcss([nested, autoprefixer]))
  .pipe(gulp.dest(".assets/styles/final/"));
});

gulp.task("scripts", function(){
  return gulp.src("./assets/scripts/*.js").pipe(gulp.dest("./assets/scripts/final/"));
});

gulp.task("watch", function(){
  watch("./assets/styles/*.css", function(){
    gulp.start("styles");
  });
  watch("./assets/scripts/*.js", function(){
    gulp.start("scripts");
  });
});

function errorHandler(error){
  util.beep()
  util.beep();
  console.log(error);
  return true;
}