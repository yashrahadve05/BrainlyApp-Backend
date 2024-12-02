// import mongoose, {model, Schema} from "mongoose"

// mongoose.connect("mongodb+srv://yashrahadve:89LRtFhRcZuNN1dt@cluster0.i08s4.mongodb.net/Brainly")

// const UserSchema = new Schema({
    
//     username: {
//         type: String,
//         unique: true
//     },
//     password: String
// })

// const ContentSchema = new Schema({
//     title: String,
//     link: String,
//     tags: [{type: mongoose.Types.ObjectId, ref: 'User'}],
//     userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
// })

// const LinkSchema = new Schema({
//     hash: String,
//     userId: {
//         type: mongoose.Types.ObjectId,
//         ref: 'User',
//         required: true,
//         unique: true
//     }
// })


// export const UserModel = model("User", UserSchema );
// export const ContentModel = model("Content", ContentSchema);
// export const LinkModel = model("Links", LinkSchema)


import mongoose, {model, Schema} from "mongoose";

mongoose.connect("mongodb+srv://yashrahadve:89LRtFhRcZuNN1dt@cluster0.i08s4.mongodb.net/Brainly")

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);