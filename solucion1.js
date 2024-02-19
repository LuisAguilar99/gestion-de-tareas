 <script>
        function filtroTareas(tareas) {
            const hoy = new Date();
            var tareasVencidas = 0;
            var tareasPendientes = [];
        
            for (var i = 0; i < tareas.length; i++) {
                var tarea = tareas[i];
                //Agregar hora para evitar restar un dia
                var fechaLimite = new Date(tarea.fechaLimite + 'T00:00:00-06:00');
                if (!tarea.completada) {
                    if (fechaLimite < hoy) {
                        tareasVencidas++;
                    } else {
                        tareasPendientes.push({
                            nombre: tarea.nombre,
                            fechaLimite: tarea.fechaLimite
                        });
                    }
                }
            }
        
            tareasPendientes.sort(function(a, b) {
                var fecha1 = new Date(a.fechaLimite);
                var fecha2 = new Date(b.fechaLimite);
                return fecha1 - fecha2;
            });

            const resultado = {
                vencidas: tareasVencidas,
                pendientes: tareasPendientes
            };

            return resultado;
        }
        
        var tareas = [
            { nombre: 'Completar informe', fechaLimite: '2024-02-18', completada: false },
            { nombre: 'Preparar presentacion', fechaLimite: '2024-02-15', completada: false },
            { nombre: 'Enviar correo electronico', fechaLimite: '2024-04-05', completada: false }
        ];
        
        console.log(filtroTareas(tareas));
        
    </script>
