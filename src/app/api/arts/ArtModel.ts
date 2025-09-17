import { model, Model, models, ObjectId, Schema } from 'mongoose';

export interface IArt {
    _id: string,
    name: string,
    media: string,
    image: string,
    dimension: string,
    title: ObjectId
}

export interface ArtModel extends Model<IArt> { }

const ArtSchema: Schema<IArt> = new Schema(
    {
        name: { type: String, required: true },
        media: { type: String, required: true },
        dimension: { type: String, required: true },
        image: { type: String, required: true },
        title: {
            type: Schema.Types.ObjectId,
            ref: "arttitles"
        },
    },
    { timestamps: true },
);

export const Arts =
    models.arts as ArtModel ||
    model<IArt>('arts', ArtSchema);