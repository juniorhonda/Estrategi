using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Estrategia.API.Models
{
    public class PessoaModels
    {
        public int id { get; set; }
        public string nome { get; set; }
        public string sobrenome { get; set; }
        public int cpf { get; set; }
        public string nacionalidade { get; set; }
        public int cep { get; set; }
        public string estado { get; set; }
        public string cidade { get; set; }
        public string logradouro { get; set; }
        public string email { get; set; }
        public int telefone { get; set; }
    }
}
