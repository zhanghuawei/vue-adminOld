<template>
    <div class="width_height_100">
        <el-container class="width_height_100">
            <el-aside width="200px"><Aside /></el-aside>
            <el-container>
                <el-header><Header /></el-header>
                <el-main><Main /></el-main>
                <el-footer><Footer /></el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from './Header'
import Aside from './Aside'
import Main from './Main'
import Footer from './Footer'
export default {
    name: 'Layout',
    data() {
        return {
            name: ''
        }
    },
    components: {
        Header, Aside, Main, Footer
    }
}
</script>

<style lang="less">

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: .6rem;
  }

  .el-aside {
    background-color: #001529;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    height: 100%;
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
