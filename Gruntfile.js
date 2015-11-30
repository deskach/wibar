module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    processhtml: {
      options: {
        data: {
          message: 'Hello world!'
        }
      },
      dist: {
        files: {
          '../Web/index.html': ['index.html']
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['bootstrap/*'], dest: '../Web/bootstrap/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['css/*'], dest: '../Web/css/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['js/*'], dest: '../Web/js/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['media/*'], dest: '../Web/media/',
            filter: 'isFile'
          },
        ],
      },
    },

    react: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: 'jsx',
            src: ['**/*.jsx'],
            dest: 'js',
            ext: '.js'
          }
        ]
      }
    },

    //browserify:     {
    //  options:      {
    //    transform:  [ require('grunt-react').browserify ]
    //  },
    //  app:          {
    //    src:        'js/script.js',
    //    dest:       'js/wibar.js'
    //  }
    //}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-react');
  //grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['react']);
  grunt.registerTask('build', ['react', 'processhtml', 'copy']);
};
