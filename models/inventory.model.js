module.exports = (mongoose) => {
    const inventory = mongoose.model(
        'inventory',
        mongoose.Schema(
            {
                inv_make: String,
                inv_model: String,
                inv_year: Number,
                inv_description: String,
                inv_image: String,
                inv_thumbnail: String,
                inv_price: Number,
                inv_miles: Number,
                inv_color: String,
                classification_id: Number,
            },
            { timestamps: true }
        )
    );
    return inventory;
};
