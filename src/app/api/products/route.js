import dbConnetion from "@/lib/dbConnect";


export async function POST(req) {
  try {
    const body = await req.json();
    const { name, price, category, description, image, stock } = body;

    if (!name || !price || !category || !stock) {
      return new Response(
        JSON.stringify({ success: false, message: "Please fill all required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const productCollection = await dbConnetion("all-product");

    const result = await productCollection.insertOne({
      name,
      price,
      category,
      description,
      image,
      stock,
    });

    return new Response(JSON.stringify({ success: true, insertedId: result.insertedId }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
