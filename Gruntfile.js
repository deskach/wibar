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
          '../ghPages/wibar/index.html': ['index.html']
        }
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      dist: {
        files: {
          '../ghPages/wibar/style/style-min.css': [
            'style/style.css'
          ]
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['js/*'], dest: '../ghPages/wibar/js/',
            filter: 'isFile'
          }
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-react');
  //grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['react']);
  grunt.registerTask('build', [
    'react', 'cssmin', 'processhtml', 'copy'
  ]);
};
