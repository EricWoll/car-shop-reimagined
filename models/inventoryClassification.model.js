module.exports = (mongoose) => {
    const inventoryClassification = mongoose.model(
        'inventory-classifications',
        mongoose.Schema(
            {
                classification_id: Number,
                classification_name: String,
            },
            { timestamps: true }
        )
    );
    return inventoryClassification;
};
