module.exports = function(grunt) {

    grunt.initConfig({

        copy: {
            debug: {
                files: [
                    {
                        expand: true,
                        src: 'src/index.js',
                        dest: 'dist/assets',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: 'src/components/**/*.js',
                        dest: 'dist/assets',
                        flatten: false,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: 'index.html',
                        dest: 'dist/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: 'src/**.css',
                        dest: 'dist/',
                        flatten: true,
                        filter: 'isFile'
                    }
                ]
            }
        },

        injector: {
            debug: {
                options: {
                    relative: true
                },
                files: {
                    'dist/index.html': [
                        'dist/bundle.js',
                        'dist/**.css'
                    ],
                }
            }
        },

        browserify: {
            debug: {
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                    debug: true,
                    transform: [
                        ['browserify-ng-html2js', {
                                module: 'wa',
                                extension: 'html',
                                baseDir: './',
                                requireAngular: false
                            }
                        ]
                    ]
                },
                files: {
                    'dist/bundle.js': [
                        'src/index.js',
                        'src/**/*.html'
                    ]
                }
            }
        },

        extract_sourcemap: {
            options: { 'removeSourcesContent': true },
            files: {
                'dist': ['dist/bundle.js']
            }
        },

        exorcise: {
            bundle: {
                options: {},
                files: {
                    'dist/bundle.js.map': ['dist/bundle.js'],
                }
            }
        },

        watch: {
            // gruntfile: {
            //     files: 'Gruntfile.js',
            //     tasks: ['jshint:gruntfile'],
            // },
            src: {
                files: ['src/**/*.js', 'src/**/*.html'],
                tasks: ['default'],
            },
            options: {
                livereload: {
                    host: 'localhost',
                    port: 9000,
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    keepalive: true,
                    base: 'dist',
                    // open: {
                    //     appName: 'Chrome',
                    //     target: 'http://localhost:9000',
                    //     useAvailablePort: true
                    // }

                }
            }
        }


    })

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-extract-sourcemap');
    grunt.loadNpmTasks('grunt-exorcise');

    grunt.registerTask('default', [
        'copy:debug',
        'browserify:debug',
        'exorcise',
        'injector:debug',
        'connect'
    ])
}