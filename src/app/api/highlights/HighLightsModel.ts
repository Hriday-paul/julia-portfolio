import { model, Model, models, Schema } from 'mongoose';

export interface IHighLight {
    _id: string,
    title: string,
    subtitle?: string,
    images: string[],
    description: string,
    timeLine: string,
    category: string,
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
        category: { type: String, required: true },
        videos: { type: [String], required: true },

    },
    { timestamps: true },
);

export const HighLight =
    models.highlights as HighlightModel ||
    model<IHighLight>('highlights', HighlightSchema);