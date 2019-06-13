<template>
  <div class="tagsView">
    <el-scrollbar :vertical="false" wrap-class="scrollbar-wrapper">
      <el-tag
        v-for="tag in visitedViews"
        :key="tag.path"
        closable
        :type="tag.type"
        @close="handleClose(tag)"
        @click="handleClick(tag)"
      >
        {{ tag.meta.title }}
      </el-tag>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [],
      index: [{
        path: '/dashboard/index',
        name: 'Dashboard',
        hidden: false,
        alwaysShow: true, // 一直显示根路由
        meta: { title: '首页' }
      }]
    }
  },
  computed: {
    visitedViews() {
      return this.index.concat(this.$store.state.tagsView.visitedViews)
    }
  },
  watch: {
    $route(val) {
      console.log(val)
      this.addTags()
      // this.moveToCurrentTag()
    }
  },
  methods: {
    addTags() {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('addView', this.$route)
      }
      return false
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag)

            // when query is different then update
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch('updateVisitedView', this.$route)
            }

            break
          }
        }
      })
    },
    handleClose(tag) {
      this.$store.dispatch('delView', tag)
    },
    handleClick(tag) {
      this.$router.push({ path: tag.path })
    }
  }
}
</script>
<style lang="scss">
.tagsView {
    overflow: hidden;
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    text-align: left;
    box-shadow: 0px 1px 3px 0 #ccc;
    .el-tag {
        cursor: pointer;
    }
}
</style>

