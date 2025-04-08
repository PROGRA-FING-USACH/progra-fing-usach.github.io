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

|Calificación| Ponderación | Fecha |
| ------ | ------| ------- |
|Actividades en clases (A)| 15%| En horario de clases |
|Control 1 (C1)| 5%| 26-04-25 |
|Control 2 (C2)| 5%| 31-05-25 |
|Control 3 (C3)| 5%| 21-06-25 |
|Prueba 1 (P1) | 35%| 10-05-25 | 
|Prueba 2 (P2) | 35%| 28-06-25 | 

El estudiante debe tener un **75%** de asistencia para aprobar la asignatura.

El cálculo de la nota se hace siguiendo el siguiente algoritmo:

```python

promedio_controles = (C1 + C2 + C3)/3
promedio_pruebas = (P1 + P2)/2
promedio_final = round(A * 0.15 + promedio_controles * 0.15 + promedio_pruebas * 0.7, 1)
if asistencia >= 0.75:
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
| 1      | 17-03-25 | 01. Elementos básicos de Python    |                       |
| 2      | 24-03-25 | 02. Strings e I/O                  |                       |
| 3      | 31-03-25 | 03. Control de Flujo               |                       |
| 4      | 07-04-25 | 04. Iteraciones                    |                       |
| 5      | 14-04-25 | 05. Listas                         |                       |
| 6      | 21-04-25 |                                    | C1                    |
| 7      | 28-04-25 |                                    |                       |
| 8      | 05-05-25 | Semana de pruebas - no hay clases  | P1                    |
| 9      | 12-05-25 | 06. Funciones nativas e importadas |                       |
| 10     | 26-05-25 | 07. Funciones propias              | C2                    |
| 11     | 02-06-25 | 08. Archivos                       |                       |
| 12     | 09-06-25 | 09. Recursión                      |                       |
| 13     | 16-06-25 |                                    | C3                    |
| 14     | 23-06-25 | Semana de pruebas - no hay clases  | P2                    |
| 15     | 30-06-25 |                                    |                       |
| 16     | 07-07-25 | Semana de pruebas - no hay clases  | Ex                    |
| 17     | 14-07-25 |                                    |                       |

* Puede variar dependiendo de feriados, suspensiones y otros.





## LABORATORIO

### RESUMEN DE EVALUACIONES

|Calificación| Ponderación | Fecha |
| ------ | ------| ------- |
|Tarea 1 (T1)  | 16.6%| 28-04-25 |
|Tarea 2 (T2)  | 16.6%| 02-06-25 |
|Tarea 3 (T3)  | 16.6%| 23-06-25 |
|Proyecto (P1) | 1%   | 21-04-25 |
|Proyecto (P2) | 9%   | 09-06-25 |
|Proyecto (P3) | 40%  | 23-06-25 |

El estudiante debe tener un **100%** de asistencia para aprobar la asignatura.

El cálculo de la nota se hace siguiendo el siguiente algoritmo:

```python

promedio_tareas = (T1 + T2 + T3)/3
promedio_proyecto (P1 * 0.02 + P2 * 0.18 + P3 * 0.8) 
promedio_final = round((promedio_tareas + promedio_proyecto)/2, 1)
if asistencia >= 1:
  if promedio_tareas >= 4.0 and promedio_proyecto >= 4.0:
    promedio_final = promedio_final
  else:
    promedio_min([promedio_tareas, promedio_proyecto])
else:
   promedio_final = min([promedio_final, 3.5])

```


## NOTA FINAL

La calificación final se calcula siguiendo el siguiente algoritmo:
```python
if promedio_teoria >= 4.0 and promedio_laboratorio >= 4.0:
  promedio_final = round((promedio_teoria + promedio_laboratorio)/2)
else:
  promedio_final = min(promedio_teoria, promedio_laboratorio)

```

Si el estudiante aprueba solo teoría o solo laboratorio, la calificación se guarda por dos semestres consecutivos de acuerdo al artículo 6.4 del reglamento complementario de la Facultad de Ingeniería.


