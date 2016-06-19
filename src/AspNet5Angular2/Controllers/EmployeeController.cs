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
        public IEnumerable<Employee> Get()
        {
            HttpContext.Session.SetString("name","shreedahrs");
            var emps = HttpContext.Session.GetObjectFromJson<IList<Employee>>("emps");
            if (emps == null) {
                emps = new List<Employee>();
                emps.Add(new Employee{ Id = 1, Name = "Shreedhar" });
                emps.Add(new Employee { Id = 2, Name = "Pramod" });
            }
            HttpContext.Session.SetObjectAsJson("emps", emps);
            return emps;
            //new [] { new { Id = 1,  Name = "Shreedhar"}, new { Id = 2,  Name = "Pramod" } };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {

            return HttpContext.Session.GetString("name");
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]Employee emp)
        {
            var emps = HttpContext.Session.GetObjectFromJson<IList<Employee>>("emps");
            if (emps == null)
            {
                emps = new List<Employee>();
            }
            emps.Add(emp);
            HttpContext.Session.SetObjectAsJson("emps", emps);
            return this.Json(new { Message = "added" });
        }

        // PUT api/values/5
        [HttpPut]
        public JsonResult Put([FromBody]Employee emp1)
        {
            var emps = HttpContext.Session.GetObjectFromJson<List<Employee>>("emps");
            var emp = emps.FirstOrDefault(p => p.Id == emp1.Id);
            emp.Name = emp1.Name;
            HttpContext.Session.SetObjectAsJson("emps", emps);
            return this.Json(new { Message = "modified" });
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var emps = HttpContext.Session.GetObjectFromJson<List<Employee>>("emps");
            var emp = emps.FirstOrDefault(p => p.Id == id);
            emps.Remove(emp);
            HttpContext.Session.SetObjectAsJson("emps", emps);
            return this.Json(new { Message = "deleted" });
        }
    }
}
