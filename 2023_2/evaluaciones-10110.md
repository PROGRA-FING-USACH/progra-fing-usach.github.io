<p><img src="https://progra-fing-usach.github.io/IMGs/logo-fing.png" alt="LogoUSACH" width="40%" align="right" hspace="10px" vspace="0px"></p>

# 10110- FUNDAMENTOS DE COMPUTACIÓN Y PROGRAMACIÓN

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
8. Recursión:
    * Concepto de recursión.
    * Definición de funciones recursivas (Ecuaciones de recurrencia, caso base).
    * Limitaciones y ventajas de la recursión.
    * Recursión sobre objetos.

**UNIDAD 3: FUNCIONES Y ABSTRACCIÓN**

9. Archivos:
    * Tipo de dato archivo.
    * Métodos y atributos de los archivos.
    * Leer y escribir en archivos de texto plano y csv
    * Acceder a archivos por ruta absoluta y relativa.
    * Encoding y mapas de caracteres.

10. Programación Científica: 
    * Numpy: El tipo de dato Array
    * Pyplot: Construcción de gráficos
    * Pandas: Qué es y para que se usa


### RESUMEN DE EVALUACIONES

|Calificación| Ponderación | Fecha de publicación | Fecha de entrega |
| ------ | ------| ------- |------- |
|Tarea 1 (t1)| 10%| 10/10 8:15 AM| 14/10 12:45 PM |
|Tarea 2 (t2)| 20%| 06/11 8:15 AM| 10/11 18:15 PM |
|Tarea 3 (t3)| 30%| 27/11 8:15 AM| 01/12 18:15 PM |
|Actividades en clases (a)| 15%| En horario de clases | Todas las clases |
|Guías (g)| 25%| Al inicio de cada semana| Miércoles de la semana siguiente 18:15 PM |

Si el estudiante no alcanza el promedio 4.0 y cumple con los requisitos de:
* <s>75% de asistencia. </s> 
* No tener sanción por copia.

Tiene derecho a rendir Examen Acumulativo Optativo (eao) con ponderación de 40%.

El cálculo de la nota se hace siguiendo el siguiente algoritmo:

```python

promedio_final = round(t1 * 0.1 + t2 * 0.2 + t3 * 0.3 + a * 0.15 + g * 0.25, 1)

if promedio_final >= 4.0:
  promedio_final = promedio_final
elif promedio_final >= 3.0 and sancion_copia==False:
  promedio_final = promedio_final * 0.6 + eao * 0.4
else:
  promedio_final = promedio_final

```


### PLANIFICACIÓN SEMANA A SEMANA


#### CALENDARIO DE GUÍAS Y TAREAS

| Semana | Fecha      | Temario semanal*                   | Guías/Tareas                                  |
|--------|------------|------------------------------------|-----------------------------------------------|
| 1      | 28-08-2023 | 01. Elementos básicos de Python    |                                               |
| 2      | 04-09-2023 | 02. Strings e I/O                  | 00. Conociendo Replit                         |
| RECESO | 11-09-2023 |                                    |                                               |
| 3      | 18-09-2023 | 03. Control de Flujo               | 01. I/O                                       |
| 4      | 25-09-2023 | 04. Iteraciones                    | 02. If                                        |
| 5      | 02-10-2023 | 05. Listas                         | 03. Iteración                                 |
| 6      | 09-10-2023 |                                    | Tarea 1                                       |
| 7      | 16-10-2023 | 06. Funciones nativas e importadas | 04. Listas                                    |
| 8      | 23-10-2023 | 07. Funciones propias              | 05. Listas de listas, listas de strings, etc. |
| RECESO | 30-10-2023 |                                    |                                               |
| 9      | 06-11-2023 | 08. Recursión                      | Tarea 2                                       |
| 10     | 13-11-2023 | 09. Archivos                       | 06. Funciones propias                         |
| 11     | 20-11-2023 |                                    | 07. Recursión                                 |
| 12     | 27-11-2023 | 10. Programación Científica        | Tarea 3                                       |
| 13     | 04-12-2023 |                                    | 08. Archivos                                  |
| 14     | 11-12-2023 |                                    |                                               |
| 15     | 18-12-2023 |                                    |                                               |

* Puede variar dependiendo de feriados, suspensiones y otros.





## LABORATORIO

### RESUMEN DE EVALUACIONES

|Calificación| Ponderación | Fecha de entrega |
| ------ |------- |------- |
|Entrega 1* (e1)| 10%| 07/10 12:45 PM |
|Entrega 2 (e2)| 20%| 18/11 12:45 PM |
|Entrega 3* (e3)| 30%| 09/12 12:45 PM|
|Control 1++ (c1)| 20%| -| Semana 16/10 |
|Control 2++ (c2)| 20%| -| Semana 27/11 |

* Presentación en horario de clases.

++ En el horario de clases correspondiente.

#### FECHAS CONTROL 1
| CURSO | PROFESOR        | LAB | HORARIO | FECHA CONTROL 1 |
|-------|-----------------|-----|---------|-----------------|
| 10110 | Felipe Reyes    | L1  | M1      | 24 de octubre   |
| 10110 | Gary Simken     | L2  | M1      | 24 de octubre   |
| 10110 | Bastián Loyola  | L3  | L1      | 23 de octubre   |
| 10110 | Felipe Fuentes  | L5  | M6      | 24 de octubre   |
| 10110 | Sergio Peñaloza | L6  | M6      | 24 de octubre   |
| 10110 | Camilo Berríos  | L7  | V6      | 10 de noviembre |
| 10110 | Felipe Reyes    | L8  | V6      | 10 de noviembre |


El promedio final se calcula como:

```python
if round(sum([c1, c2])/2, 1) >= 4.0 and asistencia == 100%:
  promedio_final = round(e1 * 0.1 + e2 * 0.2 + e3 * 0.3 + c1 * 0.2 + c2 * 0.2, 1)
else:
  promedio_final = min(promedio_final, 3.5)

```

### ENTREGAS

Todas las entregas con código tienen un requisito de avance mínimo para ser revisadas. Es decir, **entregas que no alcancen el mínimo exigido, tienen nota mínima en toda la entrega**.

#### ENTREGA 1
* Presentación e informe


#### ENTREGA 2
* Informe y avance de código

#### ENTREGA 3
* Presentación, informe y solución final.


### CONTROLES

Se resuelve en horario de laboratorio durante la clase.


#### CONTROL 1

* Contempla todos los contenidos de la unidad I. 


#### CONTROL 2
* Contempla todos los contenidos de las unidades I, II y III hasta archivos.



## NOTA FINAL

La calificación final se calcula siguiendo el siguiente algoritmo:
```python
if promedio_teoria >= 4.0 and promedio_laboratorio >= 4.0:
  promedio_final = round((promedio_teoria + promedio_laboratorio)/2)
else:
  promedio_final = min(promedio_teoria, promedio_laboratorio)

```


Si el estudiante aprueba solo teoría o solo laboratorio, la calificación se guarda para el siguiente semestre académico (1/2024) de acuerdo al artículo 6.4 del reglamento complementario de la Facultad de Ingeniería.

