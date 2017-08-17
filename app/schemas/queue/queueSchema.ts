import { Schema } from "mongoose";

export var queueSchema : new Schema (
    {
        name : String,
        createdAt : Date,
        url : String,
        isEnabled? : Boolean
    });

queueSchema.pre("save", function(next){
        if (!this.createdAt) {
            this.createdAt = new Date();
        }
        next();
});