using QuickBuy.Dominio.Contratos;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Repositorio.Repositorio
{
    public class BaseRepositorio<TEnTity> : IBaseRepositorio<TEnTity> where TEnTity : class
    {

        protected readonly QuickBuyContexto QuickBuyContexto;
        public BaseRepositorio(QuickBuyContexto quickBuyContexto)
        {
            QuickBuyContexto = quickBuyContexto;
        }

        public void Adicionar(TEnTity entity)
        {
            QuickBuyContexto.Set<TEnTity>().Add(entity);
            QuickBuyContexto.SaveChanges();
        }

        public void Atualizar(TEnTity entity)
        {
            QuickBuyContexto.Set<TEnTity>().Update(entity);
            QuickBuyContexto.SaveChanges();
        }

        public TEnTity ObterPorId(int id)
        {
           return QuickBuyContexto.Set<TEnTity>().Find(id);
        }

        public IEnumerable<TEnTity> ObterTodos()
        {
            return QuickBuyContexto.Set<TEnTity>().ToList();
        }

        public void Remover(TEnTity entity)
        {
            QuickBuyContexto.Remove(entity);
            QuickBuyContexto.SaveChanges();
        }

        public void Dispose()
        {
            QuickBuyContexto.Dispose();
        }
    }
}
