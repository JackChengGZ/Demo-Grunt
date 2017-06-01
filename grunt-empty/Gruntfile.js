/**
 * Created by Administrator on 2017/5/24.
 */
'use strict';
module.exports=function(grunt){
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    var config={
        app:'app',
        dist:'dist'
    }
    grunt.initConfig({
        config:config,
        copy:{//复制  copy clean 可以称之为task 他们里面的称之为target
            dist_html:{
                //files:{//可以把多个target写在一个数组中，但是也可以写成键值对,注意键值不能写反了
                //    '<%= config.dist %>/index.html':'<%= config.app %>/index.html',
                //    '<%= config.dist %>/js/index.js':['<%= config.app %>/js/index.js']
                //}
                files:[
                    {
                        expand:true,
                        cwd:'<%= config.app %>/',
                        //src:'*.html',
                        src:'**/*.js',
                        dest:'<%= config.dist %>/',
                        //ext:'.min.html',
                        ext:'.min.js',
                        extDot:'last',//从那个文件后面点开始修改,比如这是最后一个点
                        flatten:true,//为true的情况下会直接将中间各层目录删除掉
                        rename:function(dest,src){//和flatten差不多相反，可以增加文件
                            return dest+'js/'+src;
                        }
                    }
                ]
            }
        },
        clean:{//清除
            dist:{
                //src:['<%= config.dist %>/index.html','<%= config.dist %>/js/index.js']//源文件,支持数组形式
                src:['<%= config.dist %>/**/*']//清除所有的文件
                //filter:'isFile'//这样可以保留js文件夹
                //filter:function(filepath){//通过函数的形式保留js文件夹
                //    return (!grunt.file.isDir(filepath));
                //}
                //nonull//不多说，一般用于调试
                //dot:true,//命中点的文件
                //matchBase:true, //a?b /xyz/123 abc/123 命中/xyz/123
                //expand:true,
            }
        }
    })
}