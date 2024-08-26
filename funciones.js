function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google')
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent() ;
}