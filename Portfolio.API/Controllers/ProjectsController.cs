using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Models;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Portfolio.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        public static List<Projects> _projects = new List<Projects>() { 
            new Projects { Name = "Race Moment", Date = new DateTime(2022, 03, 19), Color = "Dark Blue", Tag = "Game", LDescription = "", SDescription = "This is a racing game I made in my free-time as a learning project for the unity game engine", Link =  new Link { Text = "Click to view app", Url = "This is the url" } },
        new Projects { Name = "BorrowMy", Date = new DateTime(2022, 04, 08), Color = "Dark Blue", Tag = "Webapp", LDescription = "During the last two weeks of the bootcamp, my mob and I were tasked with creating a fullstack application of our choice. The technologies we used were an entity-framework driven api that connected to our cloud database in Azure. For the frontend we used react-tsx with bootstrap for the styling. We also used Firebase for image hosting and 0auth for authorization. The application was developed in an agile-fashion while also going back and forth between a scrum fashion of working and mob-programming when we deemed fit" ,SDescription = "This was developed as a community application for parents who don´t want to spend a lot of money on toys", Link =  new Link { Text = "Click to view app", Url = "This is the url" } },
        new Projects { Name = "Snake", Date = new DateTime(2022, 03, 19), Color = "Dark Blue", Tag = "Game", LDescription = "This is not a long description", SDescription = "During one of the days at salt, after we had gotten some experience creating a fullstack application we had a personal hackday. I thought it might be fun to revisit a classic.", Link =  new Link { Text = "Click to view app", Url = "This is the url" } }};

        // GET: api/<ProjectsController>
        [HttpGet]
        public IEnumerable<Projects> Get()
        {
            return _projects;
        }

        // GET api/<ProjectsController>/5
        [HttpGet("{name}")]
        public async Task<Projects> Get(string name)
        {
            return  _projects.Where(p => p.Name == name).Single();
        }

        // POST api/<ProjectsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ProjectsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ProjectsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
