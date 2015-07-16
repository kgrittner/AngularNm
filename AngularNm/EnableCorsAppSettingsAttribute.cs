﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Cors;
using System.Web.Http.Cors;

namespace AngularNm
{
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, AllowMultiple = false)]
    public class EnableCorsAppSettingsAttribute : Attribute, ICorsPolicyProvider
    {
        private CorsPolicy _policy;

        public EnableCorsAppSettingsAttribute(string appSettingOriginKey)
        {
            _policy = new CorsPolicy
            {
                AllowAnyMethod = true,
                AllowAnyHeader = true
            };

            // loads the origins from AppSettings
            string originsString = ConfigurationManager.AppSettings[appSettingOriginKey];
            if (!String.IsNullOrEmpty(originsString))
            {
                foreach (var origin in originsString.Split(','))
                {
                    _policy.Origins.Add(origin);
                }
            }
        }

        public Task<CorsPolicy> GetCorsPolicyAsync(HttpRequestMessage request)
        {
            return Task.FromResult(_policy);
        }

        public Task<CorsPolicy> GetCorsPolicyAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            return Task.FromResult(_policy);
        }
    }
}