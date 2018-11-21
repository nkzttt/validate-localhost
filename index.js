const rp = require('request-promise');
const validator = require('html-validator');

const UA = {
  PC: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
  SP: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
  TB: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1'
};

module.exports = options => {
  return new Promise(async (resolve, reject) => {
    // set variables
    const protocol = options.secure ? 'https' : 'http';
    const port = options.port || '3000';
    const path = options.path || '/';
    const ua = options.pc ? UA.PC : options.sp ? UA.SP : options.tb ? UA.TB : UA.PC;

    // trying to get html
    const requestOptions = {
      uri: path,
      baseUrl: `${protocol}://localhost:${port}`,
      method: 'GET',
      headers: {
        'User-Agent': ua
      }
    };
    let html;
    try {
      html = await rp(requestOptions);
    } catch (err) {
      return reject(err);
    }

    // trying to call validator
    const validationOptions = {
      data: html,
      format: 'json'
    };
    let result;
    try {
      result = await validator(validationOptions);
    } catch (err) {
      return reject(err);
    }

    // return result
    resolve(result);
  });
};
