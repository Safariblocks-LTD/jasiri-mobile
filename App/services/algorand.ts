import axiosConfig from './http'

export const getAccountInfo = async()=> {
    return await axiosConfig.get({}, 'accounts/DQRHSRZMBFJ6P6SFE54XOTHEDRZOFXHE6LQT3YHAIWKKRYFPAYIGOCE6AY', {})
}

export const getAssetInfo = async()=> {
    return await axiosConfig.get({}, 'assets/58648674', {})
}