"use server";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export const RemoveCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('token');
};

export const verifyToken = async (token: string) => {
  // Use a Promise to handle asynchronous jwt.verify
  try {
    const decodedData = await new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_TOKEN_SECRET!, (err, decoded) => {
        if (err) {
          reject(err);
        }
        resolve(decoded);
      });
    });
    return decodedData;
  } catch (err) {
    console.log(err)
    throw new Error("Unauthorized")
  }
}

