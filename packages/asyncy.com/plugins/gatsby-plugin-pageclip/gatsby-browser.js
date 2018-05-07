import validate from 'validate.js'

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
          let input = form.getElementsByTagName('input').email;
          let button = form.getElementsByTagName('button').submit;
          let errorContainer = form.getElementsByClassName(errorMessageContainerClass)[0];

          const oldInput = button.innerHTML;

          if (button.dataset.originalText) {
            button.innerHTML = `<span>${button.dataset.originalText}</span>`
          } else {
            button.dataset.originalText = button.textContent;
          }

          form.classList.remove(errorClass);
          form.classList.remove(successClass);
          errorContainer.textContent = '';

          const constraints = {
            email: {
              email: {
                message: 'Please enter a valid email address.'
              }
            }
          }

          const hasError = validate({ email: input.value }, constraints);

          if (hasError) {
            form.classList.add(errorClass);
            errorContainer.textContent = hasError.email.join(', ').replace('Email ', '');
            setTimeout(() => {
              button.classList.remove('pageclip-form__submit--loading');
              button.disabled = false;
            }, 200);
            return false;
          } else {
            return true;
          }
        },
        onResponse(error, response) {
          let errorContainer = form.getElementsByClassName(errorMessageContainerClass)[0];

          let button = form.getElementsByTagName('button');
          button = button.submit;

          if (!error) {
            form.classList.add(successClass);
            button.innerHTML = `<span>${successMessage}</span>`;
          } else {
            form.classList.add(errorClass);
            errorContainer.textContent = 'There was an error submitting your data. Please try again.';
          }
          return false;
        },
      })
    }
  }, 0);
}