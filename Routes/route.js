
const RequestHandler = function(req,res){
    const url = req.url;
    const method = req.method;

    if(url==="/" && method === "GET"){
         res.setHeader("Content-type","text/html");
        res.write(`
        <!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primer Programa</title>
</head>
<body>
    
    <a href="/Valores">Valores</a>
    <a href="/Proyectos">Proyectos</a>
    <a href="/Skills">Habilidades</a>
    <a href="/Contact">Contacto</a><br>
    <center>
    <br>
      <hr>
      <p>Soy Rony Rafael De Mota Herrera y soy estudiante del instituto tecnologico de las americas(ITLA), tengo 18 años y soy de <br>Hato Mayor del Rey. 
          Estoy cursando mi cuarco cuatrimestre en la universidad y espero aprender y obtener las habilidades <br>necesarias para asi poder integrarme en el 
          marcado laboral lo mas pronto posible.</p>

</center>
</body>
</html>
        
        `);
        res.end();
    }else if(url==="/Valores"){
        res.setHeader("Content-type","text/html");
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Valores</title>
        </head>
        <body>
            <a href="/">Inicio</a>
            <h2>Valores</h2>
            <ul>
                <li>Respeto</li>
                <li>Honestidad</li>
                <li>Solidaridad</li>
                <li>Paciencia</li>
                <li>Amor</li>
            </ul>
        
        </body>
        </html>`
        )
        res.end();
    }else if(url==="/Proyectos"){
        res.setHeader("Content-type","text/html");
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <a href="/">Inicio</a>
            <center> 
           <h1>Mis Proyectos</h1><br>
           <h3>CV Xamarin.Forms</h3>
                <p>Este fue un proyecto realizado en el lenguaje de Xamarin Forms trabajado en android donde en el cual cree mi CV.</p><br>
                <h3>Lista de tareas</h3>
                    <p>Es una aplicaacion web desarrollada en Veu.js donde cree una pagina de cosas que hacer<br>
                         conectando a una base de datos para asi guardar los datos</p>
                </center>
        </body>
        </html>`
        )
        res.end();
    }else if(url==="/Valores"){
        res.setHeader("Content-type","text/html");
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Valores</title>
        </head>
        <body>
            <a href="/">Inicio</a>
            <h2>Valores</h2>
            <ul>
                <li>Respeto</li>
                <li>Honestidad</li>
                <li>Solidaridad</li>
                <li>Paciencia</li>
                <li>Amor</li>
            </ul>
        
        </body>
        </html>`
        )
        res.end();
    }else if(url==="/Proyectos"){
        res.setHeader("Content-type","text/html");
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <a href="/">Inicio</a>
            <center> 
           <h1>Mis Proyectos</h1><br>
           <h3>CV Xamarin.Forms</h3>
                <p>Este fue un proyecto realizado en el lenguaje de Xamarin Forms trabajado en android donde en el cual cree mi CV.</p><br>
                <h3>Lista de tareas</h3>
                    <p>Es una aplicaacion web desarrollada en Veu.js donde cree una pagina de cosas que hacer<br>
                         conectando a una base de datos para asi guardar los datos</p>
                </center>
        </body>
        </html>`
        )
        res.end();
    } else if(url==="/Skills"){
        res.setHeader("Content-type","text/html");
        res.write(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Habilidades</title>
        </head>
        
        <body>
            <a href="/">Inicio</a>
         <center>   <h2>Habilidades</h2><br>
        
            <table border="1">
                <tr>
                  <td>C#</td> <td>4</td>
                </tr>
                <tr>
                    <td>Xamarin Forms</td><td>3</td>
                </tr>
                <tr>
                    <td>SQL Server</td><td>2</td>
                </tr>
                <tr>
                    <td>Diseño grafico</td> <td>4</td>
                </tr>
                <tr>
                    <td>Java</td><td>2</td>
                </tr>
                    
                
                
               </center>
                
            </table>
        </body>
        
        </html>`
        )
        res.end();
    }else if(url==="/Contact"){
        res.setHeader("Content-type","text/html");
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contacto</title>
        </head>
        <body> 
            <h3><a href="/">Inicio</a></h3>
            <center>
           
            <h1>Contacto</h1><br>
        <form><br>
            <label>Nombre:</label>
            <input type="text">
        </form><br>
        <form>
            <label>Apellido:</label>
            <input type="text">
        </form><br>
        <form>
            <label>Correo:</label>
            <input type="text">
        </form><br>
        <form>
            <label>Descripción:</label>
            <input type="text">
        </form><br>
        <button>Enviar</button></center>
        </body>
        </html>`
        )
        res.end();
    }   else{
        res.statusCode = 404;
        res.end();
    } 
}
 
module.exports = RequestHandler;