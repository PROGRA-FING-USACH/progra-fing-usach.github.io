<p><img src="https://progra-fing-usach.github.io/IMGs/logo-fing.png" alt="LogoUSACH" width="40%" align="right" hspace="10px" vspace="0px"></p>

# 10145- FUNDAMENTOS DE PROGRAMACIÓN PARA INGENIERÍA

# CONTENIDOS Y FECHAS DE EVALUACIONES

## TEORÍA 

### CONTENIDOS
 
**UNIDAD 1: FUNDAMENTOS DE PROGRAMACIÓN**
1. Introducción a Python:
    * Tipos de datos: (int, float, complex, boolean, str).
    * Operadores aritméticos (+, -, *, /, //, %, **).
    * Precedencia.
    * Expresiones.
    * Funciones de cambio de tipo.
    * Operador asignación (=). 
    * Variables.
    * Reglas de nombres para variables.
2. Strings e I/O:
    * Concepto de objeto, atributo y método.
    * Tipo de dato string.
    * Métodos de los strings.
    * Indexación básica.
    * Función input().
    * Función print().
3. Control de flujo:
    * Operadores de comparación (<, <=, >, >=, !=, ==).
    * Operadores booleanos (not, and, or).
    * Control de flujo usando if.
    * Control de flujo alternativo usando if-else.
    * Control de flujo alternativo usando if-elif-else.
    * Anidamiento.
4. Iteración:
    * Concepto de iteración y tautología.
    * Iteración usando while.
    * Uso de variables para iterar y para acumular.
    * Trazas de código.
    * Iteración sobre objetos.
    * Iteración usando for-in.
    * Función range().
    * Diferencias entre for-in y while.
5.  Tipos de datos compuestos: Listas
    * Concepto de objeto.
    * Tipo de dato lista.
    * Métodos de las listas (selección, agregación, actualización y eliminación).
    * Recorridos de listas.
    * Listas de listas.
    * Mutabilidad.
    * Paso por referencia.
    * Listas de listas.
    * Conversión de string a listas (split, strip, join)

**UNIDAD 2: FUNCIONES Y ABSTRACCIÓN**

6. Funciones nativas e importadas:
    * Concepto de función.
    * Funciones nativas.
    * Funciones importadas.
    * Uso de pip e instalación de módulos.
    * Consulta de documentación.
7. Funciones propias:
    * Sintaxis de funciones propias.
    * Uso de return.
    * Tiempo de definición vs tiempo de ejecución.
    * Scope.
    * Keyword arguments.
    * Parámetros por defecto


**UNIDAD 3: PROGRAMACIÓN PARA INGENIERÍA**

8. Archivos:
    * Tipo de dato archivo.
    * Métodos y atributos de los archivos.
    * Leer y escribir en archivos de texto plano y csv
    * Acceder a archivos por ruta absoluta y relativa.
    * Encoding y mapas de caracteres.

9. Recursión:
    * Concepto de recursión.
    * Definición de funciones recursivas (Ecuaciones de recurrencia, caso base).
    * Limitaciones y ventajas de la recursión.
    * Recursión sobre objetos.


### RESUMEN DE EVALUACIONES

|Calificación| Ponderación | Fecha de publicación | Fecha de entrega |
| ------ | ------| ------- |------- |
|Actividades en clases (A)| 15%| En horario de clases | Todas las clases |
|Tarea 1 (T1)| 20%| 04-11-24 | 16-11-24 |
|Tarea 2 (T2)| 20%| 09-12-204 | 20-12-24 |
|Ensayo 1 (E1)| 2.5%| 28-10-24 | 02-11-24 |
|Ensayo 2 (E2) |2.5%| 02-12-24 | 06-12-24 |
|Prueba 1 (P1) | 20%| - | Semana 04-11-24, en horario de laboratorio |
|Prueba 2 (P2) | 20%| - | Semana 09-12-24, en horario de laboratorio |

El estudiante debe tener un **75%** de asistencia para aprobar la asignatura.

El cálculo de la nota se hace siguiendo el siguiente algoritmo:

```python

promedio_tareas = (T1 + T2)/2
promedio_pruebas = (P1 + P2)/2
promedio_ensayos = (E1 + E2)/2
promedio_final = round(A * 0.15 + promedio_tareas * 0.4 + promedio_pruebas * 0.2 + promedio_ensayos * 0.2, 1)
if asistencia > 0.75:
  if promedio_final >= 4.5:
    promedio_final = promedio_final
  elif promedio_final >= 4.0 and promedio_tareas >= 4.0 and promedio_pruebas >= 4.0:
    promedio_final = promedio_final
  else:
    promedio_final = promedio_final * 0.6 + examen * 0.4
else:
   promedio_final = min([promedio_final, 3.5])

```


### PLANIFICACIÓN SEMANA A SEMANA


#### CALENDARIO DE GUÍAS Y TAREAS

| Semana | Fecha    | Temario semanal*                   | Evaluaciones          |
|--------|----------|------------------------------------|-----------------------|
| 1      | 23-09-24 | 01. Elementos básicos de Python    |                       |
| 2      | 30-09-24 | 02. Strings e I/O                  |                       |
| 3      | 07-10-24 | 03. Control de Flujo               |                       |
| 4      | 14-10-24 | 04. Iteraciones                    |                       |
| 5      | 21-10-24 | 05. Listas                         |                       |
| 6      | 28-10-24 |                                    | E1                    |
| 7      | 04-11-24 | 06. Funciones nativas e importadas | P1                    |
| 8      | 11-11-24 | Semana de pruebas - no hay clases  | T1                    |
| 9      | 18-11-24 | 07. Funciones propias              |                       |
| 10     | 25-11-24 | 08. Archivos                       |                       |
| 11     | 02-12-24 | 08. Recursión                      | E2                    |
| 12     | 09-12-24 |                                    | P2                    |
| 13     | 16-12-24 | Semana de pruebas - no hay clases  | T2                    |
| 14     | 23-12-24 |                                    |                       |
| 15     | 30-12-24 | Semana de pruebas - no hay clases  |                       |
| 16     | 06-01-25 |                                    | Ex                    |
| 17     | 13-01-25 |                                    | Prueba de suficiencia |

* Puede variar dependiendo de feriados, suspensiones y otros.





## LABORATORIO

# EN CONSTRUCCIÓN


## NOTA FINAL

La calificación final se calcula siguiendo el siguiente algoritmo:
```python
if promedio_teoria >= 4.0 and promedio_laboratorio >= 4.0:
  promedio_final = round((promedio_teoria + promedio_laboratorio)/2)
else:
  promedio_final = min(promedio_teoria, promedio_laboratorio)

```

Si el estudiante aprueba solo teoría o solo laboratorio, la calificación se guarda por dos semestres consecutivos de acuerdo al artículo 6.4 del reglamento complementario de la Facultad de Ingeniería.


