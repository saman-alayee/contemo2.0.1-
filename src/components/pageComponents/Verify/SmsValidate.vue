<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12 pt-5" style="margin-top: -8%">
        <img class="card-img-top" src="@\assets\key.webp" alt="" />
      </div>
      <div class="col-md-6 sm-12 pt-5 box-login" style="margin-top: -2%">
        <router-link to="/Signup">
          <li type="button" class="btn">
            بازگشت و اصلاح شماره تلفن
          </li></router-link
        >
        <!-- Pills navs -->
        <p class="text-danger">{{ validate }}</p>

        <!-- Pills content -->
        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <div>
              <!-- Email input -->
              <div class="form-outline mb-4 mt-2">
                <input
                  type="text"
                  id="loginName"
                  class="form-control"
                  v-model="code"
                  @keydown.enter="enter"
                  placeholder="کد ارسال شده رو اینجا بنویسید."
                  style="height: 4rem; border-radius: 1rem"
                />
              </div>
              <h5 v-if="timeChceker == true" class="text-center mb-4 mt-2">
                زبان باقی مانده :{{ time }} ثانیه
              </h5>
              <button
                v-if="this.check == 'send'"
                type="button"
                @click="sendAgain"
                class="btn text-dark w-100 mb-4"
              >
                ارسال دوباره‌ی کد
              </button>

              <button
                type="submit"
                @click="sendCode"
                class="btn btn-primary w-100 btn-block btn-login mb-4"
              >
                احراز هویت
              </button>

              <div
                v-if="!Loading"
                class="spinner-border text-primary"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      timeChceker: true,
      email: "",
      Loading: true,
      password: "",
      validate: "",
      validateEmail: "",
      validatePassword: "",
      myPhone: "",
      code: "",
      time: 120,
      check: "",
    };
  },
  methods: {
    signup() {
      this.$router.push("/login");
    },
    sendCode() {
      this.validate="",
      this.myPhone = localStorage.getItem("Phone");
      axios
        .get(
          `http://cvmo.ir:8000/verify_phone/${this.myPhone}/${this.code}/`,
          {}
        )
        
        .then((res) => {
          console.log(res.status);
          this.$router.push("/login");
        })
        .catch((err) => {
          if (err.response.data.detail) {
            this.validate = "کد وارد شده صحیح نمی باشد";
          }
        });
    },
    sendAgain() {
      this.check = "sent";
      axios
        .get(`http://192.168.1.110/api/send_sms_code/${this.myPhone}`, {})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    enter(e) {
      if (e.key === "Enter") {
        this.sendCode();
       
      }
    },
  },
  created() {
    this.myPhone = localStorage.getItem("Phone");
    axios
      .get(`http://cvmo.ir:8000/send_sms_code/${this.myPhone}`, {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setInterval(() => {
      this.time--;
      if (this.time == 0) {
        this.timeChceker = false;
        this.check = "send";
        this.time = 0;
      } else if (this.check == "sent") {
        this.check = "";
        this.timeChceker = true;
        this.time = 120;
      }
    }, 1000);
  },
};
</script>

<style scoped>
.main {
  background-color: #eff7fd;
  font-family: "yekanbakh";
  height: 100%;
}
.box-login {
  padding: 19px 20px;
  border: none;
  border-radius: 8px;
  background-color: #ffffff;
  height: 100%;
}
.btn-login {
  background-color: #0d6efd;
  border-radius: 8px;
  border: none;
}
.forgot {
  text-decoration: none;
  color: #010101;
  margin-top: 5%;
}
</style>