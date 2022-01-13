import axios from 'axios'


var baseUrl

if(process.env.NODE_ENV === 'development') {
    baseUrl =  'https://backendtropa.labtropadigital.com.br/'
} else {
    baseUrl =  'https://backendtropa.labtropadigital.com.br/'
}

const apiTropa = axios.create({
    baseURL: baseUrl,    
})

export default apiTropa