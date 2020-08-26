﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using Bogus;
using Bogus.DataSets;
using GM.DatabaseModel;

namespace FakeData
{
    //public class Section
    //{
    //    public long Id { get; set; }
    //    public string Name { get; set; }
    //    public List<TopicDiscussion> TopicDiscussions { get; set; }
    //}

    class Program
    {

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            FakeMeeting fm = new FakeMeeting();
            Meeting meeting = fm.GenerateMeeting();

            string text = Newtonsoft.Json.JsonConvert.SerializeObject(meeting, Newtonsoft.Json.Formatting.Indented);

            File.WriteAllText(@"c:\tmp\fakemeeting.json", text);
        }

    }
}
