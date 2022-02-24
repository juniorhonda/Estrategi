using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Estrategia.API.Repository
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> Query();
        T GetById(int id);
        T Add(T entity);
        T Update(T entity);
        void Remove(T item);
    }
}
