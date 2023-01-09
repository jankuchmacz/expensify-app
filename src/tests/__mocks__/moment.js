//function to require orginal module
const moment = require.requireActual('moment');
export default (timestamp = 0) => {
    return moment(timestamp);
}