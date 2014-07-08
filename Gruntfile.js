module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-ts");

    grunt.initConfig({
        ts: {
            // A specific target
            build: {
                // The source TypeScript files, http://gruntjs.com/configuring-tasks#files
                src: [
                    "src/main/resources/content/ts/infrastructure/*.ts",
                    "src/main/resources/content/ts/tasks/*.ts"
                ],
                // The source html files, https://github.com/grunt-ts/grunt-ts#html-2-typescript-support
                html: [
                    "src/main/resources/content/ts/infrastructure/*.tpl.html",
                    "src/main/resources/content/ts/tasks/*.tpl.html"
                ],
                // If specified, generate this file that to can use for reference management
                reference: "src/main/resources/ts/_reference.ts",
                // If specified, generate an out.js file which is the merged js file
                out: 'src/main/resources/content/js/app/app.js',
                // If specified, the generate JavaScript files are placed here. Only works if out is not specified
//                outDir: 'src/main/resources/content/js',
                // If specified, watches this directory for changes, and re-runs the current target
                watch: 'src/main/resources/content/ts',
                // Use to override the default options, http://gruntjs.com/configuring-tasks#options
                options: {
                    // 'es3' (default) | 'es5'
                    target: 'es3',
                    // 'amd' (default) | 'commonjs'
                    module: 'commonjs',
                    // true (default) | false
                    sourceMap: true,
                    // true | false (default)
                    declaration: false,
                    // true (default) | false
                    removeComments: true
                }
            }
        }
    });
    grunt.registerTask("default", ["ts:build"]);
};
