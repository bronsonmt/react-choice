import React from 'react/addons';

export default class Base extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>React Choice Demo</title>
          <link href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.0/styles/docco.min.css' rel='stylesheet' type='text/css'></link>
          <link href="css/index.css" rel="stylesheet"></link>
          <link href="css/choice/index.css" rel="stylesheet"></link>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
        </head>
        <body>
          <div id="app"></div>
          <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.0/highlight.min.js" charSet="utf-8"></script>
          <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.0/languages/javascript.min.js" charSet="utf-8"></script>
          <script src="build/index.js"></script>
        </body>
      </html>
    );
  }
}
