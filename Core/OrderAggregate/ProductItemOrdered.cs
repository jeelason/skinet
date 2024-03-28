namespace Core.Entities.OrderAggregate
{
    public class ProductItemOrdered  //doesn't need an ID because it will be owned by the order itself
    {
        public ProductItemOrdered()
        {
        }

        public ProductItemOrdered(int productItemId, string productName, string pictureUrl) 
        {
            ProductItemId = productItemId;
            ProductName = productName;
            PictureUrl = pictureUrl;   
        }
        public int ProductItemId { get; set; }
        public string ProductName { get; set; }
        public string PictureUrl { get; set; }
    }
}