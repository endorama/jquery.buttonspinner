module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>-<%= pkg.version %>.min.js'
      }
    },
    jasmine: {
      src: "src/**/*.js",
      options: {
        specs: "spec/**/*_spec.js",
        vendor: [
          "vendor/jquery/jquery-1.10.2.min.js",
          "vendor/spin.min.js",
          "vendor/jquery.spin.js",
          "vendor/jasmine-jquery.1.5.91.js"
        ],
        keepRunner: true
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s).
  // grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('default', ['test']);

};
