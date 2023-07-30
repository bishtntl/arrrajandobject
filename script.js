// Q1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] 

//           let ans=studentRecords.map((item)=> item.name.toUpperCase())
//           console.log(ans)
          
    // Q2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   
    // let studentRecords = [ {name: 'John', id: 123, marks : 98 },
    //       {name: 'Baba', id: 101, marks : 23 },
    //       {name: 'yaga', id: 200, marks : 45 },
    //       {name: 'Wick', id: 115, marks : 75 } ] 

    //       let ans2=studentRecords.filter((item)=> item.marks<50 )
    //       console.log(ans2)
             

    // Q3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // let studentRecords = [ {name: 'John', id: 123, marks : 98 },
    //     {name: 'Baba', id: 101, marks : 23 },
    //     {name: 'yaga', id: 200, marks : 45 },
    //     {name: 'Wick', id: 115, marks : 75 } ] 

    //     let ans3=studentRecords.filter((item)=> item.marks>50 && item.marks<120)
    //     console.log(ans3)
    
    // Q4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // let studentRecords = [ {name: 'John', id: 123, marks : 98 },
    //       {name: 'Baba', id: 101, marks : 23 },
    //       {name: 'yaga', id: 200, marks : 45 },
    //       {name: 'Wick', id: 115, marks : 75 } ] 

    //     let ans4=0;
    //       studentRecords.map((item)=>ans4=+item.marks)
    //       console.log(ans4)

    //   Q5>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    // let studentRecords = [ {name: 'John', id: 123, marks : 98 },
    //      {name: 'Baba', id: 101, marks : 23 },
    //      {name: 'yaga', id: 200, marks : 45 },
    //      {name: 'Wick', id: 115, marks : 75 }   ]
    //    let ans5=studentRecords.filter((item)=> item.marks>50).map((item)=>item.name)
    //      console.log(ans5)

    // let studentRecords = [ {name: 'John', id: 123, marks : 98 },
    //       {name: 'Baba', id: 101, marks : 23 },
    //       {name: 'yaga', id: 200, marks : 45 },
    //       {name: 'Wick', id: 115, marks : 75 } ] 
    //       let ans6=0
    //      studentRecords.filter((item)=>item.id>120).map((item)=>ans6+=item.marks)
    //      console.log(ans6)

    // let studentRecords = [ {name: 'John', id: 123, marks : 98 },
    // {name: 'Baba', id: 101, marks : 23 },
    // {name: 'yaga', id: 200, marks : 45 },
    // {name: 'Wick', id: 115, marks : 75 } ] 
    // let ans7=0;
    // let  studentupdate=studentRecords.map((item)=>{

    //   if(item.marks<50){
    //     item.marks+=15
    //   }
    //   return item

    // }).map((item)=>item.marks>50?ans7+=item.marks:null)
    // console.log(ans7)
//     let studentRecords = [ {name: 'John', class: 12, rollno : 98 },
//           {name: 'Baba', class: 10, rollno: 23 },
//           {name: 'yaga ',class: 11, rollno : 45 },
//           {name: 'Wick',class: 12, rollno : 75 },
//           {name: 'yogesh',class: 9, rollno : 23 },
//           {name: 'yahu',class: 8, rollno : 45 },
//           {name: 'king',class: 6, rollno : 75 } ] 

//     // let ans8=studentRecords.map((item)=>{return item})
//     console.log(studentRecords)
    

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
            {name: 'Baba', id: 101, marks : 23 },
            {name: 'yaga', id: 200, marks : 45 },
            {name: 'Wick', id: 115, marks : 75 } ] 
            let sum = 0
            let ans=studentRecords.map((item)=>sum+=item.marks)
            console.log(sum)
   
   