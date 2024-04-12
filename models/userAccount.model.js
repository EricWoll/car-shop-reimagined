module.exports = (mongoose) => {
    const userAccount = mongoose.model(
        'user-accounts',
        mongoose.Schema(
            {
                user_id: Number,
                user_firstname: String,
                user_lastname: String,
                user_email: String,
                user_passwowrd: String,
            },
            { timestamps: true }
        )
    );
    return userAccount;
};
