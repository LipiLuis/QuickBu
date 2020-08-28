using QuickBuy.Dominio.Enumerados;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.ObjetoDeValor
{
    public class FormaPagamento
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Descricao { get; set; }

        public bool EhBoleto
        {
            get { return Id == (int)TipoFormaPagamenoEnum.Boleto;  }
        }

        public bool EhCartaoCredito
        {
            get { return Id == (int)TipoFormaPagamenoEnum.CartaoCredito; }
        }

        public bool EhDeposito
        {
            get { return Id == (int)TipoFormaPagamenoEnum.Deposito; }
        }

        public bool Naodefinido
        {
            get { return Id == (int)TipoFormaPagamenoEnum.Naodefinido; }
        }

    }
}
