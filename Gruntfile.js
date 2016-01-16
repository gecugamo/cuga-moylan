module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: {
          'style.css': 'assets/scss/main.scss'
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
        src: 'style.css'
      }
    },
    browserSync: {
        dev: {
            bsFiles: {
                src: [
                  'style.css',
                  '*.php',
                  '**/*.php'
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
          'assets/scss/*.scss',
          'assets/scss/**/*.scss'
        ],
        tasks: [
          'sass',
          'postcss'
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['browserSync', 'watch']);
}
