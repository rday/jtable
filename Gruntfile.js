module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),
 
        // Metadata.
        meta: {
	    srcDir: './dev',
	    destDir: '.',
        },
 
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n',

        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: [
			'<%= meta.srcDir %>/jquery.jtable.core.js',
			'<%= meta.srcDir %>/jquery.jtable.utils.js',
			'<%= meta.srcDir %>/jquery.jtable.forms.js',
			'<%= meta.srcDir %>/jquery.jtable.creation.js',
			'<%= meta.srcDir %>/jquery.jtable.editing.js',
			'<%= meta.srcDir %>/jquery.jtable.deletion.js',
			'<%= meta.srcDir %>/jquery.jtable.selecting.js',
			'<%= meta.srcDir %>/jquery.jtable.paging.js',
			'<%= meta.srcDir %>/jquery.jtable.sorting.js',
			'<%= meta.srcDir %>/jquery.jtable.dynamiccolumns.js',
			'<%= meta.srcDir %>/jquery.jtable.masterchild.js'
                ],
                dest: '<%= meta.destDir %>/jquery.jtable.js'
            }
        },
 
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            primary_target: {
                files: {
			'<%= meta.destDir %>/jquery.jtable.min.js': [
				'<%= meta.srcDir %>/jquery.jtable.core.js',
				'<%= meta.srcDir %>/jquery.jtable.utils.js',
				'<%= meta.srcDir %>/jquery.jtable.forms.js',
				'<%= meta.srcDir %>/jquery.jtable.creation.js',
				'<%= meta.srcDir %>/jquery.jtable.editing.js',
				'<%= meta.srcDir %>/jquery.jtable.deletion.js',
				'<%= meta.srcDir %>/jquery.jtable.selecting.js',
				'<%= meta.srcDir %>/jquery.jtable.paging.js',
				'<%= meta.srcDir %>/jquery.jtable.sorting.js',
				'<%= meta.srcDir %>/jquery.jtable.dynamiccolumns.js',
				'<%= meta.srcDir %>/jquery.jtable.masterchild.js'
			]
		       }
                }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
 
    // Default task.
    grunt.registerTask('build', [
	'concat',
	'uglify'
    ]);
};
