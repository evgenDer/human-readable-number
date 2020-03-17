module.exports = function toReadable (number) {
    let result='';
    let single='';
    let double='';
    let triple='';
    switch(Math.trunc((number%100)/10)){
        case 0:
            break;
        case 1:
            {
                switch(number%100){
                    case 10: 
                        double+='ten';
                        break;
                    case 11: 
                        double+='eleven';
                        break;
                    case 12: 
                        double+='twelve';
                        break;
                    case 13: 
                        double+='thirteen';
                        break;
                    case 15: 
                        double+='fifteen';
                        break;
                    case 18: 
                        double+='eighteen';
                        break;
                    default: double+= getNumber(Math.trunc(number % 10))+'teen';
                }
            } 
            break;
        case 2: 
             double+='twenty';
             break;
        case 3:
            double+='thirty';
            break;
        case 4:
            double+='forty';
            break;
        case 5:
            double+='fifty';
            break;
        case 8:
            double+='eighty';
            break;
        default:
            double+=getNumber(Math.trunc((number%100)/10))+'ty';
    }

    if(Math.trunc((number%100)/10)>1 && single.length==0){
        single+=' '+ getNumber(Math.trunc(number%10));
    }
    //single+=getNumber(Math.trunc(number%10));
    if(single.length==0 || Math.trunc(number%10)==0)
        single='';
    if(double.length==0)
        {
            double='';
            single+=getNumber(Math.trunc(number%10));
        }
    triple+=getNumber(Math.trunc(number/100))+' '+'hundred'+' ';
    if(triple.includes('zero'))
        triple='';
             
    result=triple+double+single;
    if(result.includes(" zero"))
    {
        result=result.slice(0,result.indexOf(" zero"));
    }
    return result;
}
  
function getNumber(number){
      switch(number){
          case 0:
              return 'zero';
          case 1: 
              return 'one';
          case 2: 
              return 'two';
          case 3:
              return 'three';
          case 4:
              return 'four';
          case 5:
              return 'five';
          case 6:
              return 'six';
          case 7:
              return 'seven';
          case 8: 
              return 'eight';
          case 9:
              return 'nine';
          default:
              return '';
      }
  
  }
