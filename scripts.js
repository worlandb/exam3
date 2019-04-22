
//Search in https://www.npmjs.com/ (Links to an external site.)Links to an external site. for a package that will help you read in the contents of a json file (use the json file provided)
//using Node.js - jsonfile @ https://www.npmjs.com/package/jsonfile

//Using the package found in step 1, read in the data from data.json
//Use this file for your json data file >>> data.json
const jsonfile = require('jsonfile')
const file = 'data.json'
let obj;
var jobj = {

};

jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)

    //console.log('test');
    //console.log(obj);   //writes entire JSON to console for testing
    const keys = Object.keys(obj);
    //console.log(keys);  //searches for and displays keys
    var values = Object.values(obj); 
    //console.log(values);   //searches for and displays values
    
    
    //for (var i = 0; i < obj.length; i++) {

       // var val = [Object.values(obj)] = {

       // };

      //  arr.push(obj);
    //}
    
    
    var val = Object.values(obj);
    //val.push(Object.values(obj));
    for (let i = 0; i < val.length ; i++) {

        console.log(val[i]);

    }
    //for(var i in obj) {    

        //var item = obj[i];   
    
        //jobj.push

        //);
    //}

})


//Display all  the "fname" and "age" data items  in the console
//Be sure to use appropriate looping constructs. If I add another object to the items array in data.json, the code should not need to be edited.
//var exjson = {'key':'...abc...', 'key2':'...xyz...'};
