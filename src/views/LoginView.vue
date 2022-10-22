<template>
  <div>
    <NavBar class="z-index-1000" />

    <div class="container py-5 my-5 card card-body">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-5 col-lg-7 col-xl-6 d-none d-md-block">
          <section class="bg-image bg-img rounded-5 shadow"></section>
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <h2 class="text- text-primary mt-2 mb-4">Login</h2>

          <form role="form" @submit.prevent="login">
            <div class="form-outline">
              <input
                type="text"
                id="email"
                class="form-control"
                v-model="user.email"
                @keyup="validateEmail"
              />
              <label class="form-label" for="form1email">Email</label>
            </div>
            <div
              class="text-danger"
              :class="{
                'mb-3': !formHelper.email,
                'mb-1': formHelper.email,
              }"
            >
              {{ formHelper.email }}
            </div>

            <div class="form-outline">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                class="form-control"
                v-model="user.password"
                @keyup="validatePassword"
              />
              <label class="form-label" for="password">Password</label>
            </div>
            <div
              class="text-danger"
              :class="{
                'mb-2': !formHelper.password,
                'mb-1': formHelper.password,
              }"
            >
              {{ formHelper.password }}
            </div>

            <!-- show password -->
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="showPassword"
                id="showPassword"
              />
              <label class="form-check-label" for="showPassword"
                >Show Password</label
              >
            </div>

            <!-- bypass validation -->
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="bypassValidation"
                id="bypassValidation"
              />
              <label class="form-check-label" for="bypassValidation"
                >Bypass Validation</label
              >
            </div>

            <div class="d-flex justify-content-center gap-3">
              <button
                type="submit"
                class="btn btn-primary"
                :class="
                  user.email && user.password && validated
                    ? ''
                    : bypassValidation
                    ? ''
                    : 'disabled'
                "
              >
                Submit
              </button>

              <button type="reset" class="btn btn-warning" @click="resetForm">
                Reset
              </button>
            </div>
            <p class="note note-success mt-4">
              <strong>Note:</strong>The Validation and the data needed as pe
              rthe api and the task are completely different. In order to
              succesfully run the operations as per assignment, toggle 'Bypass
              Validation'.
            </p>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="errorModal"
      data-mdb-backdrop="static"
      data-mdb-keyboard="false"
      tabindex="-1"
      aria-labelledby="errorModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-danger" id="errorModalLabel">Error</h5>
          </div>
          <div class="modal-body">{{ modalMessage }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Input, Modal } from 'mdb-ui-kit'
import NavBar from '@/components/NavBar/index.vue'

export default {
  name: 'LoginView',

  components: {
    NavBar,
  },

  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      showPassword: false,
      bypassValidation: false,
      validated: false,
      modalMessage: '',

      formHelper: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    isValidated() {
      if (!this.bypassValidation) {
        if (!this.formHelper.email && !this.formHelper.password) {
          this.validated = true
        } else {
          this.validated = false
        }
      } else {
        this.validated = true
      }
    },

    validateEmail() {
      if (!this.bypassValidation) {
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
        if (this.user.email.length == 0) {
          this.formHelper.email = 'required'
          this.isValidated()
        } else if (!re.test(this.user.email)) {
          this.formHelper.email = 'must be a valid email'
          this.isValidated()
        } else {
          this.formHelper.email = ''
          this.isValidated()
        }
      } else {
        this.formHelper.email = ''
        this.isValidated()
      }
    },

    validatePassword() {
      if (!this.bypassValidation) {
        if (this.user.password.length == 0) {
          this.formHelper.password = 'required'
          this.isValidated()
        } else if (!/[a-z]/.test(this.user.password)) {
          this.formHelper.password = 'atleast 1 lowercase'
          this.isValidated()
        } else if (!/[A-Z]/.test(this.user.password)) {
          this.formHelper.password = 'atleast 1 uppercase'
          this.isValidated()
        } else if (!/[0-9]/.test(this.user.password)) {
          this.formHelper.password = 'atleast 1 number'
          this.isValidated()
        } else if (
          !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.user.password) // eslint-disable-line
        ) {
          this.formHelper.password = 'atleast 1 special character'
          this.isValidated()
        } else if (this.user.password.length < 8) {
          this.formHelper.password = 'atleast 8 characters long'
          this.isValidated()
        } else {
          this.formHelper.password = ''
          this.isValidated()
        }
      } else {
        this.formHelper.password = ''
        this.isValidated()
      }
    },

    async login() {
      const api = 'https://restful-booker.herokuapp.com/auth'

      let user = { ...this.user }

      if (this.bypassValidation) {
        user.username = user.email
        delete user.email
      }

      try {
        this.axios
          .post(api, user)
          .then((resp) => {
            console.log(resp.data)
            const token = resp.data.token
            this.$store.commit('setToken', token)
            this.$router.push('/product/list')
          })
          .catch((resp) => {
            if (resp.response.data.reason) {
              console.log(resp.response.data.reason)
              this.modalMessage = resp.response.data.reason
            } else {
              console.log(resp.response.data)
              this.modalMessage = resp.response.data
            }

            const myModalEl = document.getElementById('errorModal')
            const modal = new Modal(myModalEl)
            modal.show()
          })
      } catch (error) {
        console.log(error)
        this.modalMessage = error.response.data
        const myModalEl = document.getElementById('errorModal')
        const modal = new Modal(myModalEl)
        modal.show()
      }
    },

    resetForm() {
      this.user.email = ''
      this.user.password = ''
      this.formHelper.email = ''
      this.formHelper.password = ''
      this.showPassword = false
      this.bypassValidation = false
    },
  },

  mounted() {
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new Input(formOutline).init()
    })
  },
}
</script>

<style scoped>
.bg-img {
  background-image: url('@/assets/image/img_2.jpg');
  background-size: cover;
  height: 80vh;
  margin-top: -5rem;
}

.mask {
  background-color: rgba(54, 53, 53, 0.6);
  backdrop-filter: blur(8px);
}
</style>
