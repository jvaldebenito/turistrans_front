import axios from 'axios'

const API_URL = 'http://localhost:3000/'

let postCheckIn = () => {
    return axios.post(`${API_URL}/checkins`, {
      "check_in": {
        "name"          : "Chelo",
				"surname"       : "Tavano",
				"passport"      : "F0454554",
				"address"       : "192.168.4.77",
				"city"          : "Santiago",
				"country"       : "Santiago",
				"nationality"   : "Chile",
				"email"         : "mtavano@gmail.com",
				"phone"         : "+5697884856",
				"arrival_date"  : "10/10/18",
				"departure_date": "10/12/18",
				"room"          : "42",
				"folio"         : "564485868667",
				"rate"          : "5"
      }
    })
}

export {
    postCheckIn,
}
