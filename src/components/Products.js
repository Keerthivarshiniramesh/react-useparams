

function Home() {

    const products = [
        {
          productId: "P001",
          title: "Wireless Bluetooth Headphones",
          description: "High-quality over-ear headphones with noise-canceling features and a comfortable fit.",
          images: [
            "https://cloud.example.com/images/headphones1.jpg",
            "https://cloud.example.com/images/headphones2.jpg",
            "https://cloud.example.com/images/headphones3.jpg",
            "https://cloud.example.com/images/headphones4.jpg"
          ],
          category: "Electronics",
          price: 99.99
        },
        {
          productId: "P002",
          title: "Smartwatch with Heart Rate Monitor",
          description: "Track your fitness and health with this sleek smartwatch, featuring heart rate monitoring and step counting.",
          images: [
            "https://cloud.example.com/images/smartwatch1.jpg",
            "https://cloud.example.com/images/smartwatch2.jpg",
            "https://cloud.example.com/images/smartwatch3.jpg",
            "https://cloud.example.com/images/smartwatch4.jpg"
          ],
          category: "Wearables",
          price: 149.99
        },
        {
          productId: "P003",
          title: "Portable Blender",
          description: "A compact and powerful portable blender perfect for smoothies on the go.",
          images: [
            "https://cloud.example.com/images/blender1.jpg",
            "https://cloud.example.com/images/blender2.jpg",
            "https://cloud.example.com/images/blender3.jpg",
            "https://cloud.example.com/images/blender4.jpg"
          ],
          category: "Kitchen Appliances",
          price: 39.99
        }
      ];
      
    
    return (
        <div>
            {
                products.map((product, index) => {
                    return (
                        <div key={index}>
                            <h2>{product.title}</h2>
                            <button onClick={()=>window.location.href=`/products/${product.productId}`}>View</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home