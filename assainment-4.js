

function calculateMoney(ticketSale){
    if(typeof ticketSale !=='number'){
        return "Invalid Number";
     }
    else if(ticketSale <0){
        return "Invalid Number";
     }
    else{
        const ticketPrice=120;
        const totalTicketPrice=ticketSale*ticketPrice;
        const guard=500;
        const totalStaf=8*50;
        const guardTotalStaf=guard+totalStaf;
        const total=totalTicketPrice-guardTotalStaf;
        return total;
    }
}





function checkName(name){
    const lastLetter=name.slice(-1);
    if(typeof name !=='string'){
        return 'invalid';

    }
     else if(lastLetter==='a' || lastLetter==='A' || lastLetter==='y' || lastLetter==='Y' ||  lastLetter==='i' || lastLetter==='I' || lastLetter==='e' || lastLetter==='E' || lastLetter==='o' || lastLetter==='O' || lastLetter==='u' || lastLetter==='U' || lastLetter==='w' || lastLetter==='W')
    {
        return 'good name';
    }
    else{
        return 'bad name';
    }
}





function deleteInvalids(array) {
    if(Array.isArray(array) === false){
        return 'invalid array';
        
    }
    let beforeArray=[];
    for(let num of array){
        if(typeof(num)==='number' && !isNaN(num) && typeof(num) != 'string' && typeof(num) !='object'){
            beforeArray.push(num);
        }
    }
    return beforeArray; 
}





function password(obj) {
    let birthYear=obj.birthYear;
    birthYear=birthYear.toString();
    let done=true;
    if(birthYear.length<4 || birthYear.length>4){
        done=false;
        return 'invalid';
    }
    
    let webSiteName=obj.siteName;
    let userName=obj.name;
    let objectKeys=Object.getOwnPropertyNames(obj);
    if(objectKeys.length<3 || objectKeys.length>3){
        done=false;
        return 'invalid';
    }

    let webSiteNameF=webSiteName.charAt(0).toUpperCase() + webSiteName.slice(1);
    const passwordSet=webSiteNameF+'#'+userName+'@'+birthYear;
    return passwordSet;
    
}






function monthlySavings(arr,livingCost){
    let primaryAccount=0;
    let check = true;
    if(!Array.isArray(arr) || typeof(livingCost)!='number'){
        check=false;
    }
    let saving;
    if(check){
        for(let i=0 ; i<arr.length; i++){
            if(arr[i]>=3000){
                primaryAccount+=arr[i]-arr[i] * 20 / 100;
            }
            else{
                primaryAccount+=arr[i];
            }
        }
        saving=primaryAccount-livingCost;
    }
    if(saving>=0 && check === true ){
        return saving;
    }
    else if(saving<0 && check === true ){
        return 'earn more';
    }
    else{
        return 'invalid';
    }

}
