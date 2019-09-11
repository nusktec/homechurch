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
    email: 'name@churcha2x.com',
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
    let login = {email: 'name@churcha2x.com', password: '12345'};
    let data = login; //{token: "9dcc3fbc9cc8e71dfcbfd308e741ce8c9760a6c4"}; //church_data; //{email: 'church@church.com', password: '12345'};
    this.axios.post('http://api.churcha2z.org/user/login/?ssk=' + ssk, login)
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
</script>
