﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GM.DatabaseModel;

namespace GM.DatabaseRepositories
{
    public interface IMeetingRepository
    {
        Meeting Get(long meetingId);
        long GetId(Meeting meeting);
        //long GetId(long govBodyId, DateTime datetime);
        Meeting Get(long govBodyId, DateTime datetime);
        List<Meeting> FindAll(SourceType? sourceType, WorkStatus? workStatus, bool? approved);
    }
}
