<template>
    <div class="goods_data">
        <c-table
            :tableData="tableData"
            :pageTotal="pageTotal"
            :pageSize="pageSize"
            tableTitle="竞争数据"
            @importExcel="importExcel"
            @downloadTemplate="downloadTemplate"
            @currentChange="currentChange"
        ></c-table>
        <c-dialog
            :action="action"
            :showDialog.sync="showDialog"
            @onSuccess="onSuccess"
            @onError="onError"
        ></c-dialog>
    </div>
</template>
<script>
    import { requestCompeteList, importCompeteExcel, downloadCompeteTemplate } from '@/utils/borrow'
    import { competeData } from '@/utils/dataModules'
    export default {
        name: 'competeData',
        data() {
            return {
                // 表格数据
                tableData: {
                    data: [],
                    column: competeData
                },
                // 总页数
                pageTotal: 1,
                // 每页显示多少条
                pageSize: 10,
                // 文件上传地址
                action: '',
                // 弹框是否显示
                showDialog: false
            }
        },
        methods: {
            getData(current) {
                requestCompeteList({
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
                this.showDialog = true
                this.action = importCompeteExcel
            },
            // 下载模板
            downloadTemplate() {
                window.location.href = downloadCompeteTemplate
            },
            // 分页切换
            currentChange(current) {
                this.getData(current)
            },
            // 上传成功
            onSuccess(response, file, fileList) {
                this.$message.success('上传成功')
            },
            // 上传失败
            onError(err, file, fileList) {
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
