using System;

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

            string[] names = new string[100];
            names[0] = "asd";
            names[1] = "123123";
            names[6] = "ajklasl";

            //string [] [] cube = new string[99][];
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
