'use strict';

var InputNum = React.createClass({
  render: function() {
    return el('input', {type: "number", value: this.props.val,
        disabled: this.props.disabled, onChange: this.props.onChange});
  }
});
