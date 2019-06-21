<template>
  <div class="documents">
    <el-row :gutter="20">
      <el-col :span="20" :offset="1">
        <div class="grid-content bg-purple">
          <h4>前端技术</h4>
          <p>vue2.0、vuex、vue-router、axios、ElementUI、sass和vue-cli3架构</p>
          <h4>登录</h4>
          <p>1.登录成功返回数据格式：{msg: "操作成功", code: "000000", data: {roles: ["admin"]}}，把角色权限字段放在这个数组里，和路由roles权限配置一样</p>
          <h4>路由配置</h4>
          <p>
            1.前端路由配置有两种：<br>
            第一种是根据角色动态生成。现在讨论是第一种实现方式。<br>
            第二种是后端直接返回该权限相对应的路由，这种直接添加到前端路由就可以。<br>
            2.路由的属性 <br>
            hidden: false, // 在侧边栏线上 false显示 true隐藏<br>
            alwaysShow: false, // 是否显示下拉菜单，true显示 false不显示 为false时子路由hidden和meta都可以去掉<br>
            meta: { title: '首页', icon: 'iconfont iconhome-alt', roles: ['admin', 'salesman', 'user'] }, // roles 路由权限配置<br>
            子路由不需要配权限，如果子路由需要在其他角色下展示，只需配置一个新的路由指向这个组件。<br>
            children的属性可以参考代码就行。
          </p>
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
        background: #252525;
        color: #5793d2;
        border-radius: 15px;
        padding: 15px;
    }
}
</style>

