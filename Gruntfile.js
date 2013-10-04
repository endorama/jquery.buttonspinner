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
        vendor: "vendor/**/*.js"
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
