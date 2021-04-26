
import City from './City'


const Citys =[
    {name:"Warsaw",image:'/warsaw.png', },
    {name:"Barcelona",image:'/barcelona.png',},
    {name:"Istanbul",image:'/istanbul.png',},
    {name:"Rome",image:'/rome.png', },
    {name:"Bologna",image:'/bologna.png',},
    {name:"Curitiba",image:'/curitiba.png',},
    {name:"Mexico",image:'/mexico-city.png',}
  
  ]


function Cities() {
    return (
      
<div className="d-flex justify-content-between flex-wrap">
<City modon  = {Citys} />
</div>
  
    );
  }
export default Cities;
  