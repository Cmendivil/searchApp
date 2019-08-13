using System;
using System.Linq;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SearchApp.Controllers;


namespace SearchApp.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void HomeTest()
        {
            HomeController controller = new HomeController();
            ViewResult result = controller.Index() as ViewResult;

            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void GetDataTest()
        {
            GetDataController controller = new GetDataController();
            ViewResult result = controller.GetData() as ViewResult;
            ViewResult expected = controller.GetData() as ViewResult;

            Assert.AreEqual(result, expected);
        }


    }
}
