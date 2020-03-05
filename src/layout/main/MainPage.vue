<template>
  <el-container>
    <el-header><Tab /></el-header>
    <el-main>
      <router-view />
    </el-main>
    <MFooter />
  </el-container>
</template>

<script>
import Tab from '@components/Tab/Tab'
import MFooter from '@components/footer/MFooter'
export default {
  components: {
    Tab,
    MFooter
  }
}
</script>

<style lang="stylus" scoped>
.el-container
  max-width: 900px;
  margin: 0 auto;
</style>
