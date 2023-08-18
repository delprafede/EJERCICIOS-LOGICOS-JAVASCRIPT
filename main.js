
//A_ Solicitar al usuario por pantalla ingresar un mínimo de 5 elementos. Una vez que el usuario desee finalizar, realizar la sumatoria de todos los elementos del array.


    //     let elemento=[];
    //     let num = 0;
    //     let op = "s";
    //     let i = 0;
    //     let acu = 0;
    //    let ok =  prompt("ingrese al menos 5 elementos ok!")
    //    if (ok == "ok"){

    //        while (op == "s") {
    //            i = i + 1
               
    //            num = prompt( `Ingrese el ${i}° numero` );
    //            num = +num;
    //         elemento.push(num);
            
    //         op = prompt("Desea Continuar la Carga S/N");
    //         if (op == "n" && i < 5){
    //             let continuar = prompt("faltan elementos: continuar (C)")
                
    //             if (continuar == "c") {
                    
    //                 op = "s"
                    
    //             }
    //         }
                        
                          

    //                     }
                    
    //             } 
    //             for (let j = 0; j < elemento.length; j++) {
    //                 acu  = acu + elemento[j];
    //                 console.log(acu);
    //             } 
        
    //     console.log(elemento);
    //     console.log(i);
        
    //     console.log(acu);

    //B_ Solicitar al usuario ingresar por pantalla una lista de calificaciones de sus alumnos, luego devolver el promedio de dichas calificaciones. 

        let cantidadDeAlumnos = parseInt(0) 
        let calificaciones = []
        let promedio = 0   
        cantidadDeAlumnos = prompt(`Cuantos alumnos quiere calificar`)
        for (let i = 1; i <= cantidadDeAlumnos; i++) {
        calificaciones.push( parseInt( prompt(`Ingrese la calificacion ${i}° alumno`)))
        
        console.log(calificaciones);

        }
        for (let j = 0; j < calificaciones.length; j++) {
                            promedio  += calificaciones[j];
                            
                        }
                    
                        alert(`El promedio total de sus ${cantidadDeAlumnos} alumnos es: ${promedio / cantidadDeAlumnos} `)

