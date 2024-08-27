function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google')
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent() ;
}

function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById('1b6ne84pOH7YZ1m-Iu4WkYGjxssgFGCgnJN2oiNyxHdc').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;

}