module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      scripts: {
        expand: true,
        cwd: 'dev/js',
        src: ['*.js', '!*.min.js'],
        dest: '_assets-custom/js',
        ext: '.min.js'
      },
      controllers: {
        expand: true,
        cwd: 'dev/js/controllers',
        src: ['*.js', '!*.min.js'],
        dest: '_assets-custom/js/controllers',
        ext: '.min.js'
      },
      directives: {
        expand: true,
        cwd: 'dev/js/directives',
        src: ['*.js', '!*.min.js'],
        dest: '_assets-custom/js/models',
        ext: '.min.js'
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dev/sass',
          src: ['*.scss'],
          dest: 'dev/css',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dev/css',
          src: ['*.css', '!*.min.css'],
          dest: '_assets-custom/css',
          ext: '.min.css'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);
};
