 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<style lang="less">
    .container{
      width: 350px;
      label {
        width: 100%;
        a {
          cursor: pointer;
        }
      }
      .g-login{
        margin: 15px 0 0;
      }
      p{
        margin: 0;
      }
      .horizontal-divider{
        position: relative;
        margin: 15px 0 0;
        border-top: solid 1px #ddd;
        span {
          position: absolute;
          top: -12px;
          left: 150px;
          z-index: 100;
          background: #fff;
          padding: 0 5px;
          color: #777;
        }
      }
    }
</style>

<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center">Login</h1>
      <div class="panel panel-default">
        <div class="panel-body">
              <div class="form-group">
                <label for="loginEmail">Email address</label>
                <input type="email" class="form-control" id="loginEmail" placeholder="Email" v-model="user.email">

              </div>
              <div class="form-group">
                <label for="loginPassword">Password <span class="pull-right"><a>forgot password?</a></span></label>
                <input type="password" class="form-control" id="loginPassword" placeholder="Password" v-model="user.password">
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Remember me
                </label>
              </div>
              <button class="btn btn-success btn-block text-center" v-on:click="login">Login</button>
              <div class="horizontal-divider">
                <span>or</span>
              </div>
              <button class="btn btn-danger btn-block text-center g-login">微信登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'cookie-cutter'
export default {
  ready () {
    if (typeof cookie.get('token') !== 'undefined') {
      this.$route.router.go('/home')
    }
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      this.$http.post(
      this.$parent.backend + 'login', // post uri
        {
          'email': this.user.email,
          'password': this.user.password
        }
      ).then((response) => {
        if (typeof response.headers('x-session-token') !== 'undefined') {
          cookie.set('token', response.headers('x-session-token'))
        } else {
          console.log(JSON.stringify(response.headers()))
        }
        this.$route.router.go('/') // success
      }, (response) => {
        console.log('error')
        this.$route.router.go('/') // success
      })
    }
  }
}
</script>
