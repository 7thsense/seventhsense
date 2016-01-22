// Generated on 2015-07-01 using generator-jekyllrb 1.4.1
'use strict';

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      bower: '_bower_components',
      dist: 'dist',
      assets: 'assets',
      css: 'css',
      img: 'img',
      js: 'js',
      fonts: 'fonts'
    },
    watch: {
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{ad,adoc,asciidoc,html,yml,md,mkd,markdown,css,js}',
          '!<%= yeoman.app %>/<%= yeoman.bower %>/**/*'
        ],
        tasks: ['jekyll:server']
      },
      less: {
        files: ['<%= yeoman.app %>/<%= yeoman.assets %>/<%= yeoman.css %>/**/*.less'],
        tasks: ['less']
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/**/*.css',
            '{.tmp,<%= yeoman.app %>}/<%= yeoman.assets %>/<%= yeoman.js %>/**/*.js',
            '{<%= yeoman.app %>}/<%= yeoman.bower %>/**/*.js',
            '<%= yeoman.app %>/<%= yeoman.assets %>/<%= yeoman.img %>/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              '.jekyll',
              '.tmp',
              '<%= yeoman.app %>'
            ]
          },
          watchTask: true
        }
      },
      dist: {
        options: {
          server: {
            baseDir: '<%= yeoman.dist %>'
          }
        }
      },
      test: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/**/*.css',
            '{.tmp,<%= yeoman.app %>}/<%= yeoman.assets %>/<%= yeoman.js %>/**/*.js',
            '{<%= yeoman.app %>}/<%= yeoman.bower %>/**/*.js',
            '<%= yeoman.app %>/<%= yeoman.assets %>/<%= yeoman.img %>/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              '.jekyll',
              '.tmp',
              '<%= yeoman.app %>'
            ]
          },
          watchTask: true
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*',
            '!.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    jekyll: {
      options: {
	bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },    
    
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    
    usemin: {
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>', 
          '<%= yeoman.dist %>/<%= yeoman.assets %>', 
          '<%= yeoman.dist %>/<%= yeoman.assets %>/<%= yeoman.js %>', 
          '<%= yeoman.dist %>/<%= yeoman.assets %>/<%= yeoman.css %>'
          ]/*,
        patterns: {
                js: [
                    [/(images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
                ]
            }*/
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/<%= yeoman.assets %>/<%= yeoman.css %>/{,*/}*.css'],
      js: ['<%= yeoman.dist %>/<%= yeoman.assets %>/<%= yeoman.js %>/{,*/}*.js']
    },    
    
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    less: {
      dist: {
        files: {
          '<%= yeoman.app %>/<%= yeoman.assets %>/<%= yeoman.css %>/core.css': ['<%= yeoman.app %>/<%= yeoman.assets %>/<%= yeoman.css %>/core.less']
        },
        options: {
          sourceMap: true,
          sourceMapFilename: '<%= yeoman.app %>/<%= yeoman.assets %>/<%= yeoman.css %>/main.css.map',
          sourceMapBasepath: '<%= yeoman.app %>/<%= yeoman.assets %>/',
          sourceMapRootpath: '/'
        }
      }
    }, 
       
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            '<%= yeoman.assets %>/<%= yeoman.img %>/**/*',
            '<%= yeoman.assets %>/<%= yeoman.assets %>/<%= yeoman.assets %>/fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}'
          ],
          dest: '<%= yeoman.dist %>'
        },
        {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/<%= yeoman.assets %>/src/font-awesome/fonts',
          dest: '<%= yeoman.app %>/<%= yeoman.assets %>/fonts/font-awesome',
          src: ['*']
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/<%= yeoman.assets %>/src/bootstrap/fonts',
          dest: '<%= yeoman.app %>/<%= yeoman.assets %>/fonts/bootstrap',
          src: ['*']
        }]
      }
    },
    filerev: {
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/<%= yeoman.assets %>/<%= yeoman.img %>/**/*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/<%= yeoman.assets %>/<%= yeoman.js %>/**/*.js',
            '<%= yeoman.dist %>/<%= yeoman.assets %>/<%= yeoman.css %>/**/*.css'
          ]
        }]
      }
    },
     
    buildcontrol: {
      dist: {
        options: {
          remote: 'https://github.com/7thsense/seventhsense.git',
          branch: 'gh-pages',
          commit: true,
          push: true
        }
      }
    },
     
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/<%= yeoman.assets %>/<%= yeoman.js %>/**/*.js'      
        ]
    },
    concurrent: {
      server: [
        'jekyll:server'
      ],
      dist: [
        'copy:dist'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'browserSync:server',
      'less',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'jshint:all'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'less',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
    ]);

  grunt.registerTask('publish', [
    'build',
    'buildcontrol:dist'
  ]);

  grunt.registerTask('default', [
    'test',
    'build'
  ]);
};
