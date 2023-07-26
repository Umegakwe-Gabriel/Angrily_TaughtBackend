import mongoose from  "mongoose";

export interface iRatings {
    rate?: number;
    ratedBy?: string;
    article?: {};
}

interface iRatingData extends iRatings, mongoose.Document{}

const ratingsModel = new mongoose.Schema(
    {
        rate: {
            type: Number
        },
        ratedBy: {
            type: String
        },
        article: {
            type: mongoose.Types.ObjectId,
            ref: "articles",
        },
    }, {timestamps: true}
)

export default mongoose.model<iRatingData>("ratings", ratingsModel)
