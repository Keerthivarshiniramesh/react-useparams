
import { useParams } from "react-router-dom";

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
      
    
    const { productId } = useParams()
    


    const currentProduct = products.find(item=>item.productId===productId)
    
    console.log(currentProduct)
    
    return (
        <div>
            Products Info
            <h2>{currentProduct.title}</h2>
            <p>{currentProduct.description}</p>
            <p>Price: {currentProduct.price}</p>
        </div>
    )
}

export default Home