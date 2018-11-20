const rp = require('request-promise');
const validator = require('html-validator');

(async () => {
  // trying to get html
  const requestOptions = {
    uri: 'http://localhost:3000',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36'
    }
  };
  let html;
  try {
    html = await rp(requestOptions);
  } catch (err) {
    console.error('failed to get html: \n' + err);
    process.exit(1);
  }

  // trying to call validator
  const validationOptions = {
    data: html,
    format: 'text'
  };
  let result;
  try {
    result = await validator(validationOptions);
  } catch (err) {
    console.error('failed to call validator: \n' + err);
    process.exit(1);
  }

  // print syntax error
  console.log(result);
  process.emit(0);
})();
