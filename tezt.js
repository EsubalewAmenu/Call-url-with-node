const axios = require('axios');
const get = async () => {
    axios.get('https://dashencon.com/tezt/wp-json/ds_bt/v1/trade/spot').then(res => {
        console.log(res.data);
    })
}
setInterval(get, 1800000)