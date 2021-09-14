using eDNAWeb.Models;
using eDNAWeb.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace eDNAWeb.Repository
{
    public class Employee : Repository<Employee>, IEmployee
    {
        private readonly IHttpClientFactory _clientFactory;

        public Employee(IHttpClientFactory clientFactory) : base(clientFactory)
        {
            _clientFactory = clientFactory;
        }
    }
}
