
module.exports = function(grunt) {
  // Configuration goes here
  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    jshint: {
      jshintrc: ".jshintrc",
      all: [
        "Gruntfile.js",
        "app/main.js",
        "app/js/**.js"
      ]
    }

  });

  // Load plugins here
  grunt.loadNpmTasks("grunt-contrib");
  grunt.loadNpmTasks("grunt-contrib-jshint");

  // Define your tasks here
  grunt.registerTask("default", ["jshint"]);
};
