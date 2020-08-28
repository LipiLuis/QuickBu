using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }

        public DateTime DataPedido { get; set; }

        public int UsuarioId { get; set; }

        public virtual Usuario Usuario { get; set; }

        public DateTime  DataPrevisaoEntrega { get; set; }

        public string CEP { get; set; }

        public string Estado { get; set; }

        public string Cidade { get; set; }

        public string EnderecoCompleto { get; set; }

        public int NumeroEndereco { get; set; }

        public int FormaPagamentoId { get; set; }

        public virtual FormaPagamento FormaPagamento { get; set; }



        // pedido pode deve ter pelomenos um item de  pedido ou muito itens de pedidos
        public virtual ICollection<ItemPedido> itensPedido { get; set; }

        public override void Validate()
        {
            LimparMensagenValidacao();

            if (!itensPedido.Any())
            {
                AdicionarCritica("Critica - Pedido não pode ficar sem item de pedido");
            }
            if (string.IsNullOrEmpty(CEP))
            {
                AdicionarCritica("CEP deve estar preenchido");
            }
            if(FormaPagamentoId == 0)
            {
                AdicionarCritica("Critica - Não foi informado a forma de pagamento");
            }
        }
    }
}
