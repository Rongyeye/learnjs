<template>
  <div id="app">
    {{message}}
  </div>
</template>

<script>
// export default{

//   data(){
//     return{
//       message:new Data().toLocalString
//     }
//   }
// }
new Vue({
  el: '#app',
  data: {
    message: new Date().toLocaleString
  }
})
</script>
