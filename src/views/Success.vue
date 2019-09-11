<template>
    <d-container fluid class="main-content-container px-4 pb-4">
        <!-- Error -->
        <div class="error">
            <div class="error__content p-4" style="background-color: white">
                <h5>Successful !</h5>
                <h3>{{title}}</h3>
                <p>{{msg}}</p>
                <router-link :to="link">
                    <d-button pill>{{btn}}</d-button>
                </router-link>
            </div>
        </div>
    </d-container>
</template>
<script>
  export default {
    data() {
      return {
        title: '',
        msg: '',
        btn: 'Go Home',
        link: '/home'
      };
    },
   mounted () {
      if (!this.$router.currentRoute.query.data) {
        return;
      }
      let data = this.$router.currentRoute.query.data;
      console.log(atob(data)
        .split('~'));
      this.title = atob(data)
        .split('~')[0];
      this.msg = atob(data)
        .split('~')[1];
      this.btn = atob(data)
        .split('~')[2];
      this.link = atob(data)
        .split('~')[3];
    }
  };
</script>
