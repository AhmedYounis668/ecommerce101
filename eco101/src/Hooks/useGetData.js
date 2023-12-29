import baseurl from "../Api/BaseUrl"



const useGetdata=async(url,params)=>{

    const res=await baseurl.get(url,params)
    return res.data

}



export default useGetdata