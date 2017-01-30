var Persistencia = (function(){

  var salvaLocalStorage = function(postIts){
    if(localStorage.getItem('postIts')){
      localStorage.removeItem('postIts');
    }
    localStorage.setItem('postIts', postIts);
  };

  var getValoresDaPesistencia = function(postIts){
    if(!localStorage.getItem('postIts')){
      return null;
    }
    return localStorage.getItem('postIts');
  };

  return {
    salvaLocalStorage: salvaLocalStorage,
    getValoresDaPesistencia: getValoresDaPesistencia
  };
})();
