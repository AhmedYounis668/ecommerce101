import baseurl from "../Api/BaseUrl";

const useinsertdatanotimage=async(url,params)=>{
   
    const res=await baseurl.post(url,params)
    return res;
    }
    export default useinsertdatanotimage