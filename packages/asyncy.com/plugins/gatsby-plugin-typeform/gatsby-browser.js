import * as typeformEmbed from '@typeform/embed'

exports.onInitialClientRender = (_, pluginOptions) => {
  const forms = {};

  Object.keys(pluginOptions.forms).map((reference) => {
    return forms[reference] = typeformEmbed.makePopup(
      `https://${pluginOptions.domain}.typeform.com/to/${pluginOptions.forms[reference]}`,
      {
        hideHeaders: true,
        hideFooters: true,
      }
    );
  });

  window.typeform = forms;
}