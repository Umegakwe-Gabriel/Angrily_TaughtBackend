import mongoose from "mongoose"

interface iAuthor{
    name: string;
    email: string;
    pasword: string;
    avatar: string;
    avatarID: string;
    article: {}[];
}

interface iAuthorData extends iAuthor, mongoose.Document{}

const authorModel = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            toLowercase: true,
            unique: true,
        },
        password: {
            type: String,
        },
        avatar: {
            type: String
        },
        avatarID: {
            type: String
        },
        article: [
            {
                type: mongoose.Types.ObjectId,
                ref: "articles"
            }
        ]

    }, {timestamps: true}
)

export default mongoose.model<iAuthorData>("authors", authorModel)