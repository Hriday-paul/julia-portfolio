import ConnectToDb from "@/lib/DB";
import { verifyToken } from "@/utils/AuthAcrion";
import { NextRequest, NextResponse } from "next/server";
import { Arts } from "./ArtModel";
import { join } from 'path'
import { writeFile, mkdir } from 'fs/promises'


const publicDir = join(process.cwd(), 'uploads');

const ensureDir = async (dirPath: any) => {
    try {
        await mkdir(dirPath, { recursive: true });
    } catch (err) {
        console.error(`Error creating directory ${dirPath}:`, err);
        return Response.json({ error: 'file upload failed, try again' }, { status: 500 })
    }
};

export const GET = async () => {
    try {
        await ConnectToDb();

        const artsGroupedByTitle = await Arts.aggregate([
            {
                $lookup: {
                    from: "arttitles",
                    localField: "title",
                    foreignField: "_id",
                    as: "titleData"
                }
            },
            {
                $unwind: "$titleData"
            },
            {
                $group: {
                    _id: "$titleData._id",
                    titleName: { $first: "$titleData.name" },
                    arts: {
                        $push: {
                            _id: "$_id",
                            name: "$name",
                            media: "$media",
                            dimension: "$dimension",
                            image: "$image",
                            createdAt: "$createdAt"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    titleId: "$_id",
                    titleName: 1,
                    arts: 1
                }
            }
        ]);

        return NextResponse.json(artsGroupedByTitle)

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { error: "Failed to retrive arts" },
            { status: 500 }
        )
    }

}

export const POST = async (request: NextRequest) => {

    const data = await request.formData();
    const name = data.get('name');
    const media = data.get('media');
    const dimension = data.get('dimension');
    const title = data.get('title');

    const file: any = data.get('image');

    let img;

    try {

        const cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        await verifyToken(cookie?.value);

        if (file && (file as File).size > 0) {
            // Handle file upload
            const bytes = await (file as File).arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Ensure the directory exists
            await ensureDir(publicDir);

            // Define file path and name
            const fileName = `${Date.now()}-${file.name}`;
            const filePath = join(publicDir, fileName);

            // Write the file to the public directory
            await writeFile(filePath, buffer);

            img = '/api/uploads/' + fileName
        }

        await ConnectToDb();

        const newChallenge = await Arts.create({ name, dimension, image: img, media, title });
        return Response.json({ message: "Art added successfully", challange: newChallenge }, { status: 200 });

    } catch (error) {

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

export const DELETE = async (request: NextRequest) => {
    const data = await request.formData();
    const id = data.get('id');
    try {
        await ConnectToDb();

        const artsGroupedByTitle = await Arts.deleteOne({ _id: id });

        return NextResponse.json(artsGroupedByTitle)

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { error: "Failed to delete art" },
            { status: 500 }
        )
    }

}