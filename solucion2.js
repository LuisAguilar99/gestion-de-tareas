 <script>
        function filtroTareas(tareas) {
            const hoy = new Date();
            
            // Agregar hora para evitar restar 1 dia 
            var tareasVencidas = tareas.filter(tarea => !tarea.completada && new Date(tarea.fechaLimite+'T00:00:00-06:00') < hoy).length;
      
            var tareasPendientes = tareas.filter(tarea => !tarea.completada && new Date(tarea.fechaLimite) >= hoy)
                .sort((a, b) => new Date(a.fechaLimite) - new Date(b.fechaLimite));

            var nombresTareasPendientes = tareasPendientes.map(tarea => tarea.fechaLimite+' '+tarea.nombre);
            
            const resultadoFuncion = {
                vencidas: tareasVencidas,
                pendientes: nombresTareasPendientes
            };

            return resultadoFuncion;
        }
        
        const tareas = [
            { nombre: 'Completar informe', fechaLimite: '2024-02-18', completada: false },
            { nombre: 'Preparar presentacion', fechaLimite: '2024-05-15', completada: false },
            { nombre: 'Enviar correo electronico', fechaLimite: '2024-03-05', completada: false }
        ];
        
        console.log(filtroTareas(tareas));
    
    </script>
