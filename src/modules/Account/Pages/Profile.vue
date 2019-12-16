<template>
    <table class="table table-striped">
      <tbody>
        <tr>
          <th>First Name</th>
          <td>{{firstName}}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{{lastName}}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{email}}</td>
        </tr>
      </tbody>
    </table>
</template>
<script>
import { PROFILE_QUERY } from '@/constants/graphql.ts'
export default {
  components: {
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      isProcessing: false
    }
  },
  created () {
    this.fetchProfile()
  },
  methods: {
    fetchProfile () {
      this.isProcessing = true
      this.$apollo
        .query({
          query: PROFILE_QUERY
        })
        .then(response => {
          // save user token to localstorage
          if (response.errors !== undefined && response.errors.length > 0) {
            const { errors } = response
            this.flashError(errors[0].message)
          } else {
            console.log(response.data)
            const { firstName, lastName, email } = response.data.Me
            this.firstName = firstName
            this.lastName = lastName
            this.email = email
            // this.$data = { firstName, lastName, email }
            // this.$store.dispatch('performLogin', { accessToken, name, email })
            this.isProcessing = false
            // redirect user
            // this.$router.replace('/student/dashboard')
          }
        }).catch(err => {
          this.flashError(err.message)
        })
    }
  }
}
</script>
