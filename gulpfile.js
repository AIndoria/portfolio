let gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer");
nested = require("postcss-nested");

gulp.task("default", function(){
  console.log("running gulp...");
});

gulp.task("styles", function(){
  return gulp.src("./assets/styles/*.css")
  .pipe(postcss([nested, autoprefixer]))
  .pipe(gulp.dest("./assets/styles/final/"));
});

gulp.task("scripts", function(){
  return gulp.src("./assets/scripts/*.js").pipe(gulp.dest("./assets/scripts/*.js"));
});


gulp.task("watch", function(){
  watch("./assets/styles/*.css", function(){
    gulp.start("styles");
    gulp.start("scripts");
  });
});