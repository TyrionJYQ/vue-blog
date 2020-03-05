<template>
  <el-form
    ref="form"
    class="form"
    :model="model"
    :rules="rules"
    status-icon
  >
    <slot />
    <el-form-item>
      <el-button
        type="primary"
        @click="onSubmit"
      >
        {{ opt.confirmText }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  // props: ['option', 'rules', 'model'],
  props: {
    option: {
      type: Object,
      default () {
        return Object.create(null)
      }
    },
    rules: {
      type: Object,
      default () {
        return Object.create(null)
      }
    },
    model: {
      type: Object,
      default () {
        return Object.create(null)
      }
    }
  },
  created () {
    this.mergeOption()
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$emit('submit')
          return true
        }
        return false
      })
    },
    mergeOption () {
      this.opt = Object.create(null)
      this.opt.confirmText = '确定'
      this.opt = { ...this.opt, ...this.option }
    }
  }
}
</script>

<style lang="stylus">
.form {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 300px;
  max-width: 450px;
  transform: translate(-50%, -50%);
}
</style>
