const HOJA = SpreadsheetApp.openById('1b6ne84pOH7YZ1m-Iu4WkYGjxssgFGCgnJN2oiNyxHdc').getActiveSheet();

function doGet(datos)
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google')
}

function doPost(datos)
{
  return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google')
}


function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent() ;
}

function obtenerContactos()
{
    return HOJA.getDataRange().getValues();

}

function insertarContacto(nombre,correo)
{
    HOJA.appendRow([nombre,correo]);

}