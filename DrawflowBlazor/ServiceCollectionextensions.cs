using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DrawflowBlazor
{
    public static class ServiceCollectionextensions
    {
        public static void UseDrawflowBlazor(this  IServiceCollection services)
        {
            services.AddScoped<ExampleJsInterop>();
        }
    }
}
