<template>
    <div class="goods_data">
        <c-table
            :tableData="tableData"
            :pageTotal="pageTotal"
            :pageSize="pageSize"
            tableTitle="活动数据 / 单品"
            @importExcel="importExcel"
            @downloadTemplate="downloadTemplate"
            @currentChange="currentChange"
        ></c-table>
        <el-dialog
            title="导入Excel"
            :visible.sync="dialogVisible"
            width="650"
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
    import { requestActivityItemList, importActivityItemExcel, downloadActivityItemTemplate } from '@/utils/borrow'
    import { activityItemData } from '@/utils/dataModules'
    export default {
        name: 'activityItem',
        data() {
            return {
                // 表格数据
                tableData: {
                    data: [],
                    column: activityItemData
                },
                // 总页数
                pageTotal: 1,
                // 每页显示多少条
                pageSize: 10,
                // 文件上传地址
                action: '',
                // 弹框是否显示
                dialogVisible: false,
                fileList: []
            }
        },
        methods: {
            // 关闭弹框
            handleClose() {
                this.dialogVisible = false
                this.fileList = []
                this.getData(this.pageSize)
            },
            getData(current) {
                requestActivityItemList({
                    pageNo: current,
                    pageSize: this.pageSize
                }).then(res => {
                    if(res.success) {
                        this.tableData.data = res.body.list
                        this.pageTotal = res.body.count
                    }
                })
            },
            // 导入Excel
            importExcel() {
                this.dialogVisible = true
                this.action = importActivityItemExcel()
            },
            // 下载模板
            downloadTemplate() {
                window.location.href = downloadActivityItemTemplate()
            },
            // 分页切换
            currentChange(current) {
                this.getData(current)
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
            this.getData(1)
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
