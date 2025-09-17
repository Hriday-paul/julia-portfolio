import { model, Model, models, Schema } from 'mongoose';

export interface ITitles {
    _id: string,
    name: string
}

export interface TitleModel extends Model<ITitles> { }

const TitleSchema: Schema<ITitles> = new Schema(
    {
        name: { type: String, required: true },
    },
    { timestamps: true },
);

export const ArtTitles =
    models.arttitles as TitleModel ||
    model<ITitles>('arttitles', TitleSchema);