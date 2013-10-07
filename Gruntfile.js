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
    },
    clean: {
      build: {
        src: [ 'build/**', '!build/.gitkeep' ],
        filter: 'isFile'
      }
    },
    concat: {
      options: {
        banner: "<%= meta.banner %>"
      },
      build: {
        src: [ 'src/*' ],
        dest: 'build/jquery.buttonspinner-<%= pkg.version %>.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('build', ['test', 'clean', 'concat:build', 'uglify'])
  grunt.registerTask('default', ['test']);
};
