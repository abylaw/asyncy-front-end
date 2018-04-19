const hideMessage = (el) => {
  el.classList.add('pageclip--hidden');
}

const showMessage = (el, message) => {
  el.innerText = message;
  el.classList.remove('pageclip--hidden');
}

const createPageClipForms = () => {
  const elements = document.getElementsByClassName('pageclip-form');
  for (let form of elements) {
    const messageEl = form.querySelector('.pageclip-message');
    messageEl.classList.add('pageclip--fadeInOut', 'pageclip--hidden');

    window.Pageclip.form(form, {
      onSubmit: function (event) {
        hideMessage(messageEl)
      },
      onResponse: function (error, response) {
        const message = error ? 'An error occurred. Please try again.' : 'Thank you!';
        showMessage(messageEl, message);
        setTimeout(() => {
          hideMessage(messageEl);
        }, 2000);
        return false;
      },
    });
  }
}

exports.onRouteUpdate = () => {
  // setTimeout neccessary for it to work on develop, to allow 
  // time for rendering to happen
  setTimeout(createPageClipForms, 0);
}