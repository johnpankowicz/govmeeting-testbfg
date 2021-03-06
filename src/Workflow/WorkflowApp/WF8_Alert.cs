using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Microsoft.Extensions.Options;
using GM.Application.Configuration;
//using GM.DatabaseRepositories;
using Microsoft.Extensions.Logging;

using GM.Application.AppCore.Entities.Govbodies;
using GM.Application.AppCore.Entities.Meetings;
using GM.Application.AppCore.Entities.Speakers;
using GM.Application.AppCore.Entities.Topics;

namespace GM.WorkflowApp
{
    public class WF8_Alert

    {
        readonly ILogger<WF8_Alert> logger;
        readonly AppSettings config;
        ////readonly IDBOperations dBOperations;

        public WF8_Alert(
            ILogger<WF8_Alert> _logger,
            IOptions<AppSettings> _config
            ////IDBOperations _dBOperations
           )
        {
            logger = _logger;
            config = _config.Value;
            ////dBOperations = _dBOperations;
        }

        // Find all meetings that have been loaded into the database.
        public void Run()
        {

            ////List<Meeting> meetings = dBOperations.FindMeetings(null, WorkStatus.Loaded, true);
            List<Meeting> meetings = new List<Meeting>();   // TODO - CA

            foreach (Meeting meeting in meetings)
            {
                DoWork(meeting);
            }

        }

        public void DoWork(Meeting meeting)
        {

            // TODO - Send alerts

            meeting.WorkStatus = WorkStatus.Alerted;
        }

    }
}
