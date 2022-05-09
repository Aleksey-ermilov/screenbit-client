import  {$host} from './index'

export const registrationUser = async () => {
    const {data} = await $host.post('/api/user/registration/user')
    return data
}
export const registrationAuth = async ({email, phone, password}) => {
    const {data} = await $host.post('/api/user/registration/auth', {email, phone, password})
    return data
}

export const login = async ({email, phone, password}) => {
    const {data} = await $host.post('/api/user/login', {email, phone, password})
    return data
}