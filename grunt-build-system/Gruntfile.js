
module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    lint: {
      files: [
        "Gruntfile.js",
        "app/js/**.js"
      ]
    },

    jshint: {
      options: {
        // enforcing options
        curly: true,
        eqeqeq: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        quotmark: "double",
        sub: true,
        undef: true,
        // relaxing options
        boss: true,
        eqnull: true,
        es5: true,
        // environment
        browser: true,
        jquery: true
      },
      all: [
        "Gruntfile.js",
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
