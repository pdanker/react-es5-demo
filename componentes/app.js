'use strict';

var App = React.createClass({
    pid: 0,

    getInitialState: function() {
        return {rodando: false, concluido: false, segundos: 0};
    },

    render: function() {
        var className = "main";
        if (this.state.concluido) {
            className += " concluido";
        }
        return el('div', {className: className},
            el(Mensagem, {texto: (this.state.rodando?
                    "Falta " + this.state.segundos + " segundos":
                    "Digite o tempo (segundos)")
            }),
            el(InputNum, {val: this.state.segundos, onChange: this.inputChange, disabled: this.state.rodando}),
            el('button', {onClick: this.handleClick}, this.state.rodando? "Parar": "Iniciar")
        );
    },

    inputChange: function(e) {
        this.setState({segundos: e.currentTarget.value});
    },

    handleClick: function(e) {
        var rodando = !this.state.rodando;
        if (rodando) {
            this.pid = setTimeout(this.tick, 1000);
        } else {
            clearInterval(this.pid);
        }
        this.setState({rodando: rodando, concluido: false});
    },

    tick: function() {
        var segundos = parseInt(this.state.segundos) - 1;
        this.setState({segundos: segundos});
        console.log(segundos);

        if (segundos > 0) {
            this.pid = setTimeout(this.tick, 1000);
        } else {
            this.setState({rodando: false, concluido: true});
        }
    }

});
