const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;





// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

// const connectDB = async () => {
// 	try {
// 		await mongoose.connect(db, {
//             _useNewUrlParser: true,
//             get useNewUrlParser() {
//                 return this._useNewUrlParser;
//             },
//             set useNewUrlParser(value) {
//                 this._useNewUrlParser = value;
//             },
// 			useCreateIndex: true,
// 			useFindAndModify: false
// 		});

// 		console.log('MongoDB Connected...');
// 	} catch (err) {
// 		console.error(err.message);
// 		// Exit process with failure
// 		process.exit(1);
// 	}
// };

// module.exports = connectDB;
