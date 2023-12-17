const responseBody = (status, msg , obj) => {
    const newObj = { ...obj, status: status,message: msg};
    return JSON.stringify(newObj);
};
  
module.exports = { responseBody };