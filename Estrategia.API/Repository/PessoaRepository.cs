using Estrategia.API.Contexto;
using Estrategia.API.Entity;
using System.Linq;

namespace Estrategia.API.Repository
{
    public class PessoaRepository : BaseRepository<Pessoa, EstrategiaContext>
    {
        public PessoaRepository(EstrategiaContext context) : base(context) { }

        public Pessoa obterPorCpf(string cpf)
        {
            return contexto.pessoa.FirstOrDefault(p => p.cpf == cpf);
        }

    }
}
