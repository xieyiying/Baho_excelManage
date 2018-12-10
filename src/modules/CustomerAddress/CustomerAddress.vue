<template>
    <div class="goods_data">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-tickets"></i> 客户地址（按日增量）</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" style="margin-bottom: 20px;" @click="importExcel">导入Excel</el-button>
            </div>
        </div>
        <el-dialog
            title="导入Excel"
            :visible.sync="dialogVisible"
            :before-close="handleClose"
        >
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
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import { importCustomerAddress } from '@/utils/https.js'
    export default {
        name: 'ChannelCost',
        data() {
            return {
                // 弹框是否显示
                dialogVisible: false,
                action: '',
                fileList: []
            }
        },
        methods: {
            // 关闭弹框
            handleClose() {
                this.dialogVisible = false
                this.fileList = []
            },
            // 导入excel
            importExcel() {
                this.dialogVisible = true
                this.action = importCustomerAddress
            },
            handleClose() {
                this.dialogVisible = false
            },
            // 上传成功
            handleSuccess(response, file, fileList) {
                this.$message.success('上传成功')
                this.fileList = fileList
            },
            // 上传失败
            handleError(err, file, fileList) {
                this.$message.error('上传失败！');
            }
        },
        created() {
            
        }
    }
</script>
<style>
    .handle-box {
        margin-bottom: 20px;
    }
    .handle-select {
        width: 150px;
    }
    .handle-input {
        width: 200px;
        display: inline-block;
    }
    .upload-demo {
        display: inline-block;
    }
</style>
