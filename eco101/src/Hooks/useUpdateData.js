import baseurl from "../Api/BaseUrl"



const UpdateDatawithimage =async (url,params) => {
 
    const config={
        Headers:{"Content-Type":"multypart/data-form",
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }

    }
    const res=await baseurl.put(url,params,config)
    return res;
}

const UpdateProductdata=async(url,params)=>{
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res=await baseurl.put(url,params,config)
    return res;
}

export  {UpdateDatawithimage,UpdateProductdata}
