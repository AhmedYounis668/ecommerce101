import baseurl from "../Api/BaseUrl";



const useGetDatatoken =async(url,params) => {
    const config={
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res=await baseurl.get(url,config)
    return res;
}

export default useGetDatatoken
