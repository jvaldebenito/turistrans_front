import axios from 'axios'

const API_URL = 'https://turistrans-api.herokuapp.com'

let postCheckIn = (check_in, url) => {
  return axios.post(`${API_URL}/checkins`, {
    "check_in": {
      "name"          : check_in.name,
      "surname"       : check_in.surname,
      "passport"      : check_in.passport,
      "address"       : check_in.address,
      "city"          : check_in.city,
      "country"       : check_in.country,
      "nationality"   : check_in.nationality,
      "email"         : check_in.email,
      "phone"         : check_in.phone,
      "arrival_date"  : check_in.arrival_date,
      "departure_date": check_in.departure_date,
      "room"          : check_in.room,
      "image"         : check_in.url,
      "folio"         : check_in.folio,
      "rate"          : check_in.rate
    }
  })
}

export {
    postCheckIn,
}
