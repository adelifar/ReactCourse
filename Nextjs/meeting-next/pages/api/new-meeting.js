import fsPromise from 'fs/promises'
//      /api/new-meeting
const handler=async(req,res)=>{
    // req.method
    // req.body
    if(req.method=='POST'){
        const data=req.body;
        //send data to database mongodb mysql
        const filePath='data.json';
        const jsonData=await fsPromise.readFile(filePath);
        const savedData=JSON.parse(jsonData);
        savedData.push({...data,id:Math.random()*500});
        await fsPromise.writeFile(filePath,JSON.stringify(savedData))
        res.status(200).json({message:'data Inserted'});
    }

}
export default handler;