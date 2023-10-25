var fs=require('fs');

fs.readFile('C:\\Users\\Public\\node_prog\\searchf.txt', function (err, data) {

  if (err) throw err;

 

  if(data.includes('hello')){

   console.log(data.toString())

  }

else

{

  console.log('word not found');

}

});

 