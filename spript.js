//Array Numericos :

//1 - Contagem de numeros negativos
function negativeNumbers(array)
{
    let count = 0
    for(let i = 0;i < array.length; i++)
    {
        if(array[i] < 0)
        {
            count++
        }
    }
    return count
}
negativeNumbers([1,3,5,7,-6,-8,-4])

//2 - Soma de numeros negativos

function somaNegativeNumbers(array)
{
    let count = 0
    for(let i = 0;i < array.length; i++)
    {
        if(array[i] < 0)
        {
            count += array[i]
        }
    }
    return count
}
somaNegativeNumbers([1,3,5,7,-6,-8,-4])

//3 - Contagem de numeros pares ate o numero passado como
//parametro.

function parCount(maxNum)
{
    let arrayPar = []
    for(let i = 0;i <= maxNum; i++)
    {
        if(i % 2 == 0)
        {
            arrayPar.push(i)
        }
    }
    return arrayPar

}
parCount(20)

//4 - Array que retorna os numeros negativos 

function negativeNumbersArray(array)
{
    let negativeList = []
    for(let i = 0; i < array.length;i++)
    {
        if(array[i] < 0)
        {
            negativeList.push(array[i])
        }
    }
    return negativeList
}
negativeNumbersArray([1,2,3,4,-6,-8,-9])

//5 - Somar os numeros de um array e verificar se ele
// e maior que o length do array

function somaEQuantidade(array)
{
    let count = 0
    for(let i = 0;i < array.length; i++)
    {
        count += array[i]
    }
    if(count > array.length)
    {
        return count + " " + true
    }
    return count + " " + false
}
somaEQuantidade([1,2,3,4,-6,-8,-9])

//6 - Criar um novo array com o array passado como parametro
// e cada numero recebe  +5.

function somaArrayMaisCinco(array)
{
    let newArray = []
    for(let i = 0;i < array.length;i++)
    {
        newArray.push(array[i] + 5)
    }
    return newArray
}
somaArrayMaisCinco([1,2,3,4,-6,-8,-9])

//7 - Criar um array com a media do array passado
//como parametro e depois adicionar
//se a media e maior que algum numero do array original
//somar todos eles e dividir pelo seu length

function MediaNumbers(array)
{
    let count = 0
    let newArray = []
    for(let i = 0; i < array.length; i++)
    {
        count += array[i]
    }
    count = count / array.length
    for(let i = 0 ; i < array.length; i++)
    {
        if(array[i] > count)
        {
            newArray.push(array[i])
        }
    }
    return newArray
}
MediaNumbers([1,2,3,4,-6,-8,-9])

//Arrays numéricos finalizado.


//Arrays de Strings e Strings :

//1 - Retornar a quantidade de letras `a` numa string
function CountLetraA(str)
{
    let opa = str.match(/a/g)
    return opa.length
}
CountLetraA("abracadrabra")

//2 - Retornar a soma de todos os lengths de strings do
//array passado como parametro.

function somaLength(array)
{
    let count = 0
    for(let i = 0; i < array.length; i++)
    {
        count += array[i].length
    }
    return count
}
somaLength(["salve", "eae men", "salve brodi", "opa ze"])

//3 - Criar uma funcao que ira receber um string com
//uma frase, converter essa string pra um array
// e pra cada palavra com o length impar adicionar em um
//novo array

function ContaLengthImpar(str)
{
    let newArray = []
    str = str.split(" ")
    for(let i = 0; i < str.length; i++)
    {
        if(str[i].length % 2 != 0)
        {
            newArray.push(str[i])
        }
    }
    return newArray
}
ContaLengthImpar("hoje e um belo dia para nadar")

//4 - Receber uma string e retorna `0` no lugar da letra `o`

function replaceLetteroToO(str)
{
    return str.replace(/o/gi, "0")
}
replaceLetteroToO("opa meu mano bora sair?")

//5 - Recebe uma string com `p` minusculos e
// substituir por `P` maiusculos

function replaceLetterpToP(str)
{
    return str.replace(/p/g, "P")
}
replaceLetterpToP("pedra pedrosa perigosa")






