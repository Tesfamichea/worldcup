const country1=document.getElementById('country1');
let tr=document.querySelectorAll('.row td');
let tr1=document.querySelectorAll('.row2 td');
let tr2=document.querySelectorAll('.row3 td');
let tr3=document.querySelectorAll('.row4 td');
let i=0;
let itemCou=[];
let itemPoint=[];
let itemCou1=[];
let itemPoint1=[];
let itemCou2=[];
let itemPoint2=[];
let itemCou3=[];
let itemPoint3=[];

 
//adding country name="country" and point="ppoint"
function clean()
{
    for(let i=0; i<tr.length; i++)
    {
        if(i%2==0)
        {
            tr[i].innerText="country"
        }
        else{
            tr[i].innerText="point"
        }
    }
}
//for clearing the table 
// tr.forEach(element => {


//     console.log(element);
//     //  let count=0;
//     //  if(element%2==0)
//     //  {
//     //     element.innerText="country"
//     //  }
//     //  else{
//     //     element.innerText="point"
//     //  }
//     //  count++;
// });
// let ex=tr[country].innerText="hello woorld";
// console.log(ex);
clean();
//inserting element to the table
function addButton()
{
    let country=0;
    let points=1;
    do{
        
        if(country%2==0){
            let countrys=window.prompt("enter country name");
             let myCoun= tr[country].innerText=countrys;
             itemCou.push(myCoun);
            }
       else{
        let point=parseInt(window.prompt("enter the point "));
       let myPoint= tr[country].innerText=point;
       itemPoint.push(myPoint);
            }
       
        country++;
        i++;
         
    }while(i<8);
    
     
}
function addButton1()
{
    let country=0;
    // let points=1;
   
    do{
        
        if(country%2==0){
            let countrys=window.prompt("enter country name");
           let  myCoun= tr1[country].innerText=countrys;
             itemCou1.push(myCoun);
            }
       else{
        let point=parseInt(window.prompt("enter the point "));
       let myPoint= tr1[country].innerText=point;
       itemPoint1.push(myPoint);
            }
       
        country++;
        i++;
         
    }while(i<8);
    
     
}
function addButton2()
{
    let country=0;
    
    do{
        
        if(country%2==0){
            let countrys=window.prompt("enter country name" );
             let myCoun=tr2[country].innerText=countrys;
             itemCou2.push(myCoun);
            }
       else{
        let point=parseInt(window.prompt("enter the point " ));
        let myPoint= tr2[country].innerText=point;
       itemPoint2.push(myPoint);
            }
       
        country++;
        i++;
         
    }while(i<8);
    
     
}
function addButton3()
{
    let country=0;
    let points=1;
    do{
        
        if(country%2==0){
            let countrys=window.prompt("enter country name");
           let  myCoun= tr3[country].innerText=countrys;
             itemCou3.push(myCoun);
            }
       else{
        let point=parseInt(window.prompt("enter the point "));
       let myPoint= tr3[country].innerText=point;
       itemPoint3.push(myPoint);
            }
       
        country++;
        i++;
         
    }while(i<8);
    
     
}
 
//to display hi chart
function chart()
{
    
    document.addEventListener('click', function () {
        Highcharts.chart('container', {
            color: {
                radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                stops: [
                   [0, '#003399'],
                   [1, '#3366AA']
                ]
            },
            chart: {
                type: 'column'
            },
            title: {
                text: 'Group 1'
            },
            xAxis: {
                categories: itemCou
                 
            },
            yAxis: {
                title: {
                    text: 'point'
                }
            },
            series: [{
                name: 'Group 1',
                data: itemPoint
            }]
        });
    });
}
function chart1()
{
    
    document.addEventListener('click', function () {
        Highcharts.chart('container1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Group 2'
            },
            xAxis: {
                categories: itemCou1
            },
            yAxis: {
                title: {
                    text: 'point'
                }
            },
            series: [{
             
                data: itemPoint1
            }]
        });
    });
}
function chart2()
{
    
    document.addEventListener('click', function () {
        Highcharts.chart('container2', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Group 3'
            },
            xAxis: {
                categories: itemCou2
            },
            yAxis: {
                title: {
                    text: 'point'
                }
            },
            series: [{
             
                data: itemPoint2
            }]
        });
    });
}
function chart3()
{
    
    document.addEventListener('click', function () {
        Highcharts.chart('container3', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Group 4'
            },
            xAxis: {
                categories: itemCou3
            },
            yAxis: {
                title: {
                    text: 'point'
                }
            },
            series: [{
             
                data: itemPoint3
            }]
        });
    });
}
             
         
 













