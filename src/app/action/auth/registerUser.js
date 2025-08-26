import dbConnetion from "@/lib/dbConnect";

export const registerUser=async(payload)=>{
    console.log(payload);
    const userCollection = await dbConnetion("allUser");
      const data = await userCollection.insertOne(payload);
}