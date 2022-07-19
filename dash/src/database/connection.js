const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        console.log("👨‍💻> wait connecting to database.......");
        
        await mongoose.connect(process.env.MONGO_URI);

        console.log('👌> database connected...')

    } catch (e) {
        console.log('⚡💀⚡>  there is problem with connection with mongo do database.');
        // console.log(e); // to watch error
        process.exit(1);
    }
}

module.exports = connectDB;