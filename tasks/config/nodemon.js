/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *        https://github.com/gruntjs/grunt-contrib-watch
 *
 */

var appRoot = process.cwd();
module.exports = function (grunt) {

    grunt.config.set('nodemon', {
        dev: {
            script: 'app.js',
            options: {
                ignore: [
                        appRoot + '/node_modules/**',
                        appRoot + '/public/**',
                        appRoot + '/.tmp/**',
                        appRoot + '/.idea/**',
                        appRoot + '/config/locales/**'
                ],
                watch:[
                    appRoot + "\\api\\**"
                ],
                ext: 'js,jade',
                //delay: 5000,
                callback: function (nodemon) {
                    nodemon.on('log', function (event) {
                        console.log(event.colour);
                        console.log("current_dir: " + __dirname);
                        //console.log("appRootPath: " + appRoot);
                        console.log("process.cwd: " + process.cwd());
                    });
                }

            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
};
