namespace Core.Entities
{
    public class Product : BaseEntity //using colon and file means we will deriving from this class.
                                      //now it's grabbing the Id from that file and removing it from here
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public ProductType ProductType { get; set; }      
        public int ProductTypeId { get; set; }  
        public ProductBrand ProductBrand { get; set; }
        public int ProductBrandId { get; set; }
    }
}