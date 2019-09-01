<template>
    <div>
        <notifications position="top center" group="alert"/>
        <vue-topprogress ref="topProgress"></vue-topprogress>
        <Meta-Data :title='title'/>
        <router-view/>
    </div>
</template>
<script>
  import MetaData from './../components/extra/MetaData';
    export default {
      components: {
        MetaData,
      },
      data(){
        return{
          title: this.$router.currentRoute.meta.title
        }
      }
    }
</script>
