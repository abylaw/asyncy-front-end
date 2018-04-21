import * as typeformEmbed from '@typeform/embed'

exports.onInitialClientRender = (_, pluginOptions) => {
  setTimeout(() => {
    Object.keys(pluginOptions.forms).map((reference) => {
      const modal = document.createElement('div');
      const innerDiv = document.createElement('div');
      const close = document.createElement('div');
      const closeText = document.createTextNode('×');

      close.appendChild(closeText);
      close.setAttribute('style', `
        position: fixed;
        top: 3vh;
        right: 5vw;
        padding: 10px;
        font-weight: bold;
        font-size: 30px;
        cursor: pointer;
      `);
      
      close.onclick = () => { window.typeform[reference].close() }

      innerDiv.setAttribute('style', `
        background: #1B1C28;
        width: 90vw;
        height: 90vh;
        padding: 25px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `);
      innerDiv.setAttribute('id', pluginOptions.forms[reference]);
      
      modal.setAttribute('id', `${pluginOptions.forms[reference]}-parent`);
      modal.setAttribute('style', 'display: none;')
      
      modal.appendChild(innerDiv);
      modal.appendChild(close);
      document.body.appendChild(modal);

      typeformEmbed.makeWidget(
        document.querySelector('#' + pluginOptions.forms[reference]),
        `https://${pluginOptions.domain}.typeform.com/to/${pluginOptions.forms[reference]}`,
        {
          hideHeaders: true,
          hideFooters: true,
        }
      );
    })

  }, 0);

  window.typeform = {}

  Object.keys(pluginOptions.forms).map((reference) => {
    window.typeform[reference] = {}
    window.typeform[reference].open = () => {
      document.querySelector(`#${pluginOptions.forms[reference]}-parent`)
        .setAttribute('style', 'display: block')
    }
    window.typeform[reference].close = () => {
      document.querySelector(`#${pluginOptions.forms[reference]}-parent`)
        .setAttribute('style', 'display: none')
    }
  })
}