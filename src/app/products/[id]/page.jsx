import dbConnetion from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

// Server Component
const ProductDetails = async ({ params }) => {
  const { id } =await params; // ✅ fixed

  let product = null;
  try {
    const serviceCollection = await dbConnetion("all-product");
    product = await serviceCollection.findOne({ _id: new ObjectId(id) });
  } catch (error) {
    return <p className="text-center text-red-500 mt-10">Invalid product ID</p>;
  }

  if (!product) {
    return <p className="text-center text-red-500 mt-10">Product not found!</p>;
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
            priority
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl text-black font-bold mb-2">{product.name}</h1>
            <p className="text-black mb-4">{product.category}</p>

            <div className="flex items-center mb-4 space-x-2">
              <FaStar className="text-yellow-400" />
              <span className="text-black">{product.rating}</span>
            </div>

            <p className="text-black mb-6">{product.description}</p>

            <span className="text-2xl font-bold text-[#F07F13]">
              ${product.price}
            </span>

            <p className="mt-2 text-sm text-black">Stock: {product.stock}</p>
          </div>

          <button className="mt-6 w-full bg-[#F07F13] py-3 rounded-lg hover:bg-orange-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
