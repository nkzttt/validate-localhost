const rp = require('request-promise');
const validator = require('html-validator');
const argv = require('minimist')(process.argv.slice(2));

const UA = {
  PC: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
  SP: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
  TB: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1'
};

(async () => {
  // set variables
  const protocol = argv.secure ? 'https' : 'http';
  const port = argv.port || '3000';
  const ua = argv.pc ? UA.PC : argv.sp ? UA.SP : argv.tb ? UA.TB : UA.PC;

  // trying to get html
  const requestOptions = {
    uri: `${protocol}://localhost:${port}`,
    headers: {
      'User-Agent': ua
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
