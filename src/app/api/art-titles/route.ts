import ConnectToDb from "@/lib/DB";
import { verifyToken } from "@/utils/AuthAcrion";
import { NextRequest, NextResponse } from "next/server";
import { ArtTitles } from "./TitleModel";

export const GET = async () => {
    try {
        await ConnectToDb();
        const titles = await ArtTitles.find();

        return NextResponse.json(titles)

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { error: "Failed to retrive challanges" },
            { status: 500 }
        )
    }

}

export const POST = async (request: NextRequest) => {

    const data = await request.formData();
    const name = data.get('name');

    try {

        const cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        await verifyToken(cookie?.value);

        await ConnectToDb();

        const newChallenge = await ArtTitles.create({ name });
        return Response.json({ message: "Title added successfully", challange: newChallenge }, { status: 200 });

    } catch (error) {

        if (error instanceof Error && error.message === "Unauthorized") {
            return NextResponse.json(
                { message: error?.message },
                { status: 401 }
            )
        }

        return NextResponse.json(
            { error: "Failed to add challange" },
            { status: 500 }
        )

    }

}