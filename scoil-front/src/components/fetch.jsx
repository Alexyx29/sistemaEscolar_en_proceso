import { getActualLang } from "./useLanguage";
import { getItem } from "./useStorage";
/**
 * Clase Fetch
 */
class FetchClass{
	/**
	 * Proceso para llamar al servidor
	 * @param {string} url 
	 * @param {string} method 
	 * @param {FormData} form 
	 * @returns 
	 */
	async fetching(url, method, form = null, file = false){
		let options = {
			"method": method,
			"mode": "cors",
			"cache": "no-cache",
			"credentials": "same-origin",
			"Content-Type": "multipart/form-data",
			"Accept": "application/json"
		}

		if(file){
			options.responseType = 'blob';
		}
		
		let token = getItem('_token');
		
		if(token){
			let device = getItem('lib_device');
			let langActual = getActualLang();
			options.Authorization = `Bearer ${token}`;
			if(method !== 'GET'){
				if(!form){
					form = new FormData();
				}
				form.append('_token', token);
				form.append('_device', device);
				form.append('_lang', langActual.iso + '_' + langActual.iso_country);
			} else {
				url += '?_token=' + token + '&_device=' + device + '&_lang=' + langActual.iso + '_' + langActual.iso_country;
			}
		}

		if(form){
			options.body = form;
		}
		const response = await fetch(url, options);
		if(file){
			return response;
		} else {
			const result = await response.text();
			if(response.ok){
				try{
					let r = result ? JSON.parse(result) : null;
					return r;
				} catch(e){
					return response
				}
			}
			throw (result);
		}
	}
}

const Fetch = new FetchClass();
export default Fetch;