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

  let church_data = {
    name: 'Church Name',
    email: 'church@church.com',
    phone: '08123456788/church phone',
    founder: 'Founder name',
    password: '12345',
    country: 'Church Location/Country',
    state: 'Church Location/State',
    street: 'Church street/address/home',
  };

  //testing data
  function testAxios() {
    let ssk = '801fe414298dc26cbd0f7f52cca001fc928142bd';
    let data = church_data; //{token: "9dcc3fbc9cc8e71dfcbfd308e741ce8c9760a6c4"}; //church_data; //{email: 'church@church.com', password: '12345'};
    this.axios.post('http://localhost:3000/church/get/?ssk=' + ssk, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
</script>
