namespace Portfolio.API.Models
{
    public class Projects
    {
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Color { get; set; }
        public string Tag { get; set; }
        public string SDescription { get; set; }
        public string LDescription { get; set; }

        public Link Link { get; set; }
    }
}
