<template>
    <div class="c_table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-tickets"></i> {{tableTitle}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10" v-show="isSearch"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch" v-show="isSearch">搜索</el-button>
                <el-button type="primary" style="float: right; margin-bottom: 20px;" @click="importExcel" v-show="isShowImport">导入Excel</el-button>
                <el-button type="success" style="float: right; margin-bottom: 20px;" @click="handleDownload" v-show="isShowDownload">下载模板</el-button>
                <el-button type="success" style="float: right; margin-bottom: 20px;" @click="handleAdd" v-show="isShowAdd">添加数据</el-button>
            </div>
            <el-table :data="tableData.data" border style="width: 100%" ref="multipleTable">
                <el-table-column :fixed="col.fixed" v-for="(col, index) in tableData.column" :key="index" :prop="col.prop" :label="col.label" :width="col.width"></el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="pageTotal" :page-size="pageSize">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'c-table',
        data() {
            return {
                select_word: ''
            }
        },
        props: {
            // 表格标题
            tableTitle: {
                type: String,
                default: '数据表'
            },
            // 表格数据
            tableData: {
                type: Object,
                default: {}
            },
            // 是否有搜索功能
            isSearch: {
                type: Boolean,
                default: false
            },
            // 总条数
            pageTotal: {
                type: Number,
                default: 1
            },
            // 每页显示多少条
            pageSize: {
                type: Number,
                default: 20
            },
            isShowImport: {
                type: Boolean,
                default: true
            },
            isShowDownload: {
                type: Boolean,
                default: true
            },
            isShowAdd: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            // 搜索
            handleSearch() {
                console.log(this.select_word)
                this.$emit('searchItem', this.select_word)
            },
            // 导入Excel
            importExcel() {
                this.$emit('importExcel')
            },
            // 下载模板
            handleDownload() {
                this.$emit('downloadTemplate')
            },
            // 分页切换
            handleCurrentChange(val) {
                this.$emit('currentChange', val)
            },
            handleAdd() {
                this.$emit('addExcelData')
            }
        }
    }
</script>
