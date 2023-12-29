import baseurl from "../Api/BaseUrl"

 const  usedeletedata=async(url,params)=>{
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res=await baseurl.delete(url,config,params)
    return res.data;
}

export default usedeletedata