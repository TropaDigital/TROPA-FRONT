import axios from 'axios'


var baseUrl

if(process.env.NODE_ENV === 'development') {
    baseUrl =  'https://tropa.backendtropa.com.br/'
} else {
    baseUrl =  'https://tropa.backendtropa.com.br/'
}

const apiTropa = axios.create({
    baseURL: baseUrl,    
})

export default apiTropa