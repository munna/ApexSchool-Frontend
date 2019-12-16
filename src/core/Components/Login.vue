<template>
    <section class="section">
        <div class="row">
            <div class="col-4 offset-4">
                <h2 class="title text-center">Login</h2>

                <form method="POST" @submit.prevent="login">
                    <div class="field">
                        <label class="label">E-Mail Address</label>

                        <p class="control">
                            <input
                                type="email"
                                class="form-control"
                                v-model="email">
                        </p>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>

                        <p class="control">
                            <input
                                type="password"
                                class="form-control"
                                v-model="password">
                        </p>
                    </div>
                    <div class="field">
                      <flash-message class="myCustomClass"></flash-message>

                    </div>
                    <p class="control">
                        <custom-button onClick="login" isProcessing="isProcessing" name="login" class="btn btn-primary">Login</custom-button>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { LOGIN_MUTATION } from '@/constants/graphql.ts'
import Button from '@/core/Components/Button'

export default {
  components: {
    'custom-button': Button
  },
  name: 'LogIn',
  data () {
    return {
      email: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    login () {
      this.isProcessing = true
      this.$apollo
        .mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          // save user token to localstorage
          if (response.errors !== undefined && response.errors.length > 0) {
            const { errors } = response
            this.flashError(errors[0].message)
          } else {
            const { accessToken, name, email } = response.data.Login
            this.$store.dispatch('performLogin', { accessToken, name, email })
            this.isProcessing = false
            // redirect user
            this.$router.replace('/student/dashboard')
          }
        }).catch(err => {
          this.flashError(err.message)
        })
    }
  }
}
</script>
