module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'dist/css/app.min.css': 'src/css/scss/main.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('pixrem')(), // fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dist/css/app.min.css'
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/app.min.js': [
            'src/js/modal.js',
            'src/js/scroll.js'
          ]
        }
      }
    },
    browserSync: {
      dev: {
          bsFiles: {
              src: [
                '*.php',
                '**/*.php',
                'dist/css/app.min.css',
                'dist/js/app.min.js'
              ]
          },
          options: {
              watchTask: true,
              proxy: 'cuga-moylan.dev'
          }
      }
    },
    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },
      css: {
        files: [
          'src/css/scss/*.scss',
          'src/css/scss/**/*.scss'
        ],
        tasks: [
          'sass',
          'postcss'
        ]
      },
      js: {
        files: [
          'src/js/*.js'
        ],
        tasks: [
          'uglify'
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['browserSync', 'watch']);
}
