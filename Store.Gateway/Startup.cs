﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;

namespace Store.Gateway
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();

            //services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowAllOrigins",
            //        builder => builder//.WithOrigins("http://localhost:8713")
            //                        .AllowAnyOrigin()
            //                        .AllowAnyHeader()
            //                        .AllowAnyMethod()
            //                        .AllowCredentials()
            //                        .SetPreflightMaxAge(TimeSpan.FromHours(1))

            //        );
            //});

            //services.AddCors(options =>
            //{
            //    options.AddPolicy("CorsPolicy",
            //        builder => builder
            //            .AllowAnyOrigin()
            //            .AllowAnyMethod()
            //            .AllowAnyHeader());
            //});

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            //app.UseCors(builder =>
            //                builder
            //                            //.WithOrigins("http://localhost:8713")
            //                            .AllowAnyOrigin()
            //                            .AllowAnyHeader()
            //                            .AllowAnyMethod()
            //                            .AllowCredentials()
            //                            .SetPreflightMaxAge(TimeSpan.FromHours(1))
            //);


            app.UseCors(builder =>
            builder.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

            app.UseMvc();

            //app.UseCors("CorsPolicy");

            //app.UseMvc();
        }

        private void addCookie(HttpContext context)
        {
            if (!context.Request.Cookies.ContainsKey("id"))
            {
                var copt = new CookieOptions();

                copt.Expires = DateTimeOffset.Now.AddSeconds(30);

                Guid id = Guid.NewGuid();

                context.Response.Cookies.Append("id", id.ToString(), copt);
            }
        }
    }
}
