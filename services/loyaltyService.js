const db = require("../config/dbConfig");

const saveLoyaltyPoints = async (phoneNumber, points) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM loyalty_db WHERE phone_number = ?",
      [phoneNumber]
    );

    if (rows.length > 0) {
      await db.execute(
        "UPDATE loyalty_points SET points = points + ? WHERE PHONE_NUMBER = ?"[
          (phoneNumber, points)
        ]
      );
    } else {
      await db.execute(
        "INSERT INTO loyalty_points (phoneNumber, points) VALUES (?, ?)"[
          (phoneNumber, points)
        ]
      );
    }
  } catch (error) {
    throw new Error("Failed to save loyalty points:" + error.message);
  }
};

module.exports = {
  saveLoyaltyPoints,
};


// const db = require("../config/dbConfig");

// const saveLoyaltyPoints = async (phoneNumber, points) => {
//   try {
//     const [rows] = await db.execute(
//       "SELECT * FROM loyalty_db WHERE phone_number = ?",
//       [phoneNumber]
//     );

//     if (rows.length > 0) {
//       const updateQuery = "UPDATE loyalty_points SET points = points + ? WHERE phone_number = ?";
//       await new Promise((resolve, reject) => {
//         db.query(updateQuery, [points, phoneNumber], (error, results) => {
//           if (error) {
//             console.error('Error updating points:', error);
//             return reject(error);
//           }
//           console.log('Points updated:', results);
//           resolve(results);
//         });
//       });
//     } else {
//       const insertQuery = "INSERT INTO loyalty_points (phone_number, points) VALUES (?, ?)";
//       await new Promise((resolve, reject) => {
//         db.query(insertQuery, [phoneNumber, points], (error, results) => {
//           if (error) {
//             console.error('Error inserting points:', error);
//             return reject(error);
//           }
//           console.log('Points inserted:', results);
//           resolve(results);
//         });
//       });
//     }
//   } catch (error) {
//     throw new Error("Failed to save loyalty points: " + error.message);
//   }
// };

// module.exports = {
//   saveLoyaltyPoints,
// };
