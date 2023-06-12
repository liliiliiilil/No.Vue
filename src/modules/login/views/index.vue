<template>
  <div class="login-wrap">
    <div class="left item"></div>
    <div class="right item">
      <div class="special-wrap">
        <no-special></no-special>
      </div>
      <h1 class="title">
        <span>No.Vue</span>
        <br />
        <span style="margin-left: 200px">- XINNIGS</span>
      </h1>

      <el-form
        class="form-block"
        label-position="top"
        label-width="100px"
        :model="form"
        style="max-width: 460px"
      >
        <el-form-item>
          <el-radio-group v-model="form.type">
            <el-radio-button label="Account">{{
              $t("login.Account")
            }}</el-radio-button>
            <el-radio-button label="Email">{{
              $t("login.Email")
            }}</el-radio-button>
            <el-radio-button label="Phone">{{
              $t("login.Phone")
            }}</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <template v-if="form.type === 'Account'">
          <el-form-item :label="$t('login.Account')">
            <el-input
              v-model="form.account"
              :placeholder="
                $t('global.pleaseInput', { name: $t('login.Account') })
              "
            />
          </el-form-item>
          <el-form-item :label="$t('login.Password')">
            <el-input
              type="password"
              show-password
              v-model="form.password"
              :placeholder="
                $t('global.pleaseInput', { name: $t('login.Password') })
              "
            />
            <el-text style="margin-left: auto">
              {{ $t("login.ForgotPassword") }}</el-text
            >
          </el-form-item>
        </template>
        <template v-if="form.type === 'Email'">
          <el-form-item :label="$t('login.Email')">
            <el-input
              v-model="form.email"
              :placeholder="
                $t('global.pleaseInput', { name: $t('login.Email') })
              "
            />
          </el-form-item>
          <el-form-item :label="$t('login.Captcha')">
            <el-input
              v-model="form.captcha"
              :placeholder="
                $t('global.pleaseInput', { name: $t('login.Captcha') })
              "
            >
              <template #append>
                <el-button type="primary">{{ $t("login.Send") }}</el-button>
              </template>
            </el-input>
            <el-text style="margin-left: auto">&nbsp;</el-text>
          </el-form-item>
        </template>
        <template v-if="form.type === 'Phone'">
          <el-form-item :label="$t('login.Phone')">
            <el-input
              v-model="form.phone"
              :placeholder="
                $t('global.pleaseInput', { name: $t('login.Phone') })
              "
            />
          </el-form-item>
          <el-form-item :label="$t('login.Captcha')">
            <el-input
              v-model="form.captcha"
              :placeholder="
                $t('global.pleaseInput', { name: $t('login.Captcha') })
              "
            >
              <template #append>
                <el-button type="primary">{{ $t("login.Send") }}</el-button>
              </template>
            </el-input>
            <el-text style="margin-left: auto">&nbsp;</el-text>
          </el-form-item>
        </template>
        <el-form-item class="operate-button">
          <el-button type="primary" @click="onLogin"
            >{{ $t("login.Login") }}
          </el-button>
          <el-button type="primary" plain>
            {{ $t("login.Register") }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
const form = reactive({
  account: "admin",
  password: "admin2023",
  email: "xinnigs@gmail.com",
  phone: "",
  captcha: "",
  type: "Account",
});
const router = useRouter();
const onLogin = () => {
  router.replace("/helloworld");
};
onMounted(() => {});
</script>
<style lang="scss" scoped>
.login-wrap {
  border: 6px solid var(--el-color-primary);
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    var(--el-color-primary) 40%,
    var(--no-fill-color) 40%
  );
  display: flex;
  flex-direction: row;
  .item {
    height: 100%;
    &.left {
      width: 40%;
      background: url("../images/login.png");
      background-size: 100% 60%;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    &.right {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      .special-wrap {
        position: absolute;
        top: 10px;
        right: 24px;
      }
      .title {
        margin-bottom: 24px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        font-weight: bolder;
        padding: 0 12px;
        color: var(--el-color-primary);
        user-select: none;
        &:hover {
          border-bottom: 2px solid var(--el-color-primary);
        }
      }
      .form-block {
        width: 60%;
        margin-bottom: 24px;
        .operate-button {
          .el-button {
            width: 100%;
          }
          .el-button + .el-button {
            margin-left: 0px;
            margin-top: 12px;
          }
        }
      }
    }
  }
}
</style>
