function deepClone(obj, parent = null){ 
    let result = Array.isArray(obj)?[]:{};
    let _parent = parent;  
    while(_parent){ 
      if(_parent.originalParent === obj){
        return _parent.currentParent;
      }
      _parent = _parent.parent;
    }
    if(obj && typeof obj === "object"){
      for(let key in obj){
        if(obj.hasOwnProperty(key)){
          if(obj[key] && typeof obj[key] === "object"){
            result[key] = deepClone(obj[key],{
              originalParent: obj,
              currentParent: result,
              parent: parent
            });
          }else{
            result[key] = obj[key];
          }
        }
      }
    }
    return result;
  }
  

  var obj1 = {
      x: 1, 
      y: 2
  };
  obj1.z = obj1;
  var obj2 = deepClone(obj1);
  console.log(obj1); 
  console.log(obj2); 
  