const responseBody = (msg , obj) => {
    obj["message"] = msg;
    return responseBody;
  };
  
module.exports = { responseBody };