import axios from 'axios'
import IRegistration from '../interfaceD/IRegistration';

async function registrationData(data:IRegistration)
{
    return await axios.post("http://localhost:4000/auth/register",data)
    
}

export default registrationData;