module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            devlopment: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress:true,
                },
                files: {
                    'dist/styles/main.css': 'src/styles/main.less'
                }
                
            }
        },
        watch: {
            files:['src/styles/**/*.less'],
            tasks:['less:devlopment']
        },
        uglify:{
            targt:{
                files:{
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production','uglify'])
}