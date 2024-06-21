var numero1 = ""
                var numero2 = ""
                var calculo    = 0
                var resultado = document.getElementById("resultado")
                var operador = ""

                //verifica se variaves estao preenchidas, no caso do operador, e manipula os dados como string
                //printando os numeros selecionados na div resultado
                function verificador(a){
                        if (operador == ""){
                                numero1 = numero1 + a  
                                resultado.innerHTML += a
                        }else{
                                numero2 = numero2 + a  
                                resultado.innerHTML += a
                        }
                }


                //verifica qual operador foi selecionado para fazer a operacao
                function operadores(a){
                        if (numero1 == "" || numero2 == ""){
                                operador = a
                                resultado.innerHTML += operador
                                console.log(operador)
                                console.log(numero1)
                                console.log(numero2)
                        }if(numero1 != "" && numero2 != "")//Verifica se ambos os numeros estao preenchidos. Se estiverem entraremos na parte da operacao
                            {
                                if(operador == "+")//primeira operacao que faremos sera a calculo, no caso, soma
                                    {
                                        calculo = parseFloat(numero1) + parseFloat(numero2)
                                        numero1 = calculo
                                        numero2 = 0
                                        console.log(calculo)
                                        resultado.innerHTML = calculo + "+"
                                }
                                if(operador == "-")//segunda operacao que faremos sera a calculo, no caso, subtracao
                                {
                                    calculo = parseFloat(numero1) - parseFloat(numero2)
                                    numero1 = calculo
                                    numero2 = 0
                                    console.log(calculo)
                                    resultado.innerHTML = calculo + "-"
                            }
                            if(operador == "/")//segunda operacao que faremos sera a calculo, no caso, subtracao
                            {
                                calculo = parseFloat(numero1) / parseFloat(numero2)
                                numero1 = calculo
                                numero2 = 0
                                console.log(calculo)
                                resultado.innerHTML = calculo + "/"
                            }
                            if(operador == "*")//segunda operacao que faremos sera a calculo, no caso, subtracao
                            {
                                calculo = parseFloat(numero1) * parseFloat(numero2)
                                numero1 = calculo
                                numero2 = 0
                                console.log(calculo)
                                resultado.innerHTML = calculo + "*"
                            }
                        }
                }

                function limpar(){
                        numero1 = ""
                        numero2 = ""
                        calculo    = 0
                        operador = ""
                        resultado.innerHTML = ""
                }