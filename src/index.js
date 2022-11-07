import './style.css';
import './fontstyle.css';

const ship = function(len){
  const length = len
  let hits = 0

  const hit = function(){
    hits++
  }



  return {
    get length(){
      return length
    },
    get hits(){
      return hits
    },
    get isSunk(){
      return (hits>=length)
    },
    hit
  }
}

export {ship}