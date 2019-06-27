<template>
  <div class="documents">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <h4>前端技术</h4>
          <p>vue2.0、vuex、vue-router、axios、ElementUI、sass和vue-cli3架构及其他插件</p>
          <h4>代码下载、运行和打包步骤</h4>
          <p class="documents-pre">
            git clone https://github.com/zhanghuawei/vue-admin.git // 克隆地址
          </p>
          <p class="documents-pre">
            npm install // 进入vue-admin文件夹，右键打开Git Bash Here进行命令执行安装依赖包
          </p>
          <p class="documents-pre">
            npm run serve // 运行前端服务
          </p>
          <p class="documents-pre">
            npm run build // 项目打包
          </p>
          <h4>登录</h4>
          <p>1.登录成功返回数据格式</p>
          <pre class="documents-pre">
{
  "msg": "操作成功",
  "code": "000000",
  "data": {
    "roleId": "0", // 0 为管理员，1 为业务员 2 用户
    "roles": [ // 权限字段，此字段需要和路由权限配置字段一致。可配置多个权限，再次添加就行。
      "admin"
    ],
    "token": "token",
    "loginName": "登陆"
  }
}
           </pre>
          <h4>路由配置</h4>
          <p>
            1.前端路由是动态生成：<br>
            第一种是根据角色动态生成。现在讨论是第一种实现方式。<br>
            第二种是后端直接返回该权限相对应的路由，这种直接添加到前端路由就可以。<br>
            注* 子路由不需要配权限，如果子路由需要在其他角色下展示，只需配置一个新的路由指向这个组件<br>
          </p>
          <pre class="documents-pre">
{
    path: '/dashboard',
    name: 'Layout',
    hidden: false, // 在侧边栏线上 false显示 true隐藏
    alwaysShow: false, // 是否显示下拉菜单，true显示 false不显示 为false时子路由hidden和meta都可以去掉
    meta: { title: '首页', icon: 'iconfont iconhome-alt', roles: ['admin', 'salesman', 'user'] }, // roles 路由权限配置
    component: Layout,
    children: [
      {
        path: '', // 默认路由
        hidden: false,
        meta: { //
          title: '首页',
          icon: 'lock', // 图标
          breadcrumb: false, // 如果设置为false，则不会在breadcrumb面包屑中显示
          noCache: false // 不会被 <keep-alive> 缓存
        },
        component: () => import('@/views/layout/index.vue')
      }
    ]
}
          </keep-alive></pre>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
.documents {
    .grid-content {
        text-align: left;
        line-height: 25px;
        // h4,p {
        //     margin-bottom: 15px;
        // }
    }
    .documents-pre {
        overflow:auto;
        background: #252525;
        color: #5793d2;
        border-radius: 15px;
        padding: 15px;
        margin-bottom: 15px;
    }
}
</style>

