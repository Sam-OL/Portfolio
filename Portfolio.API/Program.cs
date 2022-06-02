var AllowedOrigins = "_allowedOrigins";

var builder = WebApplication.CreateBuilder(args);

//Add services to the container.
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy(name: AllowedOrigins, 

//                policy =>
//                {
//                    policy.WithOrigins("http://localhost:3000")
//                                        .AllowAnyHeader()
//                                        .AllowAnyMethod();
//                });
//});
builder.Services.AddCors();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseAuthorization();
app.UseRouting();

app.MapControllers();

app.Run();
