let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api   = "https://d586adkqna.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table = "restaurants-dev-andreit"
  process.env.order_events_stream = "orders-dev-andreit"
  process.env.restaurant_notification_topic = "restaurants-dev-andreit"
  process.env.AWS_REGION        = "eu-west-1"
  process.env.TEST_ROOT = "https://d586adkqna.execute-api.eu-west-1.amazonaws.com/dev"
  
  initialized = true
}

module.exports = {
  init
}