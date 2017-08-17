"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueSchema = ({
    name: String,
    createdAt: Date,
    url: String,
    isEnabled: Boolean
});
exports.queueSchema.pre("save", function (next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});
