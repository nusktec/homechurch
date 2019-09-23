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
  let tKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhX2lkIjoxLCJhX25hbWUiOiJBY2NvdW50IE5hbWUiLCJhX2VtYWlsIjoibnVza3RlY3NvZnRAZ21haWwuY29tIiwiYV9waG9uZSI6IjA4MTIzNDU2Nzg4IiwiYV9wYXNzd29yZCI6IjhjYjIyMzdkMDY3OWNhODhkYjY0NjRlYWM2MGRhOTYzNDU1MTM5NjQiLCJhX2NvdW50cnkiOiJBY2NvdW50IExvY2F0aW9uL0NvdW50cnkiLCJhX3N0YXRlIjoiU3RhdGUiLCJhX3N0cmVldCI6ImFkZHJlc3MvaG9tZSIsImFfcm9sZSI6MCwiYV9lbmFibGUiOnRydWUsImFfZGF0ZSI6IjIwMTktMDktMTdUMDk6MTg6MDYuMDAwWiIsImFfdG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaFgybGtJam94TENKaFgyNWhiV1VpT2lKQlkyTnZkVzUwSUU1aGJXVWlMQ0poWDJWdFlXbHNJam9pYm5WemEzUmxZM052Wm5SQVoyMWhhV3d1WTI5dElpd2lZVjl3YUc5dVpTSTZJakE0TVRJek5EVTJOemc0SWl3aVlWOXdZWE56ZDI5eVpDSTZJamhqWWpJeU16ZGtNRFkzT1dOaE9EaGtZalkwTmpSbFlXTTJNR1JoT1RZek5EVTFNVE01TmpRaUxDSmhYMk52ZFc1MGNua2lPaUpCWTIiLCJjcmVhdGVkQXQiOiIyMDE5LTA5LTE3VDA5OjE4OjA2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE5LTA5LTIwVDE5OjIwOjM0LjAwMFoiLCJpYXQiOjE1NjkwMDc5NDYsImV4cCI6MTU2OTQzOTk0Nn0.R6KhHX_VZ9eHvoEy-GptA1p8NvxUdzwYqe5cqZ5FpWs';
  //add services
  let as = {
    token: tKey,
    isEnabled: true,
    serviceType: 1,
    rePurchased: true,
    email: 'churcha2z21@test.com',
    password: '12345',
  };
    let us = {
      token: tKey,
       us_address: "This is my new address",
       us_country: "Nigeria", 
      us_desc: "My new description", 
      us_email: "church1a2@gmail.com",
      us_logo: "http://google.com/logo.png",
       us_state: "FCT",
       us_title: "Intl Dunamis church",
      s_id: 1,
      isNew: true,
      us_password: "12345",
      identity: "DLRVB2ISJ",
    };
  //testing data
  function testAxios() {
    let ssk = '801fe414298dc26cbd0f7f52cca001fc928142bd';
    let login = {
      email: 'nusktecsoft@gmail.com',
      password: '12345'
    };
    let data = {
      token: '22b8a9e9930537edeaff9e6aaee43d3d7314c071',
      pass1: '123456',
      pass2: '12345'
    }; //church_data; //{email: 'church@church.com', password: '12345'};
    this.axios.post('http://api.churcha2z.org/services/login/?ssk=' + ssk, {email: "church1a2@gmail.com", password: "12345"})
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
</script>
