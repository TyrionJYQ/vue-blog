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
    </JForm>
  </div>
</template>

<script>
import JForm from "@base/jform/JForm"
import { mapMutations  } from 'vuex'
import { genValidator } from "@helper/ele"
import { doLogin } from "@api/user"
import { LOGGIN, AFTER_LOGIN } from '@store/mutation-types'
export default {
  components: {
    JForm
  },
  data () {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: {
          ...genValidator("用户名不能为空")
        },
        password: {
          ...genValidator("密码不能为空")
        }
      }
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.login.isLogin
    }
  },
  created () {
    this.option = {
      confirmText: "登录"
    }
  },
  beforeRouteEnter({params:{username}}, from, next) {
    next(vm => {
      if(username) {
        vm.ruleForm.username = username
      }
    })
  },
  methods: {
    ...mapMutations([LOGGIN, AFTER_LOGIN]),
    handleSubmit () {
      const _this = this
      this[LOGGIN]()
      const { username, password } = this.ruleForm;
      const router = this.$router;
      doLogin({ username, password }).then(data => {
        _this[AFTER_LOGIN]()
         _this.$message.success({message:'登录成功', onClose: () => router.push({ name: "main" })})
      }, error => alert(error.toString()))
    }
  }
};
</script>

<style lang="stylus"></style>
