<template>
  <div  id="app">
    <el-container>
      <el-header>

        <h2>ElementUI测试组件</h2>

        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            杰克<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user-solid">个人信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-warning-outline">账号中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-header>
      <el-container>
        <el-aside width="200px">
          <!--          router :设置路由模式-->
          <el-menu
              router
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#D3DCE6"
              text-color="#000"
              active-text-color="#2d3a4b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>表单</span>
              </template>

              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="/carousel">
              <i class="el-icon-menu"></i>
              <span slot="title">走马灯</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">表格</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">提示框</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script>

    export default {


    }
</script>
<style>
html,body,#app{
  height: 100%;
  margin: 0;
  padding:0;
}

.el-container{
  height: 100%;
}
.el-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
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
