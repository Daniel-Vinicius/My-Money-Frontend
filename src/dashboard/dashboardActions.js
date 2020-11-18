import axios from 'axios'
import consts from '../consts'
const BASE_URL = consts.API_URL

export function getSummary() {
    const request = axios.get(`${BASE_URL}/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}