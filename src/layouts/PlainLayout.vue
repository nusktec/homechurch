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
  import store from './../store';
  import { mapState } from 'vuex';

  export default {
    components: {
      MetaData,
    },
    computed: mapState({
      title: state => state.title,
    }),
  };
</script>
