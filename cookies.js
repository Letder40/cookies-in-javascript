//dura un mes 
function createCookie(name,value){
  const time = new Date();
  time.setTime(time.getTime()+(30*86400000));
  const UTCtime = time.toUTCString();
  document.cookie = name +"="+value+";"+"expires="+UTCtime+";path=/";
  return "creada";
}
//hasta que se cierre el navegador
function create_short_cookie(name,value){
  document.cookie = name +"="+value+";";
  return "creada";
}

//obtine cookies y la muestra por consola
function getCookie(cookie) {
  let x;
  let i;
  let comprobacion;

  let name = cookie + "=";
  let dc = document.cookie.split(";");
  console.log("-------------------------------"+"\n"+"BUSCANDO COOKIE ->");
  for (i=0;i<dc.length;i++){
    busca = dc[i].indexOf(name);
    console.log("busqueda indice :"+i+ " " + busca+" "+dc[i]);
    console.log("cookie == "+dc[i])
    if (busca != -1){
      x = i;
      comprobacion = true;
      console.log(x)
    }
  }
  if(comprobacion==true){
  const resultado = dc[x];
  const valor = resultado.split("=");
  return valor[1];
  }else{
    return undefined;
  }
}
console.log("linked")

//obtine cookies y no la muestra por consola
function weakGetCookie(cookie) {
  let x;
  let i;
  let comprobacion;

  let name = cookie + "=";
  let dc = document.cookie.split(";");
  for (i=0;i<dc.length;i++){
    busca = dc[i].indexOf(name);
    if (busca != -1){
      x = i;
      comprobacion = true;
    }
  }
  if(comprobacion==true){
  const resultado = dc[x];
  const valor = resultado.split("=");
  return valor[1];
  }else{
    return undefined;
  }
}
//borrar cookies
function borrarCookie(cookie,valor){
  document.cookie = cookie+"="+valor+";expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/"
  weakGetCookie(cookie)
}
function borrarShortCookie(cookie,valor){
  document.cookie = cookie+"="+valor+";expires=Thu, 01 Jan 1970 00:00:00 UTC"
}
console.log("linked")

//Letder40