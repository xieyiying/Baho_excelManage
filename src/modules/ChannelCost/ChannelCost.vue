<template>
    <div class="goods_data">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-tickets"></i> 渠道费用</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="success" style="margin-bottom: 20px;" @click="addExcelData">添加数据</el-button>
            </div>
        </div>
        <el-dialog
            title="添加数据"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
        >
            <el-form :model="form" ref="ruleForm">
                <el-form-item label="费用额(分)：">
                    <el-input v-model.trim="form.costInCent" placeholder="请输入费用额" class="handle-input"></el-input>
                </el-form-item>
                <el-form-item label="费用日期：">
                    <el-date-picker v-model="form.date" type="datetime" placeholder="请选择日期时间" value-format="yyyy-MM-dd HH:mm:ss" :picker-options="pickerOptions1"></el-date-picker>
                </el-form-item>
                <div class="dialog-footer" style="margin-top: 10px;">
                    <el-form-item style="text-align: right">
                        <el-button type="primary" @click="confirm">确 定</el-button>
                        <el-button @click="closeDialog">取 消</el-button>
                    </el-form-item>  
                </div>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
    import { saveChannelCost } from '@/utils/https.js'
    export default {
        name: 'ChannelCost',
        data() {
            return {
                // 弹框是否显示
                dialogVisible: false,
                pickerOptions1: {
                    disabledDate (time) {
                        return time.getTime() > Date.now()
                    }
                },
                form: {
                    costInCent: '',
                    date: ''
                }
            }
        },
        methods: {
            // 关闭弹框
            handleClose() {
                this.dialogVisible = false
            },
            // 添加表格数据
            addExcelData() {
                this.dialogVisible = true
            },
            closeDialog() {
                this.dialogVisible = false
            },
            confirm() {
                saveChannelCost(this.form).then(res => {
                    console.log(res)
                    if(res.success) {
                        this.$message.success('保存成功')
                        this.dialogVisible = false
                    }
                })
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
