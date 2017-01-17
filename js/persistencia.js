var persistencia = (function(){
  var _convertPostItsToJSON = function(){
    return postIts;
  };

  var _convertJSONtoPostIts = function(object, $divPostIts){
    var postIts = JSON.parse(object);
  }

  var salvaLocalStorage = function($divPostIts){
    if(localStorage.getItem('postIts')){
      localStorage.removeItem('postIts');
    }

    var postIts = _convertPostItsToJSON();
    localStorage.setItem('postIts', JSON.stringify(postIts));
  };

  var getValoresDaPesistencia = function($divPostIts){
    if(!localStorage.getItem('postIts')){
      return;
    }
    var dados = localStorage.getItem('postIts');
    var emptyDiv = $divPostIts.html('');
    _convertJSONtoPostIts(dados, emptyDiv);
  };

  return {
    salvaLocalStorage: salvaLocalStorage,
    getValoresDaPesistencia: getValoresDaPesistencia
  };
})();
