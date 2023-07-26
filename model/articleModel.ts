import mongoose from "mongoose";

export interface iArticle {
    title: string;
    content: string;
    description: string;
    image: string;
    imageID: string;
    coverImage: string;
    authorID: string;
    coverImageID: string;
    ratings: [];
    likes: [];
    author: {};
}

interface iArticleData extends iArticle, mongoose.Document{}

const articleModel = new mongoose.Schema(
    {
        content:{
            type: String
        },
        title:{
            type: String
        },
        description:{
            type: String
        },
        image:{
            type: String
        },
        imageID:{
            type: String
        },
        coverImage:{
            type: String
        },
        coverImageID:{
            type: String
        },
        authorID:{
            type: String
        },
        ratings:{
            type: mongoose.Types.ObjectId,
            ref: "ratings"
        },
        likes:{
            type: Array,
        },
        author:{
            type: mongoose.Types.ObjectId,
            ref: "authors",
        },
    }
)

export default mongoose.model<iArticleData>("articles", articleModel)