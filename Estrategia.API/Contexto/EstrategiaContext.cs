using Estrategia.API.Entity;
using Estrategia.API.EntityConfig;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Estrategia.API.Contexto
{
    public class EstrategiaContext : DbContext
    {
        public EstrategiaContext(DbContextOptions options) : base(options)
        {
        }

        public EstrategiaContext() : base()
        {
        }

        public DbSet<Pessoa> pessoa { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.ApplyConfiguration(new PessoaConfiguration());
            base.OnModelCreating(builder);
        }
    }
}
