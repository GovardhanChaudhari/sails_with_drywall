module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
        'copy:vendor',
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
