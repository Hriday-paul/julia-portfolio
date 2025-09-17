import { join } from 'path'
import { writeFile } from 'fs/promises'
import { verifyToken } from '@/utils/AuthAcrion';
import ConnectToDb from '@/lib/DB';
import { HighLight } from './HighLightsModel';
import { NextRequest, NextResponse } from 'next/server';


const publicDir = join(process.cwd(), 'uploads');

export const POST = async (request: NextRequest) => {

    const data = await request.formData();
    const title = data.get('title');
    const description = data.get('description');
    const timeLine = data.get('timeLine');
    const category = data.get('category');
    const subtitle = data.get('subtitle');

    const imageFiles = data.getAll("images") as File[];
    const videoFiles = data.getAll("videos") as File[];

    try {

        const cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        await verifyToken(cookie?.value);

        const imageUrls: string[] = [];
        for (const file of imageFiles) {
            if (file.size > 0) {
                const bytes = await file.arrayBuffer();
                const buffer = Buffer.from(bytes);
                const fileName = `${Date.now()}-${file.name}`;
                const filePath = join(publicDir, fileName);
                await writeFile(filePath, buffer);
                imageUrls.push("/api/uploads/" + fileName);
            }
        }

        // ✅ Upload videos
        const videoUrls: string[] = [];
        for (const file of videoFiles) {
            if (file.size > 0) {
                const bytes = await file.arrayBuffer();
                const buffer = Buffer.from(bytes);
                const fileName = `${Date.now()}-${file.name}`;
                const filePath = join(publicDir, fileName);
                await writeFile(filePath, buffer);
                videoUrls.push("/api/uploads/" + fileName);
            }
        }

        await ConnectToDb();

        console.log(category)

        const newChallenge = await HighLight.create({ title, category, description, images: imageUrls, subtitle, timeLine, videos: videoUrls });
        return Response.json({ message: "HighLight added successfully", challange: newChallenge }, { status: 200 });

    } catch (error) {

        console.log(error)

        if (error instanceof Error && error.message === "Unauthorized") {
            return NextResponse.json(
                { message: error?.message },
                { status: 401 }
            )
        }

        return NextResponse.json(
            { error: "Failed to add art" },
            { status: 500 }
        )

    }

}

export const GET = async () => {
    try {
        await ConnectToDb();

        const HighLights = await HighLight.find();

        return NextResponse.json(HighLights)

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { error: "Failed to retrive arts" },
            { status: 500 }
        )
    }

}

export const DELETE = async (request: NextRequest) => {
    const data = await request.formData();
    const id = data.get('id');
    try {
        await ConnectToDb();

        const artsGroupedByTitle = await HighLight.deleteOne({ _id: id });

        return NextResponse.json(artsGroupedByTitle)

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { error: "Failed to delete art" },
            { status: 500 }
        )
    }

}