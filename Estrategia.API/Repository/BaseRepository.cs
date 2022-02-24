using Estrategia.API.Contexto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace Estrategia.API.Repository
{
    public class BaseRepository<T, TContext> : IRepository<T>
        where T : class
        where TContext : DbContext
    {
        protected readonly EstrategiaContext contexto;

        public BaseRepository(EstrategiaContext _contexto)
        {
            this.contexto = _contexto;
        }

        public void Dispose()
        {
            this.Dispose();
        }

        public T Add(T entity)
        {
            contexto.Set<T>().Add(entity);
            contexto.SaveChanges();
            return entity;
        }

        public T GetById(int id)
        {
            return contexto.Set<T>().Find(id);
        }

        public T Update(T entity)
        {
            contexto.Entry<T>(entity).State = EntityState.Modified;
            contexto.SaveChanges();
            return entity;
        }

        public IQueryable<T> Query()
        {
            return contexto.Set<T>();
        }

        public void Remove(T item)
        {
            contexto.Set<T>().Remove(item);
            contexto.SaveChanges();
        }
    }
}
