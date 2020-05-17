<template>
<div  class="home-page">
<el-container style="height: 100%;" direction="vertical">
     <!-- 头部区域 -->
  <el-header>
    <div>
      <span>港股打新记账软件</span>
    </div>
  </el-header>
  <!-- 页面主体区域 -->
  <el-container>
  <!-- 侧边栏 -->
    <el-aside width="150px">
<!--       左侧菜单栏 -->

        <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
             <!--  我的首页 -->
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">我的首页</span>
              </el-menu-item>
              <!-- 账户管理 -->
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>账户管理</span>
                </template>
                  <el-menu-item index="1-3-1">创建账户</el-menu-item>
                  <el-menu-item index="1-2-2">账户明细</el-menu-item>
              </el-submenu>
               <!-- 设置 -->
              <el-submenu index="3">
                <template slot="title">
                <i class="el-icon-setting"></i>
                <span>设置</span>
                </template>
                  <el-menu-item index="1-3-1">修改密码</el-menu-item>
                  <el-menu-item index="1-3-2">导入导出</el-menu-item>
              </el-submenu>>
            </el-menu>
        </el-col>
    </el-aside>

<!-- 右侧内容主体 -->
  <el-main>
<!--  主体部分按钮 -->
  <el-row :gutter="7">
    <el-col :span="16">
      <div>
          <el-button type="primary">打新速记</el-button>
          <el-button type="primary">中签速记</el-button>
          <el-button type="primary">卖出管理</el-button>
      </div>
    </el-col>
    <el-col :span="8">
    <div class="calendar-title">
      <span>新股日历</span>
    </div>
  </el-col>
  </el-row>
      <!-- 主体部分表格 -->
  <el-row :gutter="7">
          <el-col :span="16">
            <div>
              <el-table
                    :data="tableData"
                    style="width: 100%"
                    height="600">
                    
                    <el-table-column
                      fixed
                      prop="stock"
                      label="新股"
                      width="130">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="富途1"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="province"
                      label="华盛通1"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="city"
                      label="尊嘉"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="友信"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="building"
                      label="玖富"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="sta"
                      label="东财"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="sta"
                      label="青石"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="sta"
                      label="耀才"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="sta"
                      label="辉立"
                      width="100">
                    </el-table-column>
                  </el-table>
                </div>
          </el-col>
      <!-- 主体部分日历 -->
          <el-col :span="8">
            <div>
            <el-calendar v-model="value">
            </el-calendar>
          </div>
          </el-col>
  </el-row>
  </el-main>
  </el-container>
</el-container>


</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          stock:'沛嘉(09996HK）',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '中1手',
          province: '未中',
          city: '中1手',
          address: '未中',
          building: '中2手',
          sta:'未中',
        }, {
          stock:'康方(09926HK）',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }, {
          stock:'名称(代码HK)',
          deadline:'2016.5.3',
          date: '2016-05-03',
          name: '现金1手',
          province: '融资10手',
          city: '现金1手',
          address: '融资20手',
          building: '融资10手',
        }],

        value: new Date ()
        
       }
      },
  
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
   };
</script>

<style scoped>

.home-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.el-aside {
font-size: 10px;
}

.el-header {
  text-align: center;
  line-height: 50px;
  background-color: #eaedf1;
}

.el-main {
  shape-margin: 0px;
  font-size: 8px;
}

.el-row {
  margin-bottom: 20px;
  }

.calendar-title {
  text-align: center;
  font-size: 25px;
}





</style>

