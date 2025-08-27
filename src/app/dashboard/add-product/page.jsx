"use client";

import Loading from "@/app/components/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddProductPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Predefined categories
  const categories = ["Electronics", "Clothing", "Books", "Home", "Beauty"];

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      setLoading(false);
    }
  }, [status, router]);

  if (loading) return <Loading />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const productData = {
      name: form.name.value,
      price: parseFloat(form.price.value),
      category: form.category.value,
      description: form.description.value,
      image: form.image.value,
      stock: parseInt(form.stock.value),
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Product Added!",
          text: "Your product has been successfully added.",
          timer: 1500,
          showConfirmButton: false,
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message || "Server error. Try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Product
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Fill in the product details below
        </p>

        <form
          className="grid grid-cols-1 text-black gap-6"
          onSubmit={handleSubmit}
        >
          {/* Product Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Product Name*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="input text-black input-bordered w-full rounded-xl"
              required
            />
          </div>

          {/* Price & Stock */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Price ($)*</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="0.00"
                className="input text-black input-bordered w-full rounded-xl"
                step="0.01"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Stock*</span>
              </label>
              <input
                type="number"
                name="stock"
                placeholder="0"
                className="input text-black input-bordered w-full rounded-xl"
                required
              />
            </div>
          </div>

          
          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              name="category"
              className="select select-bordered w-full rounded-xl"
              defaultValue="" // ✅ default value
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Write product description"
              className="textarea text-black textarea-bordered w-full rounded-xl"
            />
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Image URL</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="input text-black input-bordered w-full rounded-xl"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full bg-[#F07F13] hover:bg-orange-600 text-white rounded-xl py-3 text-lg"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
