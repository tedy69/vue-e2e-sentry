<template>
  <v-app>
    <v-container fill-height="fill-height" fluid>
      <v-img
        src="../assets/images/background.png"
        style="width: 100%; height: 100%; position: absolute; top: 0; left: 0"
      >
        <v-row>
          <v-col cols="3">
            <v-img
              src="../assets/logo.svg"
              width="100"
              class="ml-10 mt-6"
            ></v-img>
            <hr dark class="ml-10 my-4" />
            <p class="ml-10 white--text" v-if="$vuetify.breakpoint.mdAndUp">
              Flood Monitoring System merupakan dashboard pantauan banjir.
            </p>
          </v-col>
        </v-row>
        <v-row
          class="flex-row-reverse"
          style="bottom: 10px; right: 20px; position: absolute"
        >
          <v-col>
            <p class="mr-10 white--text">FMS All rights Reserved.</p>
          </v-col>
        </v-row>
      </v-img>

      <v-layout align-center>
        <v-flex class="text-center">
          <v-row justify="center">
            <v-col cols="10" sm="6" md="5" lg="3">
              <v-card class="rounded-xl pa-4">
                <v-card-title
                  ><v-spacer>
                    <h3 class="font-weight-black">Login</h3></v-spacer
                  ></v-card-title
                >
                <v-card-text>
                  <v-form @submit="loginAction">
                    <v-text-field
                      dense
                      label="Username"
                      v-model="input.username"
                      solo
                      flat
                      :rules="[(v) => !!v || 'Required.']"
                      class="rounded-xl transform-none"
                      :background-color="
                        $vuetify.theme.dark ? 'base' : '#E4EBF4'
                      "
                    >
                      <template v-slot:prepend-inner> </template>
                    </v-text-field>
                    <v-text-field
                      solo
                      flat
                      v-model="input.password"
                      :rules="[(v) => !!v || 'Required.']"
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show ? 'text' : 'password'"
                      @click:append="show = !show"
                      dense
                      label="Password"
                      class="rounded-xl transform-none"
                      :background-color="
                        $vuetify.theme.dark ? 'base' : '#E4EBF4'
                      "
                      ><template v-slot:prepend-inner> </template
                    ></v-text-field>
                    <v-btn
                      block
                      @click.prevent="loginAction"
                      type="submit"
                      class="text-capitalize rounded-xl font-weight-bold"
                      color="primary"
                      >Login</v-btn
                    >
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    show: false,
    loading: false,
    input: {
      username: '',
      password: '',
    },
    loginMessage: '',
    statusFlash: false,
    typeFlash: '',
  }),

  computed: {},

  watch: {},

  methods: {
    loginAction() {
      const { username, password } = this.input;
      if (username === 'tedy' && password === 'tedy') {
        this.input = { username: '', password: '' };
        alert('Login Success');
        localStorage.setItem('token', 'tedykajdsagkdhawj');
        this.$route.push({ name: 'home' });
      } else {
        this.input = { username: '', password: '' };
        alert('Login Failed');
        throw new Error('Login Failed Because Username or Password is Wrong');
      }
    },
  },
};
</script>

<style></style>
