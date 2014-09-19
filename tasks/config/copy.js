/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less)'],
				dest: '.tmp/public'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		},
        vendor: {
            files: [
                {
                    expand: true, cwd: 'bower_components/bootstrap/',
                    src: ['js/**', 'less/**'], dest: 'assets/vendor/bootstrap/'
                },
                {
                    expand: true, cwd: 'bower_components/font-awesome/',
                    src: ['fonts/**', 'less/**'], dest: 'assets/vendor/font-awesome/'
                },
                {
                    expand: true, cwd: 'bower_components/font-awesome/',
                    src: ['fonts/**'], dest: 'assets/'
                },
                {
                    expand: true, cwd: 'bower_components/html5shiv/dist/',
                    src: ['html5shiv.js'], dest: 'assets/js/html5shiv/'
                },
                {
                    expand: true, cwd: 'bower_components/jquery/dist/',
                    src: ['jquery.js'], dest: 'assets/js/dependencies/jquery/'
                },
                {
                    expand: true, cwd: 'bower_components/jquery.cookie/',
                    src: ['jquery.cookie.js'], dest: 'assets/js/jquery.cookie/'
                },
                {
                    expand: true, cwd: 'bower_components/momentjs/',
                    src: ['moment.js'], dest: 'assets/js/momentjs/'
                },
                {
                    expand: true, cwd: 'bower_components/respond/src/',
                    src: ['respond.js'], dest: 'assets/js/respond/'
                },
                {
                    expand: true, cwd: 'bower_components/underscore/',
                    src: ['underscore.js'], dest: 'assets/js/underscore/'
                }
            ]
        }
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
