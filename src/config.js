let vehicles_host;
let customers_host;
let realtime_host;
if (process.env['NODE_ENV'] == 'production') {
    vehicles_host = 'http://vehicles-app.us-west-2.elasticbeanstalk.com';
    customers_host = 'http://alten-customers-dev.us-west-2.elasticbeanstalk.com';
    realtime_host = 'http://alten-realtime.herokuapp.com'
} else {
    vehicles_host = 'http://vehicles-app.us-west-2.elasticbeanstalk.com';
    customers_host = 'http://alten-customers-dev.us-west-2.elasticbeanstalk.com';
    // realtime_host = 'http://alten-realtime-dev.us-west-2.elasticbeanstalk.com:80'
    // vehicles_host = 'http://localhost:8000';
    // customers_host = 'http://localhost:8001';
    realtime_host = 'http://alten-realtime.herokuapp.com'
    // realtime_host = 'http://localhost:3001';
}
export default {
    VEHICLES_HOST: vehicles_host,
    CUSTOMERS_HOST: customers_host,
    REALTIME_HOST: realtime_host
}