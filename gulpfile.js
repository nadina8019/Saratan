const gulp = require ("gulp");
const sass = require ("gulp-sass");

gulp.task("sass", function() {
    return gulp
    .src("./scss/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
});

gulp.task("sass:watch", function() {
    return gulp.watch("./scss/**/*.scss", gulp.parallel("sass"));
})

