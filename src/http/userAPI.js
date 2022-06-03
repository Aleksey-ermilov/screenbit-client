import  {$host,$authHost} from './index'

export const registrationUser = async () => {
    const {data} = await $host.post('/api/user/registration/user')
    localStorage.setItem('user',JSON.stringify(data.user))
    return data
}
export const registrationAuth = async ({email, phone, password,user_id}) => {
    const {data} = await $host.post('/api/user/registration/auth', {email, phone, password,user_id})
    localStorage.setItem('token',data.token)
    localStorage.setItem('user',JSON.stringify(data.user))
    return data
}

export const login = async ({email, phone, password}) => {
    const {data} = await $host.post('/api/user/login', {email, phone, password})
    localStorage.setItem('token',data.token)
    localStorage.setItem('user',JSON.stringify(data.user))
    return data
}

export const check = async (user_id) => {
    const {data} = await $host.get(`api/user/auth/${user_id}`)
    localStorage.setItem('token',data.token)
    return data
}
export const httpFavorites = async (favorite,user_id) => {
    const {data} = await $host.post('/api/user/favorites', {favorite,user_id})
    return data
}
export const httpFavoritesCount = async (product_id,count,user_id) => {
    const {data} = await $host.post('/api/user/favoritescount', {product_id,count,user_id})
    return data
}

export const httpCartByIconCart = async (cart,count,user_id) => {
    const {data} = await $host.post('/api/user/cartbyicon', {cart,count,user_id})
    return data
}
export const httpAddCart = async (cart,count,user_id) => {
    const {data} = await $host.post('/api/user/addcart', {cart,count,user_id})
    return data
}
export const httpDeleteCart = async (product_i,user_id) => {
    const {data} = await $host.post('/api/user/deletecart', {product_i,user_id})
    return data
}
export const httpOrdering = async (cart,user_id,selectedAddress) => {
    const {data} = await $authHost.post('/api/user/ordering', {cart,user_id,selectedAddress})
    return data
}
export const httpRepair = async (repair,user_id) => {
    const {data} = await $authHost.post('/api/user/repair', {repair,user_id})
    return data
}

export const httpAddAddress = async (address,user_id) => {
    const {data} = await $host.post('/api/user/addaddress', {address,user_id})
    return data
}
export const httpChangeAddresses = async (address,user_id) => {
    const {data} = await $host.post('/api/user/chengeAddaddress', {address,user_id})
    return data
}
export const httpDeleteAddress = async (address_id,user_id) => {
    const {data} = await $host.post('/api/user/deleteaddress', {address_id,user_id})
    return data
}

export const httpChangeName = async (name,lastname,patronymic,user_id) => {
    const {data} = await $authHost.post('/api/user/fullname', {name,lastname,patronymic,user_id})
    return data
}
export const httpChangeBirthday = async (birthday,user_id) => {
    const {data} = await $authHost.post('/api/user/birthday', {birthday,user_id})
    return data
}
export const httpChangePhone = async (phone,user_id) => {
    const {data} = await $authHost.post('/api/user/phone', {phone,user_id})
    return data
}
export const httpChangeEmail = async (email,user_id) => {
    const {data} = await $authHost.post('/api/user/email', {email,user_id})
    return data
}
export const httpChangePassword = async (password,oldPassword,user_id) => {
    const {data} = await $authHost.post('/api/user/password', {password,oldPassword,user_id})
    return data
}
export const httpChangeGender = async (gender,user_id) => {
    const {data} = await $authHost.post('/api/user/gender', {gender,user_id})
    return data
}

export const httpPasswordRecoveryLogin = async (login) => {
    const {data} = await $host.post('/api/user/passwordRecoveryLogin', {login})
    return data
}
export const httpPasswordRecoveryCode = async (code,login) => {
    const {data} = await $host.post('/api/user/passwordRecoveryCode', {code,login})
    return data
}
export const httpPasswordRecoveryPassword = async (password,login) => {
    const {data} = await $host.post('/api/user/passwordRecoveryPassword', {password,login})
    return data
}

export const httpAddImg = async (formDate) => {
    const {data} = await $authHost.post('/api/user/img', formDate)
    return data
}
export const httpChangeImg = async (newImg,user_id) => {
    const {data} = await $authHost.post('/api/user/changeImg', {newImg,user_id})
    return data
}
/*
export const httpOrderRepair = async (product_i,user_id) => {
    const {data} = await $host.post('/api/user/deletecart', {product_i,user_id})
    return data
}*/
