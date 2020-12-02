﻿using System;
using System.Collections.Generic;
using Ardalis.GuardClauses;
using GM.ApplicationCore.Interfaces;

namespace GM.ApplicationCore.Entities.Meetings
{
    public enum WorkStatus {
        Receiving, Received,
        Processing, Processed,
        Transcribing, Transcribed,
        Editing, Edited,
        Tagging, Tagged,
        Viewing, Viewed,
        Loading, Loaded,
        Alerting, Alerted
    };
    public enum SourceType
    {
        Recording,
        Transcript
    }

    /// <summary>
    /// The Meeting object is all the data associated with one specific meeting.
    /// </summary>
    public class Meeting : BaseEntity, IAggregateRoot
    {
        private Meeting() { } // For EF Core

        public Meeting(
            DateTime dateTime,
            SourceType sourceType,
            string sourceFileName,
            string name = "",
            string language = ""
        )
        {
            Guard.Against.Null(dateTime, nameof(dateTime));
            Guard.Against.OutOfRange<SourceType>(sourceType, nameof(sourceType));
            Guard.Against.NullOrEmpty(sourceFileName, nameof(sourceFileName));

            Name = name;
            Date = dateTime;
            Language = language;
            SourceType = sourceType;
            SourceFilename = sourceFileName;
        }

        public string Name { get; set; }
        public DateTime Date { get; set; }
        public int Length { get; set; }
        public long GovBodyId { get; set; }
        public string Language { get; set; }
        public string SourceFilename { get; set; }
        public SourceType SourceType { get; set; }
        public WorkStatus WorkStatus { get; set; }
        public bool Approved { get; set; }

        private readonly List<Section> _sections = new List<Section>();
        public IReadOnlyCollection<Section> Items => _sections.AsReadOnly();


        /*
         * If we were to say: public virtual List<Talk> ....
         * then EF would lazy load these as they are accessed.
         */
    }
}
