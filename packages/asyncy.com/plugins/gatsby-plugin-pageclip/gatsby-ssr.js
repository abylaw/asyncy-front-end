exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8" async></script>,
    <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen"/>,
    <style type="text/css" dangerouslySetInnerHTML={{__html: `
      .pageclip--fadeInOut {
        transition-duration: 0s, 200ms;
        transition-property: visibility, opacity;
        transition-delay: 0s;
      }

      .pageclip--fadeInOut.pageclip--hidden {
        visibility: hidden;
        opacity: 0;
        transition-duration: 200ms, 0s;
        transition-property: opacity, visibility;
        transition-delay: 0s, 200ms;
      }
    `}}/>
  ])
}