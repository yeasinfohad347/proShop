// app/products/page.jsx
import dbConnetion from "@/lib/dbConnect";
import ProductCard from "../components/productCart";


const AllProducts = async () => {
  const serviceCollection = await dbConnetion("all-product");
  const products = await serviceCollection.find({}).toArray();

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          🛍️ All Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
