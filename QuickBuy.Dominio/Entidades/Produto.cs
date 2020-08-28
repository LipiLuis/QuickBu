using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Descricao{ get; set; }

        public decimal Preço { get; set; }

        public override void Validate()
        {
            if(Preço == 0)
            {
                AdicionarCritica("Não a nenhum valor");
            }
            if (string.IsNullOrEmpty(Descricao))
            {
                AdicionarCritica("Não a nenhuma descrição do produto selecionado");
            }
        }
    }
}
