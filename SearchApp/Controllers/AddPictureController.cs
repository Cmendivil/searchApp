using System;
using System.Collections.Generic;
using System.Linq;

using System.Web.Http;
using System.Web;
using System.IO;

namespace SearchApp.Controllers
{
    public class AddPictureController : ApiController
    {
        [HttpPost, HttpGet]
        [Route("api/addpicture")]
        public IHttpActionResult UploadFile()
        {
            string sPath = System.Web.Hosting.HostingEnvironment.MapPath("/media/");
            HttpPostedFile file = HttpContext.Current.Request.Files[0];
            string fileName = new FileInfo(file.FileName).Name;

            file.SaveAs(sPath + fileName);

            return Ok("Success!");
        }

    }
}
