export class findDoctor {
  findByCondition(condition) {
    const Promise = require('es6-promise').Promise;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url =
      `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  };
}

// `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=or-portland&sort=best-match-asc&skip=0&limit=20&user_key=${process.env.exports.apiKey}`;
