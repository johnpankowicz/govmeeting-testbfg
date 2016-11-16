﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Concurrent;
using Newtonsoft.Json;
using System.IO;

namespace WebApp.Models
{
    public class TranscriptRepository : ITranscriptRepository
    {
        static ConcurrentDictionary<string, Transcript> _transcripts = new ConcurrentDictionary<string, Transcript>();

        public TranscriptRepository()
        {
        //    Add(new Transcript { Name = "Item1" });
        }

        /*public IEnumerable<Transcript> GetAll()
        {
            return _transcripts.Values;
        }*/

        /*public void Add(Transcript item)
        {
            item.Key = Guid.NewGuid().ToString();
            _transcripts[item.Key] = item;
        }*/

        public Transcript Find(string key)
        {
            Transcript item;
            _transcripts.TryGetValue(key, out item);
            return item;
        }

        // Example: Get("BoothbayHarbor", "Selectmen", "2014-09-08")
        public Transcript Get(string city, string govEntity, string meetingDate)
        {
            // Todo - change to get a default entity
            if (govEntity == null) govEntity = "Selectmen";

            // Todo - change to get the latest meeting
            if (meetingDate == null) meetingDate = "2014-09-08";

            string path = city + "_" + govEntity + "_" + meetingDate + ".json";
            return GetByPath("assets/" + path);
        }

        public Transcript GetByPath(string path)
        {
            string transcriptString = Readfile(path);
            if (transcriptString != null)
            {
                Transcript transcript = JsonConvert.DeserializeObject<Transcript>(transcriptString);
                return transcript;
            } else
            {
                return null;
            }
        }

        /*public Transcript Remove(string key)
         {
             Transcript item;
             _transcripts.TryGetValue(key, out item);
             _transcripts.TryRemove(key, out item);
             return item;
         }*/

        public void Update(Transcript item)
        {
            //Write out JSON data.
            //string output = JsonConvert.SerializeObject(gto, Formmatting.Indented);
            //    _transcripts[item.key] = item;
        }

        private string Readfile(string path)
        {
            try
            {
                string text = System.IO.File.ReadAllText(path);
                return text;
            }
            catch (Exception e)
            {
                Console.WriteLine("The file could not be read:");
                Console.WriteLine(e.Message);
                return null;
            }
        }

    }
}