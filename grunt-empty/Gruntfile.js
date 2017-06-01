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
        copy:{//����  copy clean ���Գ�֮Ϊtask ��������ĳ�֮Ϊtarget
            dist_html:{
                //files:{//���԰Ѷ��targetд��һ�������У�����Ҳ����д�ɼ�ֵ��,ע���ֵ����д����
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
                        extDot:'last',//���Ǹ��ļ�����㿪ʼ�޸�,�����������һ����
                        flatten:true,//Ϊtrue������»�ֱ�ӽ��м����Ŀ¼ɾ����
                        rename:function(dest,src){//��flatten����෴�����������ļ�
                            return dest+'js/'+src;
                        }
                    }
                ]
            }
        },
        clean:{//���
            dist:{
                //src:['<%= config.dist %>/index.html','<%= config.dist %>/js/index.js']//Դ�ļ�,֧��������ʽ
                src:['<%= config.dist %>/**/*']//������е��ļ�
                //filter:'isFile'//�������Ա���js�ļ���
                //filter:function(filepath){//ͨ����������ʽ����js�ļ���
                //    return (!grunt.file.isDir(filepath));
                //}
                //nonull//����˵��һ�����ڵ���
                //dot:true,//���е���ļ�
                //matchBase:true, //a?b /xyz/123 abc/123 ����/xyz/123
                //expand:true,
            }
        }
    })
}