import axios from 'axios'


var baseUrl

if(process.env.NODE_ENV === 'development') {
    baseUrl =  'https://backzinho.tropa.digital/'
} else {
    baseUrl =  'https://backzinho.tropa.digital/'
}

const apiTropa = axios.create({
    baseURL: baseUrl,    
})

export default apiTropa