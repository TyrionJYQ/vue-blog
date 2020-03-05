<template>
  <el-menu
    class="tab"
    router
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#aad2f0"
    text-color="#fff"
  >
    <el-menu-item index="/main/home">
      首页
    </el-menu-item>
    <el-menu-item index="/main/articles">
      文章
    </el-menu-item>
    <el-menu-item index="/main/archives">
      归档
    </el-menu-item>
    <el-menu-item index="/main/about">
      我的
    </el-menu-item>
    <!-- <template v-for="route in routes">
       <el-menu-item :index="/main/about">我的</el-menu-item>
    </template>-->
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/main/home'
    }
  },
  created () {},
  methods: {}
}
</script>

<style lang="stylus">
@import '../../assets/styl/variable.styl';
.tab.el-menu
  display: flex
  flex-direction: row
  justify-content: space-between
  border-bottom-left-radius: 3px
  border-bottom-right-radius: 3px
  margin-top: 3px;
.el-menu-item
  flex: 1
  text-align: center
</style>
