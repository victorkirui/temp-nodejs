//This is the fs module -asynchronous version

const { readFile, writeFile } = require('fs');

readFile('./folder/file1.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }else{
        const first = result;

        readFile('./folder/file2.txt','utf8',(err,result)=>{
            if(err){
                console.log(err);
                return;
            }else{
                const second = result;

                writeFile('./folder/file4.txt',`${first} : ${second}`,{ flag: 'a' },(err,result)=>{
                    if(err){
                        console.log(err);
                        return;
                    }else{
                        console.log(result);
                    }
                })
            }
})
}})