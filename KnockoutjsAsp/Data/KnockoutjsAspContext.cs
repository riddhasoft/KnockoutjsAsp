using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using KnockoutjsAsp.Models;

namespace KnockoutjsAsp.Data
{
    public class KnockoutjsAspContext : DbContext
    {
        public KnockoutjsAspContext (DbContextOptions<KnockoutjsAspContext> options)
            : base(options)
        {
        }

        public DbSet<KnockoutjsAsp.Models.StudentModel> StudentModel { get; set; } = default!;
    }
}
