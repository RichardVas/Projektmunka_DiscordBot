
export function testoutput(){
    console.log('this is from testloop.js')
}

var obj =
{
    inp0: '1',
    select0: 'Udvozles',
    inp1: '2',
    select1: 'Kick',
    inp2: '3',
    select2: 'Filter',
    inp3: '4',
    select3: 'Date',
    inp4: '5',
    select4: 'Role'
}

function parse(obj)
{
    //console.log(Object.keys(obj).length)  
    for(var key in obj)
    {
       // console.log(obj[key])
    }
}
parse(obj)
//fuggveny, ami parzolhato tombe alakitja a json dictet
function totomb(obj){
    er = []
    tmp = []
    var i =1
    for (var key in obj){
  
        tmp.push(obj[key])
        console.log(tmp)
        if(i == 2)
        {            
            er.push(tmp)
            i=0;
            tmp = []
        }
        ++i;
    }
    return er;
}
dataset = totomb(obj)
console.log(dataset)
//console.log(dataset[0][1])

//fuggveny ami Select paramteret megekeresi a tomben es visszadaj az ahhoz tartozo
function lookforrule(str)
{
    for (var i in dataset){
        if(dataset[i][1] == str){
        console.log(dataset[i][0])
        return dataset[i][0]
        }

    }

}

lookforrule('Role')