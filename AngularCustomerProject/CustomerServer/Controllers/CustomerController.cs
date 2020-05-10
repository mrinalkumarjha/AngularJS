using CustomerServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CustomerServer.Controllers
{
    public class CustomerController : ApiController
    {
        private List<Customer> customers = new List<Customer>();
        public CustomerController()
        {
            customers.Add(new Customer()
            {
                CustomerName = "mrinal",
                CustomerCode = "C001",
                CustomerAmount = "100",
                SalesDateTime = DateTime.Now
            });
            customers.Add(new Customer()
            {
                CustomerName = "akshara",
                CustomerCode = "C002",
                CustomerAmount = "200",
                SalesDateTime = DateTime.Now
            });
        }
        // GET: api/Customer
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Customer/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Customer
        public List<Customer> Post(Customer cust)
        {
            customers.Add(cust);
            return customers;
        }

        // PUT: api/Customer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Customer/5
        public void Delete(int id)
        {
        }
    }
}
