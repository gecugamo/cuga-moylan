module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    penthouse: {
        extract : {
            outfile : 'dist/css/crit.css',
            css : 'dist/css/app.min.css',
            url : 'http://localhost:3000',
            width : 1300,
            height : 900,
            skipErrors : false // this is the default
        },
      },
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
    criticalcss: {
        custom: {
            options: {
                url: 'http://localhost:3000/',
                filename: 'dist/css/app.min.css',
                outputfile: 'dist/css/crit.css'
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
          'postcss',
          'criticalcss'
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
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['browserSync', 'watch']);
}
