import { model, Model, models, Schema } from 'mongoose';

export interface IHighLight {
    _id: string,
    title: string,
    subtitle?: string,
    images: string[],
    description: string,
    timeLine: string,
    category: "Events" | "Media" | "Exhibition" | "Workshop",
    videos: string[]
}

export interface HighlightModel extends Model<IHighLight> { }

const HighlightSchema: Schema<IHighLight> = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        images: { type: [String], required: true },
        description: { type: String, required: true },
        timeLine: { type: String, required: true },
        category: { type: String, required: true, enum: ["Events", "Media", "Exhibition", "Workshop"] },
        videos: { type: [String], required: false },

    },
    { timestamps: true },
);

export const HighLight =
    models.highlights as HighlightModel ||
    model<IHighLight>('highlights', HighlightSchema);