using System;
using System.ComponentModel.DataAnnotations;

namespace Estrategia.API.Entity
{
    public class Pessoa
    {

        public int id { get; set; }
        public string nome { get; set; }
        public string sobrenome { get; set; }
        public string cpf { get; set; }
        public string nacionalidade { get; set; }
        public string cep { get; set; }
        public string estado { get; set; }
        public string cidade { get; set; }
        public string logradouro { get; set; }
        public int numero { get; set; }
        public string complemento { get; set; }
        public string email { get; set; }
        public string telefone { get; set; }
    }

}
