const modules = import.meta.glob(['./js/**/*.js', '!./js/main.js'], {
  eager: true,
});
