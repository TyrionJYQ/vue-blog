export const genValidator = (msg, triggerType) => ({
  validator: (rule, value, callback) => {
    if (!value) {
      return callback(new Error(msg))
    }
    callback()
  },
  trigger: triggerType || 'blur'
})
