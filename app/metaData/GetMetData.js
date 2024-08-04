import axios from "axios";  
import API from '../constant/api'

const getMetaData = async () => {
    console.log(API)
    try {
        const res = await axios.get('')
    } catch (error) {
        console.log(error)
    }
}

export default getMetaData