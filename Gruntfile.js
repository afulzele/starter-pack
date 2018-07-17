const sass = require('node-sass');

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['dist/css/*.css', 'src/scss/*.scss'],
                tasks: ['sass']
            },
            html: {
                files: ['dist/index.html']
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: './',
                flatten: true,
                src: ['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js'],
                dest: 'dist/js',
            },
            css: {
                expand: true,
                cwd: './',
                flatten: true,
                src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
                dest: 'dist/css',
            },
            font: {
                expand: true,
                cwd: './',
                flatten: true,
                src: ['node_modules/font-awesome/fonts/*'],
                dest: 'dist/font',
            },
            fontCss: {
                expand: true,
                cwd: './',
                flatten: true,
                src: ['node_modules/font-awesome/css/font-awesome.min.css'],
                dest: 'dist/css',
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dev: {
                files: {
                    "dist/css/main.css": "src/scss/style.scss"
                }
            }
        },
        connect: {
            server: {
              options: {
                port: 8000,
                hostname: 'localhost',
                base: 'dist/',
                // keepalive: true,
                livereload: true
              }
            }
          }
    });

    // ------------- grunt.loadNpmTasks('');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // ------------- Task Registration
    grunt.registerTask('default', ['copy', 'sass', 'connect', 'watch']);

}