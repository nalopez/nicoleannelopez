module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        /*babel: {
            options: {
                sourceMap: false,
                presets: ["env", "react"],
                plugins: ["transform-es2015-modules-amd"]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: './src',
                    src: ['*.js'],
                    dest: './myAppConcat',
                    ext: '.js'
                }]
            }
        }*/
        react: {
            files: {
                expand: true,
                src: ['src/Components/**/*.js'],
                dest: 'src/compiled/myAppConcat',
                ext: '.js'
            }
        },
        browserify: {
            options: {
                transform:  [ require('grunt-react').browserify ]
            },
            app: {
                src: 'src/compiled/myAppConcat/**/*.js',
                dest: 'src/compiled/myApp.js'
            }
        },
        concat: {
            dist: {
                src: ['src/css/*.css'],
                dest: 'src/compiled/myApp.min.css',
            },
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'src/compiled/myApp.min.js': ['src/compiled/myApp.js'],
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'src/compiled/myApp.min.css': ['src/compiled/myApp.min.css'],
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    "src/css/header.css": "src/scss/header.scss",
                    "src/css/sidebar.css" : "src/scss/sidebar.scss",
                    "src/css/main-content.css" : "src/scss/main-content.scss",
                    "src/css/footer.css" : "src/scss/footer.scss" 
                }
            }
        },
        watch: {
          //js: {
            //files: ['src/Components/**/*.js'],
            //tasks: ['react', 'browserify', 'uglify']
          //},
          css: {
              files: "src/scss/*.scss",
              tasks: ['sass', 'concat', 'cssmin'],
          },
        },
    });

    //grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default', ['watch']);
};