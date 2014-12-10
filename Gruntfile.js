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
    options:{delay: 1000},
    dev: {
      options: {
        script: './server.js'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-mocha-casperjs')
grunt.loadNpmTasks('grunt-express-server')
grunt.registerTask('default',['express','mocha_casperjs'])

}