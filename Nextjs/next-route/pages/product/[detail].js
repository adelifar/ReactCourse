import { useRouter } from "next/router"

const DetailPage=()=>{
    const router=useRouter()
    const value=router.query.detail;
    console.log(value);
    return <h1>Detail page  {value}</h1>
}
export default DetailPage