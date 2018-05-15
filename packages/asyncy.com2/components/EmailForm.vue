<template>
  <form
    ref="form"
    :class="{ 'pageclip-form': true, 'success': isSuccess, 'error': isFailure }"
    action="https://send.pageclip.co/kPrlBqjZJ6s7Fjj4yU1GLwTjIUwQZYwj"
    method="post"
    :style="{
      marginBottom: '16px'
    }"
  >
    <div class='columns is-variable is-1' :style="{
      marginBottom: 0,
    }">
      <div class='column' :style="{
        paddingTop: 0,
        paddingBottom: 0,
      }">
        <input class='email-input' name='email' :placeholder="placeholder || 'Email address'" v-model="email" :style="Object.assign({
          width: '100%',
        }, inputStyle || {})"/>
        <div v-if="errorMsg" class='error-message' :style="{
          color: '#F74545',
          textAlign: 'left',
          fontSize: '0.8em',
        }">{{errorMsg}}</div>
      </div>
      <div class='column is-narrow' :style="{
        paddingTop: 0,
        paddingBottom: 0,
      }">
        <button ref='button' type='submit' name='submit' :style="Object.assign({
          width: '150px'
        }, btnStyle || {})" class='primary button pageclip-form__submit pageclip-form__submit--dark-loader'>
          <span>{{ buttonText }}</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import validate from 'validate.js';

const formConstraints = {
  email: {
    presence: true,
    email: true,
  }
};

export default {
  props: ['placeholder', 'inputStyle', 'btnText', 'btnStyle'],
  data() {
    return {
      isSuccess: false,
      isFailure: false,
      errorMsg: '',
      email: '',
      buttonText: this.btnText || 'Get notified',
    }
  },
  mounted() {
    const $this = this;
    setTimeout(() => {
      const form = $this.$refs.form;
      window.Pageclip.form(form, {
        onSubmit() {
          $this.isSuccess = false;
          $this.isFailure = false;
          $this.errorMsg = '';
          $this.buttonText = $this.$props.btnText || 'Get notified';

          const hasError = validate({ email: $this.email }, formConstraints);

          if (hasError) {
            $this.errorMsg = 'Please enter a valid email address.';
            $this.isFailure = true;

            setTimeout(() => {
              // deal with pageclip side-effects
              $this.$refs.button.classList.remove('pageclip-form__submit--loading');
              $this.$refs.button.disabled = false;
            }, 300);

            return false;
          } else {
            return true;
          }
        },
        onResponse(error, response) {
          if (error) {
            $this.isFailure = true;
            $this.errorMsg = 'There was an error submitting your data. Please try again.';
          } else {
            $this.isSuccess = true;
            $this.buttonText = 'Thanks!';
            $this.email = '';
          }
          return false;
        },
      });
    }, 0);
  },
};
</script>

<style scoped lang="styl">
.pageclip-form
  &.error .email-input
    border-color #F74545
  &.success .email-input
    border-color #3EC28F
  &.success button
    color #3EC28F !important
  .pageclip-form__submit--success
    color #3EC28F !important
</style>
