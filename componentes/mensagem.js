'use strict';

var Mensagem = React.createClass({
  render: function() {
    return el('h1', null, this.props.texto);
  }
});
