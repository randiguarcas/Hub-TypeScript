module.exports = function(grunt) {
	grunt.initConfig({
		ts: {
			main: {
				src: ["typescript/*.ts"],
				//dest: "javascript/"
				out:"javascript/main.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-ts");
	grunt.registerTask("default", ["ts"] );
}
