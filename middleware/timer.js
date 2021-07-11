const moment = require("moment");
const beginTime = moment("09:00 am", "HH:mm a");
const endTime = moment("17:00 pm", "HH:mm a");
const beginDay = 1;
const endDay = 5;
const validateTime = (req, res, next) => {
  let currentTime = moment();
  let currentDay = moment().day();
  const iamBetweenT = currentTime.isBetween(beginTime, endTime);
  const iamBetweenD = currentDay >= beginDay && currentDay <= endDay;
  if (iamBetweenT && iamBetweenD) {
    next();
  } else {
    console.log("Panda is sleeping");
    res
      .status(404)
      .send(
        "We are open from Monday to Friday from 09:00 to 17:00 . Welcome and come back later!!"
      );
  }
};
module.exports = validateTime;