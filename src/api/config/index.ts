import axios from "axios";

export const Api = axios.create({
	baseURL: 'http://apifront.idbrasil.com:8080/api_teste_frontend'
})
