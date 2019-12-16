<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">APEX School</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'student-admission' }"
          >
            Admission
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'student-dashboard' }"
          >
            Dashboard
          </router-link>
        </li>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="user.name!=''">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>{{user.name}}</em>
          </template>
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'account-profile' }"
          >
            Profile
          </router-link>
          <b-dropdown-item href="#" onclick="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <li class="nav-item"  right v-if="user.name==''">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'login' }"
          >
            Login
          </router-link>
        </li>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapState } from 'vuex'
// import { store } from "@/store/index.ts";

export default {
  props: {
    user: {}
  },
  data: function () {
    // const { user } = this.$store.state
    // return { user }
  },
  computed: {
    ...mapState({
      user: state => state.user
    }),
    number: function () {
      return 'Munna bhakta'
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('app-token')
    }
  }
}
</script>
