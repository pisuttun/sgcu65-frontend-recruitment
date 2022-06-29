import axios from "axios";

export const GET = (path:string, param?:Object) => {
    return new Promise(async (resolve, reject) => {
        await axios({
            method: "GET",
            url: path,
            params: param || {},
        })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    reject(error.response.data);
                }
            });
    });
};

export const POST_JSON = (path:string, jsondata:any) => {
    return new Promise(async (resolve, reject) => {
        await axios({
            method: "POST",
            url: path,
            data: jsondata,
        })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    reject(error.response.data);
                }
            });
    });
};
