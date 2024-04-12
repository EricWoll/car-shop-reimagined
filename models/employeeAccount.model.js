module.exports = (mongoose) => {
    const employeeAccount = mongoose.model(
        'employee-accounts',
        mongoose.Schema(
            {
                employee_id: Number,
                employee_firstname: String,
                employee_lastname: String,
                employee_email: String,
                employee_passwowrd: String,
                employee_type: String,
            },
            { timestamps: true }
        )
    );
    return employeeAccount;
};
