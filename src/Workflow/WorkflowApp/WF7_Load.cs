﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using GM.ProcessRecording;
using GM.ProcessTranscript;
using GM.ViewModels;
using Microsoft.Extensions.Options;
using GM.Configuration;
using GM.FileDataRepositories;
//using GM.DatabaseRepositories;
using Microsoft.Extensions.Logging;

using GM.ApplicationCore.Entities.GovBodies;
using GM.ApplicationCore.Entities.Meetings;
using GM.ApplicationCore.Entities.Speakers;
using GM.ApplicationCore.Entities.Topics;


namespace GM.WorkflowApp
{
    public class WF7_Load
    {
        readonly ILogger<WF7_Load> logger;
        readonly AppSettings config;
        ////readonly IDBOperations dBOperations;

        public WF7_Load(
            ILogger<WF7_Load> _logger,
            IOptions<AppSettings> _config
            ////IDBOperations _dBOperations
           )
        {
            config = _config.Value;
            logger = _logger;
            ////dBOperations = _dBOperations;
        }

        // Find all meetings whose tagging is complete and approved.
        public void Run()
        {

            ////List<Meeting> meetings = dBOperations.FindMeetings(null, WorkStatus.Tagged, true);
            List<Meeting> meetings = new List<Meeting>();   // TODO - CA

            foreach (Meeting meeting in meetings)
            {
                DoWork(meeting);
            }

        }

        // Load the data into the database
        public void DoWork(Meeting meeting)
        {
            ////string workfolderName = dBOperations.GetWorkFolderName(meeting);
            string workfolderName = "kjkjkjkjkoou9ukj";  // TODO - CA

            string workFolderPath = config.DatafilesPath + workfolderName;

            // TODO - This code is old and needs to be re-written
            // loadDatabase.Process(destFilePath, workFolderPath, language);

        }

    }
}
