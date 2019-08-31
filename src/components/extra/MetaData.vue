<template>
    <vue-headful :title='prefix+title' :description='desc'></vue-headful>
</template>
<script>
  import VueHeadful from 'vue-headful';

  export default {
    components: { VueHeadful },
    name: 'Meta-Data',
    props: {
      title: {
        type: String,
        default: 'Home'
      },
      desc: {
        type: String,
        default: 'Dunamis Home Church'
      },
      keys: {
        String,
        default: 'Dunamis,Home,Church,Chat,Location'
      }
    },
    data() {
      return {
        prefix: 'DHC | ',
      };
    }
  };
</script>
