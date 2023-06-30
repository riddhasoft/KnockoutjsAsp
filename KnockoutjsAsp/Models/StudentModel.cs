using System.ComponentModel.DataAnnotations;

namespace KnockoutjsAsp.Models
{
    public class StudentModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FullName { get; set; }
        [StringLength(200,ErrorMessage ="Length lamo bho, ali choto lekha")]
        public string Address { get; set; }
        [Required]
        public DateTime? DOB { get; set; }
    }
}
