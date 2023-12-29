import baseurl from "../Api/BaseUrl"


const useinsertdata=async(url,params)=>{
    const config={
        headers:{"Content-Type":"multypart/data-form",
        Authorization: `Bearer ${localStorage.getItem("token")}`}
}

const res=await baseurl.post(url,params,config)
    return res;
}

const useinsertdatawithoutimage=(url,params)=>{
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res= baseurl.post(url,params,config)
return res;
console.log(res.data)
}
export {useinsertdata,useinsertdatawithoutimage} 