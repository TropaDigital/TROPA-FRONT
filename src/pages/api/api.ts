import axios from 'axios'


var baseUrl

if(process.env.NODE_ENV === 'development') {
    baseUrl =  'http://192.168.15.6:3333/'
} else {
    baseUrl =  'http://192.168.15.6:3333/'
}

const apiTropa = axios.create({
    baseURL: baseUrl,    
})

export default apiTropa