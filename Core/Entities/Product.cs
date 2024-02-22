namespace Core.Entities
{
    public class Product
    {
        public int Id { get; set; } //this will become the primary key. must be Id. not TheId or some other name
        public string Name { get; set; }
    }
}