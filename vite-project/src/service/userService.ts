import axios from 'axios'
import authFetch from '../custom/interceptors';


async function getUserData()
{
    return await authFetch.post("user")
    
}

export default getUserData;