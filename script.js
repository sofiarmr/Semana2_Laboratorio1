        //Declarar dos variables, una para un número entero y otra para un número decimal. 
        //Luego con estos números realiza las operaciones de suma, resta, multiplicación, división y exponente.
        function operacionesNumeros() {
            let entero = 10;
            let decimal = 3.5;

            let suma = entero + decimal;
            let resta = entero - decimal;
            let multiplicacion = entero * decimal;
            let division = entero / decimal;
            let exponente = Math.pow(entero, decimal);

            document.getElementById('resultadosNumeros').innerHTML = `
                Suma: ${suma} <br>
                Resta: ${resta} <br>
                Multiplicación: ${multiplicacion} <br>
                División: ${division} <br>
                Exponente: ${exponente}
            `;
        }

        //Crear dos variables de tipo cadena de texto una con su nombre completo y la otra con su carné de estudiante,
        //luego concatena ambas variables.
        function concatenarCadenas() {
            let nombreCompleto = "Sofía Margarita Romero Rodríguez";
            let carnet = "SMSS042622";

            let concatenacion = nombreCompleto + " - " + carnet;
            document.getElementById('resultadoCadenas').innerHTML = "Concatenación: " + concatenacion;
        }

        //Declarar un número luego convertir ese número a una cadena de texto y mostrar el resultado.
        function numeroACadena() {
            let numero = 12;
            let numeroComoCadena = convertirNumeroALetras(numero);
            document.getElementById('resultadoNumeroACadena').innerHTML = `Número en letras: ${numeroComoCadena}`;
        }
        function convertirNumeroALetras(numero) {
            const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
            const especiales = ['', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
            const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
        
            if (numero < 10) {
                return unidades[numero];
            } else if (numero >= 11 && numero <= 19) {
                return especiales[numero - 10];
            } else if (numero % 10 === 0) {
                return decenas[Math.floor(numero / 10)];
            } else {
                return decenas[Math.floor(numero / 10)] + ' y ' + unidades[numero % 10];
            }
        }
        

        //Declarar una cadena que represente un número luego convertir esa cadena a un número y mostrar el resultado.
        function cadenaANumero() {
            let cadenaNumero = "cuatro";
            // Mapeo de palabras a números
            const numerosEnPalabras = {
                uno: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5, 
                seis: 6, siete: 7, ocho: 8, nueve: 9, diez: 10
            };
            // Convertir la cadena a minúsculas y obtener el número
            let numeroDesdeCadena = numerosEnPalabras[cadenaNumero.toLowerCase()];
            // Mostrar el resultado o un mensaje de error
            document.getElementById('resultadoCadenaANumero').innerHTML = 
                (numeroDesdeCadena !== undefined) 
                    ? `Número desde cadena: ${numeroDesdeCadena}` 
                    : "La cadena no representa un número válido.";
        }
        
        

        // Cálculo de peso en diferentes planetas
        function calcularPeso() {
            let masa = 70; // en kilogramos
            let gravedadTierra = 9.8;
            let gravedadLuna = 1.625;
            let gravedadMarte = 3.72076;
            let gravedadMercurio = 3.7;

            let pesoTierra = masa * gravedadTierra;
            let pesoLuna = masa * gravedadLuna;
            let pesoMarte = masa * gravedadMarte;
            let pesoMercurio = masa * gravedadMercurio;

            document.getElementById('resultadosPeso').innerHTML = `
                Peso en la Tierra: ${pesoTierra} N <br>
                Peso en la Luna: ${pesoLuna} N <br>
                Peso en Marte: ${pesoMarte} N <br>
                Peso en Mercurio: ${pesoMercurio} N
            `;
        }