using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SearchApp.Controllers
{
    public class GetDataController : ApiController
    {
        [HttpGet]
        public IEnumerable<Models.Info> GetData()
        {
            return Models.DataService.GetAll();
        }

    }
}
