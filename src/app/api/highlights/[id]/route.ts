import ConnectToDb from "@/lib/DB";
import { HighLight } from "../HighLightsModel";
import { NextResponse } from "next/server";

export const GET = async (_ : Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    try {
        await ConnectToDb();

        const HighLights = await HighLight.findOne({ _id: id });

        return NextResponse.json(HighLights);

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { error: "Failed to retrive highlight" },
            { status: 500 }
        )
    }

}