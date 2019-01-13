var calculadora =
{
    numero1: "",
    operacion: "",
    numero2: "",
    finoperacion: -1
}


var r = document.getElementById('display');

var on = document.getElementById('on');
var uno  = document.getElementById('1');
var dos  = document.getElementById('2');
var tres  = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var cero = document.getElementById('0');
var punto = document.getElementById('punto');
var mas = document.getElementById('mas');
var menos = document.getElementById('menos');
var por = document.getElementById('por');
var dividido = document.getElementById('dividido');
var igual = document.getElementById('igual');
var sign = document.getElementById('sign')


on.addEventListener('click',reconocer);
uno.addEventListener('click',reconocer);  
dos.addEventListener('click', reconocer);
tres.addEventListener('click', reconocer);
cuatro.addEventListener('click', reconocer);
cinco.addEventListener('click', reconocer);
seis.addEventListener('click', reconocer);
siete.addEventListener('click', reconocer);
ocho.addEventListener('click', reconocer);
nueve.addEventListener('click', reconocer);
cero.addEventListener('click', reconocer);
punto.addEventListener('click', reconocer);
mas.addEventListener('click', reconocer);
menos.addEventListener('click', reconocer);
por.addEventListener('click', reconocer);
dividido.addEventListener('click', reconocer);
igual.addEventListener('click', reconocer);
sign.addEventListener('click', reconocer);

function reconocer(evt)
{
    var tecla = evt.target;
    switch (tecla.id)
        {
            case 'on':
                reducir(on);
                r.innerHTML="0";
                inicializar();
                break;
            case '0':
                reducir(cero);
                validanumero(0);
                break;
            case '1':
                reducir(uno);
                validanumero(1);
                break;
            case '2':
                reducir(dos);
                validanumero(2);
                break;
            case '3':
                reducir(tres);
                validanumero(3);
                break;
            case '4':
                reducir(cuatro);
                validanumero(4);
                break;
            case '5':
                reducir(cinco);
                validanumero(5);
                break;
             case '6':
                reducir(seis);
                validanumero(6);
                break;
             case '7':
                reducir(siete);
                validanumero(7);
                break;
             case '8':
                reducir(ocho);
                validanumero(8);
                break;
             case '9':
                reducir(nueve);
                validanumero(9);
                break;
            case 'mas':
                reducir(mas);
                calcular('mas');
                break;
            case 'menos':
                reducir(menos);
                calcular('menos');
                break;
            case 'por':
                reducir(por);
                calcular('por');
                break;
            case 'dividido':
                reducir(dividido);
                calcular('dividido');
                break;
            case 'igual':
                reducir(igual);
                calcigual();
                break;
            case 'sign':
                reducir(sign);
                cambiodesigno();
                break;
            case 'punto':
                reducir(punto);
                if (validapunto()==false)
                    {
                        validanumero(".");
                    }
                break;
            default:
                break;
        }
}


function reducir(tecla1){
    tecla1.onmousedown = function()                            
    {
        tecla1.style.padding ="2px";
    }
    tecla1.onmouseup=function()
    {
        tecla1.style.padding="0px";
    }
}

function tamanomaximo(){
    var tamano = true;
    if (r.innerHTML.length >=8)
        {
            tamano = false;
        }
    return tamano;
}


function validanumero(n)
{
    estadooperacion();
    if (tamanomaximo()==true)
        {
            if (r.innerHTML=='0' && n!=".")
            {
                r.innerHTML=n;
            }
            else
            {
                if (r.innerHTML=="" && n==".")
                    {
                        r.innerHTML="0"+n;
                    }
                else
                    {
                        r.innerHTML=r.innerHTML+n;
                    }
            }
    
            
        }
}


function validapunto(){
    var p=false;
    for (var i=0; i<=r.innerHTML.length; i++)
        {
            if (r.innerHTML.substr(i,1)==".")
            {
                p=true;
            }
            
        }
    return p;
}

function cambiodesigno()
{
    if(r.innerHTML!="0")
        {
            if (r.innerHTML.substr(0,1)!="-")
                {
                    r.innerHTML="-"+r.innerHTML;
                }
            else 
                {
                    r.innerHTML=r.innerHTML.substr(1,r.innerHTML.length);
                }
            
        }
}

function inicializar()
{
    calculadora.numero1="";
    calculadora.operacion="";
    calculadora.numero2="";
    calculadora.finoperacion=-1;
}


function calcular(operador)
{
    
    if (calculadora.numero1=="")
        {
            calculadora.numero1=r.innerHTML;
            calculadora.operacion=operador
            r.innerHTML='';
            
        }
    else
        {
            if (calculadora.numero2=="")
                {
                    calculadora.numero2=r.innerHTML;
                }
            switch (operador)
                {
                        case 'mas':
                        {
                            var res=(parseFloat(calculadora.numero1) + parseFloat(calculadora.numero2)).toString();
                            validaresultado(res);
                            calculadora.numero1=r.innerHTML;
                            calculadora.operacion="mas";
                            calculadora.finoperacion=calculadora.finoperacion+1;
                            break;
                        }
                    case 'menos':
                        {
                            res=(parseFloat(calculadora.numero1) - parseFloat(calculadora.numero2)).toString();
                            validaresultado(res);
                            calculadora.numero1=r.innerHTML;
                            calculadora.operacion="menos";
                            calculadora.finoperacion=calculadora.finoperacion+1;
                            break;
                        }
                        case 'por':
                        {
                            res=(parseFloat(calculadora.numero1) * parseFloat(calculadora.numero2)).toString();
                            validaresultado(res);
                            calculadora.numero1=r.innerHTML;
                            calculadora.operacion="por";
                            calculadora.finoperacion=calculadora.finoperacion+1;
                            break;
                        }
                        case 'dividido':
                        {
                            res=(parseFloat(calculadora.numero1) / parseFloat(calculadora.numero2)).toString();
                            validaresultado(res);
                            calculadora.numero1=r.innerHTML;
                            calculadora.operacion="dividido";
                            calculadora.finoperacion=calculadora.finoperacion+1;
                            break;
                        }
                }
        }
    
    
}

function calcigual()
{
            calcular(calculadora.operacion);
}

function estadooperacion()
{
    if (calculadora.finoperacion!=-1)
        {
            r.innerHTML="0";
            inicializar();
        }
}

function validaresultado(resp)
{
    if (resp.length>8)
        {
            r.innerHTML=resp.substr(0,8);
        }
    else
        {
            r.innerHTML=resp;
        }
}