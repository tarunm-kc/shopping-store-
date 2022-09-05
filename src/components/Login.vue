<template>
  <div class="app">
  <div class="row">
    <div class="d-none d-md-flex col-md-2 col-lg-n5 bg-image"></div>
    <div class="col-md-8 col-lg-8">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">Welcome back!</h3>

              <!-- Sign In Form -->
              <form @submit="onSubmit">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="username" required>
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" required>
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                  <label class="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>

                <div class="d-grid">
                  <button 
                  class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" 
                  type="submit" 
                  :disabled="loginCheck">
                  Sign in
                </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import router from '../router'

export default {
    name: "login",
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
                router.push('./home')
            }
        },
        computed: {
            loginCheck() {
                return this.username.length > 0 && this.password.length > 0 ? false : true
            } 
        }
    }
</script>
