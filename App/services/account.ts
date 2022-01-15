import axiosConfig from './http'

export const getAccountInfo = async()=> {
    return await axiosConfig.get({}, 'accounts', {})
}