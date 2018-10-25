<template>
    <div class="c_dialog">
        <el-dialog title="导入Excel" :visible.sync="showDialog" :before-close="modalClose" width="650">
            <span style="font-size: 16px;font-weight: bold;">选择Excel：</span>
            <el-upload
                class="upload-demo"
                drag
                :action="action"
                :on-success="handleSuccess"
                :on-error="handleError"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'c-dialog',
        props: {
            // 是否显示弹框
            showDialog: {
                type: Boolean,
                default: false
            },
            // 文件上传地址
            action: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                // visible: this.showDialog
            }
        },
        methods: {
            // 关闭弹框
            modalClose(){
                this.showDialog = false;
            },
            // 上传成功之后
            handleSuccess(response, file, fileList) {
                this.$emit('onSuccess', response, file, fileList)
            },
            // 上传失败之后
            handleError(err, file, fileList) {
                this.$emit('onError', err, file, fileList)
            }
        },
        watch: {
            showDialog : function (val) {
                this.$emit('update:showDialog', val);
            }
        }
    }
</script>
<style>
    .upload-demo {
        display: inline-block;
    }
    /* .el-dialog__headerbtn {
        display: none;
    } */
</style>

