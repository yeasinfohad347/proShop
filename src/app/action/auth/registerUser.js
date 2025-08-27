"use server";

import dbConnetion from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const userCollection = await dbConnetion("allUser");
  const { email, password } = payload;
  if (!email) return null;

  const user = await userCollection.findOne({ email: payload.email });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    const { acknowledged, insertedId } = result;
    return { acknowledged, insertedId: insertedId.toString() };
  }
  return null;
};
