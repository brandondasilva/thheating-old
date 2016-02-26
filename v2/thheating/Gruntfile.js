module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      scripts: {
        expand: true,
        cwd: 'dev/js',
        src: ['*.js', '!*.min.js'],
        dest: 'public/javascripts',
        ext: '.min.js'
      },
      controllers: {
        expand: true,
        cwd: 'dev/js/controllers',
        src: ['*.js', '!*.min.js'],
        dest: 'public/javascripts/controllers',
        ext: '.min.js'
      },
      directives: {
        expand: true,
        cwd: 'dev/js/directives',
        src: ['*.js', '!*.min.js'],
        dest: 'public/javascripts/models',
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
          dest: 'public/stylesheets',
          ext: '.min.css'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);
};
