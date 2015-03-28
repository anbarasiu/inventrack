// See `parse_url` above
var MONGO_PARSED = parse_url(process.env.MONGOHQ_URL);

var config = {
  detailedErrors: false
, debug: false
, hostname: "0.0.0.0"
, port: process.env.PORT || 4000
, model: {
    defaultAdapter: 'mongo'
  }
, db: {
    mongo: {
      username: MONGO_PARSED.user
    , dbname: MONGO_PARSED.path.substring(1)    // Get rid of the leading `/`
    , password: MONGO_PARSED.pass
    , host: MONGO_PARSED.host
    , port: parseInt(MONGO_PARSED.port)
    }
  }
, sessions: {
    store: 'cookie'
  , key: 'did'
  , expiry: 14 * 24 * 60 * 60
  }
};

module.exports = config;