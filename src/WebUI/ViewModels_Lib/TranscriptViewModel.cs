﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GM.ViewModels
{
    // The TranscriptViewModel represents the final state of a transcript after is has
    // been processed, proofread and tagged.
    // At this time the transcript data can be loaded into the database. 
    // A Meeting record already exists in the DB at this time for the transcript.
    // What is needed to be loaded into the database are the contents of the meeting.
    //
    // A TranscriptViewModel also needs to be re-constituted from the database
    // whenever we want to display a easily browsable and searchable transcript.
    // That means the TranscriptViewModel needs to be saved to the DB in a way
    // that no information or references are lost.
    //
    // A Transcript consists of a sequence of Sections.
    // Each Section consists of a sequence of TopicDiscussions.
    // Each TopicDiscussion consists of a sequence of Talks.
    // Each Talk consist of a Speaker and what the Speaker said.
    //
    // When these sequences of items are written to the DB, the order the items can not
    // be lost. Therefore you will note that each Section, TopicDiscussion and Talk record
    // in the DB contains a "Sequence" property that enables us to re-construct these
    // these sequences in the correct order.


    public class TranscriptViewModel
    {
        public long MeetingId { get; set; }
        public string GovBodyName { get; set; }
        public string LocationName { get; set; }
        public string Date { get; set; }

        // Topics and Speakers are the list of topics discussed
        // at this meeting and the list of speakers.
        public List<TopicViewModel> Topics { get; set; }
        public List<SpeakerViewModel> Speakers { get; set; }

        public List<SectionViewModel> Sections { get; set; }
    }

    public class SectionViewModel
    {
        public string Name { get; set; }
        public List<TopicDiscussionViewModel> TopicDiscussions { get; set; }
    }

    public class TopicDiscussionViewModel
    {
        public long TopicId { get; set; }
        public List<TalkViewModel> Talks { get; set; }
    }

    public class TalkViewModel
    {
        public long SpeakerId { get; set; }
        public string Text { get; set; }
    }

    // Some topics may have been already discussed at past meetings. In this case
    // the "TopicId" property will contain the ID of that topic and "IsExisting" will
    // be true.
    //
    // But topics that are discussed for the first time at this meeting will be
    // not have an existing TopicId in the DB. In that case the "IsExisting" property will be false and the
    // TopicId property will be a temporary unique Id that was just assigned for this meeting.
    //
    // When the data is added to the DB, the new topics will
    // be added to the Topic table and assigned thier final TopicId.
    public class TopicViewModel
    {
        public long TopicId { get; set; }
        public string Name { get; set; }
        public bool IsExisting { get; set; }
    }

    // Some speakers at a meeting may already be in the database. In this case
    // the SpeakerId property will contain the Id of that speaker and "IsExisting" will
    // be true. This is the case for all officials of this government body.
    //
    // But speakers from the general public are not tracked and will not have an existing
    // SpealerId. In that case the "IsExisting" property will be false and the
    // SpeakerId property will be a temporary for this meeting.
    //
    // When the data for this transcript is written to the database,
    // each of these new speakers will be added to the speaker table and assigned a SpeakerId.
    // These new SpeakerIds are used when re-constructing the transcript from the DB,
    // but they don't track the identity of the person from meeting to meeting.
    public class SpeakerViewModel
    {
        public long SpeakerId { get; set; } 
        public string Name { get; set; }
        public bool IsExisting { get; set; }
    }


}
