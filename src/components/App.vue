<template>
  <div id="test">
    {{ msg }}
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'hello'
    }
  }
}
</script>

<style>

#test {
  column-count: 4;
}

</style>
