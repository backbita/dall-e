import mongoose from 'mongoose'

const connectDB = (url) => {
    // for search
    mongoose.set('strictQuery', true)
    //connect db
    mongoose.connect(url)
    .then(()=> console.log('mongoDB connected'))
    .catch((err) => console.log(err))

}
export default connectDB