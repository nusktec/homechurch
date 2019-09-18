<template>
    <d-container fluid class="main-content-container px-4 pb-4">
        <!-- Error -->
        <div class="error">
            <div class="error__content">
                <p>Testing Buttons</p>
                <d-button v-on:click="testData" size="sm" pill>&larr; Go Back</d-button>
            </div>
        </div>
    </d-container>
</template>
<script>
  export default {
    methods: {
      testData: testAxios,
    }
  };

  let account_data = {
    name: 'Account Name',
    email: 'nusktecsoft@gmail.com',
    phone: '08123456788',
    password: '12345',
    country: 'Account Location/Country',
    state: 'State',
    street: 'address/home',
  };

  //http://api.churcha2z.org

  //testing data
  function testAxios() {
    let ssk = '801fe414298dc26cbd0f7f52cca001fc928142bd';
    let login = {email: 'nusktecsoft@gmail.com', password: '12345'};
    let data = {token: "22b8a9e9930537edeaff9e6aaee43d3d7314c071", pass1: '123456', pass2: '12345'}; //church_data; //{email: 'church@church.com', password: '12345'};
    this.axios.post('http://api.churcha2z.org/user/request-psw-reset/?ssk=' + ssk, {email: 'nusktecsoft@gmail.com'})
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
</script>
