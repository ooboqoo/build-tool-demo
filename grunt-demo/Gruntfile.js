module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'                   // 定义一个用于插入合并输出文件之间的字符
      },
      dist: {
        src: ['src/**/*.js'],            // 将要被合并的文件
        dest: 'dist/<%= pkg.name %>.js'  // 合并后的JS文件的存放位置
      }
    },
    uglify: {
      options: {
        // 此处定义的banner注释将插入到输出文件的顶部
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      // 通过多个 目标 target 来定义不同配置，同时指定任务和目标(如 grunt uglify:dist)，则指运行指定目标，否则依次处理
      build: {
        src: 'src/main.js',
        dest: 'build/<%= pkg.name %>.min.js'
      },
      dist: {
        files: {
          // 这里我使用了<%= concat.dist.dest>，因此 uglify 会自动压缩 concat 任务中生成的文件。
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        reporterOutput: '',
        // 覆盖JSHint默认配置的选项
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  })

  // 加载插件任务
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify:dist'])  // 依赖任务从左向右依次执行

  // 自定义任务
  grunt.registerTask('play', 'Log some stuff.', function () {
    grunt.log.write('Logging some stuff...').ok()
  })
}
