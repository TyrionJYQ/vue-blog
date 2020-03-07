<template>
  <div class="login">
    <JForm
      :rules="rules"
      :model="ruleForm"
      :option="option"
      @submit="handleSubmit"
      refName="loginForm"
      ref="login"
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
        label="邮箱"
        prop="email"
      >
        <el-input
          v-model="ruleForm.email"
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
      <el-form-item
        class="flex"
         prop="vCode"
      >
        <el-col :span="12">
          <el-input
            v-model="ruleForm.vCode"
            type="text"
            :maxlength="codeMaxLength"
          />
        </el-col>
        <el-col
          :span="12"
          class="text-right"
        >
          <span  
            @click="getVcode" 
            title="看不清,换一张">
             <v-captura
            v-if="showCatptura"
            :code="vcode"
            class="captura"
          />
          </span>
        </el-col>
      </el-form-item>
    </JForm>
  </div>
</template>

<script>
import JForm from '@base/jform/JForm'
import { genValidator } from '@helper/ele'
import { doRegister, getVcode } from '@api/user'
export default {
  components: {
    JForm
  },
  data () {
    return {
      ruleForm: {
        username: '',
        password: '',
        vCode: '',
        email: ''
      },
      rules: {
        username: {
          ...genValidator('用户名不能为空')
        },
        password: {
          ...genValidator('密码不能为空')
        },
        email: {
          ...genValidator('邮箱不能为空')
        },
        vCode: {
          ...genValidator('验证码不能为空')
        }
      },
      vcode: ''
    }
  },
  computed: {
    codeMaxLength () {
      return this.code && this.code.length
    },
    showCatptura () {
      return !!this.vcode
    }
  },
  created () {
    this.getVcode()
    this.option = {
      confirmText: '注册'
    }
  },
  methods: {
    _resetForm() {
      this.$refs.login.$refs.loginForm.resetFields()
    },
    _confirm(username) {
      this.$confirm('注册成功，去登录?', {
          confirmButtonText: '确定',
          cancelButtonText: '重新注册',
          type: 'success',
          center: true
        }).then(() => {
          this.$router.push({ name: 'login',params: {username} })
        }).catch(() => {
          this._resetForm()
        });
    },
    handleSubmit () {
      const { username, password, vCode, email } = this.ruleForm
      const router = this.$router
      const _this = this
      doRegister({ username, password, email, v_code: vCode }).then(data => {
        console.log(data)
        // router.push({ name: 'login',params: {username} })
        _this._confirm(username)
      }, err => _this.$message.error({
        message:err
      }))
    },
    getVcode () {
      const _this = this
      getVcode().then(
        data => {
          _this.vcode = data.v_code
        },
        err => console.log(err)
      )
    }
  }
}
</script>

<style lang="stylus">
.flex
  .el-form-item__error
    top: 40px
.captura
    display: inline-block
</style>
