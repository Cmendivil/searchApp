using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SearchApp.Controllers
{
    public class AddDataController : ApiController
    {
        [HttpPost, HttpGet]
        public void Post([FromBody] Models.Info info)
        {
            System.Diagnostics.Debug.WriteLine(info);
            Models.DataService.Add(info);
        }
    }
}
