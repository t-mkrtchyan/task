<template>
  <div class="container-fluid">
    <h2 class="top-title">
      <feather :type="icon" class="top m-r-5"></feather>
      {{ title }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      default: 'home'
    },
    main: {
      default: ''
    },
    icon: {
      default: ''
    }
  },
}
</script>
