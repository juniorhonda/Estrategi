using Estrategia.API.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Estrategia.API.EntityConfig
{
    public class PessoaConfiguration : IEntityTypeConfiguration<Pessoa>
    {
        public void Configure(EntityTypeBuilder<Pessoa> builder)
        {
            builder.HasKey(p => p.id);
            builder.Property(p => p.nome).HasMaxLength(30).IsRequired();
            builder.Property(p => p.sobrenome).HasMaxLength(30).IsRequired();
            builder.Property(p => p.cpf).HasMaxLength(11).IsRequired();
            builder.Property(p => p.nacionalidade).HasMaxLength(30).IsRequired();
            builder.Property(p => p.cep).HasMaxLength(8).IsRequired();
            builder.Property(p => p.estado).HasMaxLength(30).IsRequired();
            builder.Property(p => p.cidade).HasMaxLength(50).IsRequired();
            builder.Property(p => p.logradouro).HasMaxLength(120).IsRequired();
            builder.Property(p => p.email).HasMaxLength(100).IsRequired();
            builder.Property(p => p.telefone).HasMaxLength(11).IsRequired();
            builder.Property(p => p.numero).IsRequired();
            builder.Property(p => p.complemento).HasMaxLength(30);
        }
    }
}
