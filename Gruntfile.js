module.exports = function (grunt) {
  'use strict';

  var execSync = require('child_process').execSync;

  var config = {};


  // build vars
  config.build = {
    env: 'dev',
    hostname: 'monicarachelparra.com',
    jekyllDrafts: false,
    jekyllFuture: false
  };

  config.watch = {
    all: {
      files: ['src/**/*', '!src/less/**/*.less'],
      tasks: ['default']
    },
    css: {
      files: ['src/less/**/*.less'],
      tasks: ['less']
    }
  };

  config.connect = {
    server: {
      options: {
        hostname: 'localhost',
        port: 8000,
        base: 'build/',
        useAvailablePort: false,
        open: true,
        keepalive: true
      }
    }
  };

  config.clean = [
    'build',
    'tmp'
  ];

   config.copy = {
     tmp: {
       files: [
         {
           src: '_config.yml',
           dest: 'tmp/_config.yml'
         },
         {
           cwd: 'src/',
           src: ['jekyll/**', 'js/**', 'less/**'],
           dest: 'tmp/src',
           expand: true
         }
       ]
     },
     build: {
       files: [
         {
           cwd: 'src/',
           src: ['img/**/*', 'data/**/*'],
           dest: 'build',
           expand: true
         }
       ]
     }
   };

  config.less = {
    build: {
      options: {
        paths: ['src/less']
      },
      files: {
        'build/css/monicarachelparra.css': 'src/less/build.less'
      }
    }
  };

  config.uglify = {
    build: {
      files: [{
        expand: true,
        cwd: 'build/js',
        src: ['**/*.js'],
        dest: 'build/js/',
        ext: '.min.js'
      }]
    }
  };

  config.jekyll = {
    build: {
      options: {
        config: 'tmp/_config.yml',
        drafts: '<%= build.jekyllDrafts %>',
        future: '<%= build.jekyllFuture %>',
        src: 'tmp/src/jekyll',
        dest: 'build'
      }
    }
  };

  /**
   * Configure Grunt
   */
   grunt.initConfig(config);

  // auto-load grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('server', [
    'connect:server'
  ]);

  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', '', function() {

    var key = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 8; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }


    var tasks = [
      'clean',
      'copy:tmp',
      'jekyll:build',
      'copy:build',
      'less:build'
    ];

    if (grunt.option('uglify') !== false) {
      tasks.push('uglify:build');
    }

    grunt.task.run(tasks);

  });

};
