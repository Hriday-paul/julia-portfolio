import mongoose from 'mongoose'

const ConnectToDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL || '', {
            dbName: 'juliya'
        });
    } catch (err) {
        console.log(err)
    }
}

export default ConnectToDb;