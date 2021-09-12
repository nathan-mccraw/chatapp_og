using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Npgsql;

namespace ChatApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("in main");

            var connectionString = "Host=localhost; Port=5432; User id=postgres; Password='N*t3J*ll'; Database='chat_app'";

            using var connection = new NpgsqlConnection(connectionString);
            connection.Open();

            string sql = "SELECT * FROM testtable";
            using var command = new NpgsqlCommand(sql, connection);

            using NpgsqlDataReader reader = command.ExecuteReader();

            if (reader.HasRows)
            {
                Console.WriteLine("Has Rows");

                while (reader.Read())
                {
                    Console.WriteLine("{0} {1} {2}", reader.GetInt32(0), reader.GetString(1),
                            reader.GetString(2));
                }
            }
            else
            {
                Console.WriteLine("Nothing found");
            }

            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}