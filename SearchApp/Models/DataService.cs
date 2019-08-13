using Dapper;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;

namespace SearchApp.Models
{
    public static class DataService
    {
        public static List<Info> GetAll()
        {
            using(IDbConnection db = new MySqlConnection(ConfigurationManager.ConnectionStrings["db"].ConnectionString))
            {
                if (db.State == ConnectionState.Closed)
                {
                    db.Open();
                }
                return db.Query<Info>("GetAll", commandType: CommandType.StoredProcedure).ToList();
            }
        }

        public static void Add(Info info)
        {
            System.Diagnostics.Debug.WriteLine(info);
            Console.WriteLine(info.picture);
            DynamicParameters param = new DynamicParameters();
            param.Add("@FirstName", info.first_name);
            param.Add("@LastName", info.last_name);
            param.Add("@Address", info.address);
            param.Add("@Interest", info.interest);
            param.Add("@Age", info.age);
            param.Add("@Picture", info.picture);

            using (IDbConnection db = new MySqlConnection(ConfigurationManager.ConnectionStrings["db"].ConnectionString))
            {
                if (db.State == ConnectionState.Closed)
                {
                    db.Open();
                }

                db.Execute("AddPerson", param, commandType: CommandType.StoredProcedure);
            }

        }
    }
}