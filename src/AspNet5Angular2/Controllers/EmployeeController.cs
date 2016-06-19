using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNet5Angular2.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<object> Get()
        {
            HttpContext.Session.SetString("name","shreedahrs");
            return new [] { new { Id = 1,  Name = "Shreedhar"}, new { Id = 2,  Name = "Pramod" } };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {

            return HttpContext.Session.GetString("name");
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
