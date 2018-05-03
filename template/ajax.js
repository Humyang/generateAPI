var testFixs = api.protocol + api.host + '/aggcode-mobile'
export function fetch(type, contentTpye, url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: type,
            url: testFixs + url,

            data: params,
            headers: { 'Content-Type': contentTpye }
        }).then(response => {

            resolve(response);
        }).catch((error) => {
            // alert('网络异常')
            reject(error);
        })
    })
}