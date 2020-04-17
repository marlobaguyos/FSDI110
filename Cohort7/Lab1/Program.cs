using System;
using System.Collections.Generic;

namespace Lab1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("First method");
            
            var p = new Program();
            p.Test();

            string full = p.FullName("Sergio", "Inzunza");
            Console.WriteLine(full);

            p.Exc1();
        }

        void Exc1() {
            List<int> numbers = new List<int>();
            // 10 20 .. 1000
            for (int i = 1; i < 101; i++){
                numbers.Add(i * 10);
            }
            Console.WriteLine(numbers);


        }

        void NoReturns(){
            System.Console.WriteLine("test");

            //Variables types
            string name = "Sergio";
            int age = 99;
            bool found = false;
            float f = 123.12f;
            decimal d = 123.123m;

            string n = "98";
            int res = int.Parse(n);

            string[] names = new string[999];
            names[0] = "asd";
            names[1] = "123123";
            names[6] = "ajklasl";

            //string [] [] cube = new string[99][];
            List<string> List = new List<string>();
            List.Add("asdasd");

            System.Console.WriteLine("From array: " + name[0]);
        }
        string FullName(string first, string last) {
            return first + " " + last;
        }

        int Test() {
            Console.WriteLine("First Method");
            return 1;
        }

    }
}
