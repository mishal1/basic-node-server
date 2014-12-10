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
  }
});

grunt.loadNpmTasks('grunt-mocha-casperjs')
grunt.registerTask('default',['mocha_casperjs'])

}