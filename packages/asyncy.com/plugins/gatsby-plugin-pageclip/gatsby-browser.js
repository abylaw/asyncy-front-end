import validate from 'validate.js'

const resetButtonText = (button) => {
  if (button.dataset.originalText) {
    button.innerHTML = `<span>${button.dataset.originalText}</span>`
  } else {
    button.dataset.originalText = button.textContent;
  }
}

const showSuccess = (form, button, successClass, successMsg) => {
  form.classList.add(successClass);
  button.innerHTML = `<span>${successMsg}</span>`;
}

const showError = (form, errorContainer, errorClass, errorMsg) => {
  form.classList.add(errorClass);
  errorContainer.textContent = errorMsg;
}

const formConstraints = {
  email: {
    email: {
      message: 'Please enter a valid email address.'
    }
  }
}

exports.onRouteUpdate = (_, pluginOptions) => {
  const successClass = pluginOptions.successClass;
  const errorClass = pluginOptions.errorClass;
  const errorMessageContainerClass = pluginOptions.errorMessageContainerClass;
  const successMessage = pluginOptions.successMessage;

  setTimeout(() => {
    const forms = document.getElementsByClassName('pageclip-form-custom');

    for (const form of forms) {
      window.Pageclip.form(form, {
        onSubmit() {
          const input = form.getElementsByTagName('input').email;
          const button = form.getElementsByTagName('button').submit;
          const errorContainer = form.getElementsByClassName(errorMessageContainerClass)[0];

          resetButtonText(button);
          form.classList.remove(errorClass);
          form.classList.remove(successClass);
          errorContainer.textContent = '';

          const hasError = validate({ email: input.value }, formConstraints);

          if (hasError) {
            showError(form, errorContainer, errorClass, hasError.email.join(', ').replace('Email ', ''));
            setTimeout(() => {
              button.classList.remove('pageclip-form__submit--loading');
              button.disabled = false;
            }, 300);
            return false;
          } else {
            return true;
          }
        },
        onResponse(error, response) {
          const errorContainer = form.getElementsByClassName(errorMessageContainerClass)[0];
          const button = form.getElementsByTagName('button').submit;

          if (!error) {
            showSuccess(form, button, successClass, successMessage);
          } else {
            showError(form, errorContainer, errorClass, 'There was an error submitting your data. Please try again.');
          }
          return false;
        },
      })
    }
  }, 0);
}