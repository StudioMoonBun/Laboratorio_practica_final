/*<---JAVASCRIPT --->*/
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const clave = document.getElementById('clave');
const clave2 = document.getElementById('clave2');

formulario.addEventListener('submit', e => {
    e.preventDefault(); /*Usamos preventDefault para que no envie los datos y no recargue la página*/
    validateInputs();
})

//*Configuramos las constantes de los mensajes de error y exito para que aparezca el icono al final del campo a rellenar*//
//*<-------ERROR---------->*//
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error"); /*Se usa querySelector para seleccionar un selector de la parte de CSS*/

    errorDisplay.innerText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

//*<-------CONFIRMACIÓN---------->*//
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

//* Expresión regular (REGEX) para letras y espacios, pueden llevar acentos*//
const isValidnombre = nombre => {
    const re = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;
    return re.test(String(nombre).toLowerCase());
}

//* Expresión regular (REGEX) para mencionar que el campo debe seguir la estructura de un Email*//
const isValidcorreo = correo => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(correo).toLowerCase());
}

//*<------CONSTANTES PARA VALIDAR LOS INPUTS---->*//
const validateInputs = () => {
    const nombreValue = nombre.value;
    const correoValue = correo.value;
    const claveValue = clave.value;
    const clave2Value = clave2.value;

    //*<--------CAMPO NOMBRE---------->*//
     /*En el primer error se índica que aparecerá un texto en caso de que el campo este vacío, sin embargo el segundo error índica que el usuario
     no ha utilizado letras que es lo que se pide en la expresion regular indicada arriba, en el tercer caso se dará como válida si el usuario
    usa únicamente letras*/
    if(nombreValue === '') {
        setError(nombre, 'Nombre requerido');
    } else if (!isValidnombre(nombreValue)) {
        setError(nombre, 'Solo puede contener letras');
    } else {
        setSuccess(nombre); 
    }

    //*<-------CAMPO CORREO ELECTRÓNICO---------->*//
     /*Usamos el anterior campo igual que en el nombre, en el primer error se índica que aparecerá un texto en caso de que el campo este vacío, sin embargo 
    el segundo error índica que el tipo del email tiene una configuración de correo determinada por la constante antes declarada de correoValido. 
    Si todo es correcto pasa a la tercera opción que se ejecuta cuando todo esta correcto*/
    if(correoValue === '') {
        setError(correo, 'Email Requerido');
    } else if (!isValidcorreo(correoValue)) {
        setError(correo, 'Email no válido');
    } else {
        setSuccess(correo);  
    }

    //*<-------CAMPO CLAVE PRINCIPAL---------->*//
     /*Con .length indicamos que la contraseña debe tener menos de 8 caracteres para ser válida*/
    if(claveValue === '') {
        setError(clave, 'Clave requerida');
    } else if (claveValue.length > 8 ) {
        setError(clave, 'La clave debe de tener menos de 8 caracteres')
    } else {
        setSuccess(clave);  
    }

    //*<-------CAMPO CLAVE CONFIRMACION---------->*//
    /*Con los operadores !== estamos indicando que si la clave 2 no es igual que la clave 1 aparecerá un mensaje de error
    indicando que las claves deben ser iguales*/
    if(clave2Value === '') {
        setError(clave2, 'Por favor, confirme su clave');
    } else if (clave2Value !== claveValue) {
        setError(clave2, "Las claves no coinciden");
    } else {
        setSuccess(clave2);  
    } 

    //*<---Creamos una variable que compruebe que las demás condiciones sean correctas para que aparezca el alert al hacer click en enviar------->*//
    if(nombreValue !== '' && isValidnombre(nombreValue) && correoValue !== '' && isValidcorreo(correoValue) && claveValue !== '' && claveValue.length <= 8 && clave2Value !== '' && clave2Value === claveValue){
        alert ("La inscripcion es correcta")
    }

  
}

    






