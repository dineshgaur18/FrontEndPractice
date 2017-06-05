using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class CandidateCode
{
    static int openingRightDoor(int numberOfWords, string word)
    {
        int numberOfWordsToAdd = 0;

        numberOfWords = 5;
        word = "SantnaS";

        string revString = string.Empty;

        //Check if string a already a palindrome or not
        for (int i = word.Length - 1; i >= 0; i++)
        {
            revString += word[i];
        }

        //if string is a palindrome
        if (revString == word)
        {
            return numberOfWordsToAdd;
        }
        else
        {
            for (int i = 0; i >= word.Length / 2; i++)
            {

                if (word.Substring(word.Length / 2, word.Length / 2).IndexOf(word[i]) > 0)
                    numberOfWordsToAdd = numberOfWordsToAdd + 1;
            }
        }

        return numberOfWordsToAdd;
    }

    static void Main(String[] args)
    {
        int output;
        int ip1;
        ip1 = Convert.ToInt32(Console.ReadLine());
        string ip2;
        ip2 = Console.ReadLine();
        output = openingRightDoor(ip1, ip2);
        Console.WriteLine(output);
    }
}
public class Class1
{
    static int GetJumpCount(int jumpLength, int slipLength, int numberOfWalls, int[] walls)
    {

        int currentWallJumpCount = 0;
        int totalJumpCount = 0;

        //loop through the walls\wall height
        foreach (var wallHeight in walls)
        {
            //Calculate number of jumps required to cross current wall and add it 
            currentWallJumpCount = ((int)Math.Ceiling((double)wallHeight + slipLength / (double)jumpLength)); //2
            totalJumpCount = totalJumpCount + currentWallJumpCount;
        }

        //return total number of jumps;
        return totalJumpCount;
    }


}