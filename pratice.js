api_res = [
    {
        id:1,
        name: "manish",
        address: "ktm"
    }
    ,
    {
        id:2,
        name: "shiva",
        address: "dhading"
    }
]


function getData(input, data){
    var arr = []
    for(i=0; i < input.length; i++){
        arr.push(input[i][data])
    }
    return arr;
}

result = getData(api_res, "id")
console.log({result});
