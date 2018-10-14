export default function request(params) {
    return new Promise((resolve, reject)=> {
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include', //send cookie
            method: params.method || 'POST',
            timeout: 5000,
            mode: 'cors',
            body: JSON.stringify(params.body || {})
        }

        fetch(params.url, config).then((response)=> {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                let error = new Error(response.statusText);
                error.response = response;
                //throw  error;
                reject({rspCode: 2000, rspDesc: '网络异常'});
            }
        }).then(response=> {
            return response.json();

        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error);
        });
    })

}