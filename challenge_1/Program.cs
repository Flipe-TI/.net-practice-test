using System;

class Program{
    static void Main(){
        decimal soma = 0;
        string entrada;

        Console.WriteLine("Digite números para somar ou 'sair' para encerrar:");

        while (true){
            entrada = Console.ReadLine()?.Trim().ToLower();

            if(entrada == "sair"){
                break;
            }

            if(decimal.TryParse(entrada, out decimal numero)){
                soma += numero;
                Console.WriteLine($"Soma atual: {soma}");
            }else{
                Console.WriteLine("Entrada inválida. Digite um número ou 'sair'.");
            }
            
        }

        Console.WriteLine($"Soma final: {soma}");
    }
}