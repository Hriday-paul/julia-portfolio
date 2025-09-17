import { NextResponse } from "next/server"

const password = "123456"

import jwt from 'jsonwebtoken';

async function CreatJwtToken({ user_name }: { user_name: string }) {
    try {
        const expiresIn = 24 * 60 * 60; // 1 days
        const token = jwt.sign({ user_name, isAdmin: true }, process.env.JWT_TOKEN_SECRET!, { expiresIn });
        return token;
    } catch (err) {
        console.log(err)
        throw new Error('something went wrong, try again');
    }
}



export async function POST(request: Request) {
    try {
        const body = await request.json();

        const req_password = body?.password

        if (!body?.password) {
            return Response.json({ message: 'Enter password' }, { status: 401 });
        }

        if (req_password !== password) {
            return Response.json({ message: 'Invalid password' }, { status: 401 });
        }

        const accessToken = await CreatJwtToken({ user_name: "JULIYA_ADMIN" })

        const response = NextResponse.json({ message: 'Login successful' });

        const expiresIn = 24 * 60 * 60; // 1 day

        const cookieOptions = {
            httpOnly: false, // true if you use SSL
            maxAge: expiresIn,
            path: '/',
            sameSite: 'strict' as const,
            secure: false, // false since you're using http
        };

        response.cookies.set('token', accessToken, cookieOptions);

        return response;

    }

    catch (err) {
        console.log(err)
        return NextResponse.json({ message: 'Invalid JSON body', }, { status: 400 });
    }

}