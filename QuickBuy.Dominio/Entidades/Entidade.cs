using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {

        private List<string> _mensagenValidacao { get; set; }

        private List<string> mensagenValidacao 
        { 
            get { return _mensagenValidacao ?? (_mensagenValidacao = new List<string>()); }
        }

        protected void LimparMensagenValidacao()
        {
            mensagenValidacao.Clear();
        }

        protected void AdicionarCritica(string mensagem)
        {
            mensagenValidacao.Add(mensagem);
        }

        public string ObterMensagensValidacao()
        {
            return string.Join(". ", mensagenValidacao);
        }

        public abstract void Validate();
        public bool EhValido
        {
            get { return !mensagenValidacao.Any();  }
        }
    }
}
