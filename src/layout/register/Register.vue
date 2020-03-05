<template>
  <div class="login">
    <JForm
      :rules="rules"
      :model="ruleForm"
      :option="option"
      @submit="handleSubmit"
    >
      <el-form-item
        label="用户名"
        prop="username"
      >
        <el-input
          v-model="ruleForm.username"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          v-model="ruleForm.password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <v-captura code="1234t"/>
      </el-form-item>
    </JForm>
  </div>
</template>

<script>
import JForm from '@base/jform/JForm'
import { genValidator } from '@helper/ele'
import { doLogin, getVcode } from '@api/user'
import { SUCCESS_CODE } from '@helper/constants'
export default {
  components: {
    JForm
  },
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: {
          ...genValidator('用户名不能为空')
        },
        password: {
          ...genValidator('密码不能为空')
        }
      }
    }
  },
  created () {
    getVcode()
    this.option = {
      confirmText: '登录'
    }
  },
  methods: {
    handleSubmit () {
      const { username, password } = this.ruleForm
      const router = this.$router
      doLogin({ username, password }).then(data => {
        if (data.code !== SUCCESS_CODE) {
          return alert('登录失败')
        }
        router.push({ name: 'main' })
      })
    }
  }
}
</script>

<style lang="stylus"></style>
