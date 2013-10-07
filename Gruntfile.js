module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: "/**\n" +
        " * <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " * <%= pkg.description %>\n" +
        " * <%= pkg.homepage %>\n" +
        " *\n" +
        " * Made by <%= pkg.author.name %> (<%= pkg.author.url %>)\n" +
        " * (c) <%= grunt.template.today('yyyy') %> - <%= pkg.author.name %>\n" +
        " * Under <%= pkg.licenses[0].type %> License\n" +
        " */\n"
    },
    uglify: {
      options: {
        banner: "<%= meta.banner %>"
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
    },
    jshint: {
      // define the files to lint
      files: ['gruntfile.js', 'src/**/*.js', 'spec/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s).
  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('clean', 'jshint');
  grunt.registerTask('build', ['test', 'uglify'])
  grunt.registerTask('default', ['test']);


};
