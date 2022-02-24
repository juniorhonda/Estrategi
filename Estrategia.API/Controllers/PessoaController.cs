using Estrategia.API.Entity;
using Estrategia.API.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Estrategia.API.Controllers
{
    [ApiController]
    [Route("api/pessoa")]
    public class PessoaController : ControllerBase
    {
        private readonly PessoaRepository pessoaRepository;

        public PessoaController(PessoaRepository repository)
        {
            this.pessoaRepository = repository;
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult get(int id)
        {
            try
            {
                var pessoa = pessoaRepository.GetById(id);

                if (pessoa == null)
                    return NotFound();

                return Ok(pessoa);
            }
            catch (Exception)
            {
                return BadRequest("Ocorreu um erro ao obter!");
            }
        }

        [HttpGet]
        public IActionResult geAll()
        {
            try
            {
                IEnumerable<Pessoa> pessoas = pessoaRepository.Query();
                return Ok(pessoas.ToList());
            }
            catch (Exception)
            {
                return BadRequest("Ocorreu um erro ao obter!");
            }
        }

        [HttpPost]
        public IActionResult create([FromBody]Pessoa request)
        {
            try
            {
                var p = pessoaRepository.obterPorCpf(request.cpf);

                if(p is not null)
                    return BadRequest("CPF já cadastrado!");

                var pessoa = pessoaRepository.Add(request);
                return Ok(pessoa);
            }
            catch (Exception)
            {
                return BadRequest("Ocorreu um erro ao salvar!");
            }
        }

        [HttpPatch]
        public IActionResult update(Pessoa request)
        {
            try
            {
                var pessoa = pessoaRepository.Update(request);
                return Ok(pessoa);
            }
            catch (Exception)
            {
                return BadRequest("Ocorreu um erro ao salvar!");
            }
        }

        [HttpPut]
        public IActionResult delete(Pessoa pessoa)
        {
            try
            {
                pessoaRepository.Remove(pessoa);

                return Ok(pessoa);
            }
            catch (Exception)
            {
                return BadRequest("Ocorreu um erro ao exlcuir!");
            }
        }
    }
}
