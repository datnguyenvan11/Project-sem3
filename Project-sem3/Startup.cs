using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Project_sem3.Startup))]
namespace Project_sem3
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
