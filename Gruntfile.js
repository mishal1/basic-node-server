module.exports = function(grunt){
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  mocha_casperjs: {
    options: {
      timeout: 5000,
      color: false
    },
    files: {
      src: ['test/**/*']
    }
  },
  express: {
    options:{},
    dev: {
      options: {
        script: './server.js'
      }
    }
  },
  mocha: {
    all: {
      src:['test/testrunner.html'],
    },
    options:{
      run: true
    }
  }
});

grunt.loadNpmTasks('grunt-mocha-casperjs')
grunt.loadNpmTasks('grunt-express-server')
grunt.loadNpmTasks('grunt-mocha')
grunt.registerTask('default',['express','mocha_casperjs','mocha'])

}