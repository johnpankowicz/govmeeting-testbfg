﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GM.ViewModels;


namespace GM.FileDataRepositories
{
    public interface IViewMeetingRepository
    {
        ViewtranscriptView Get(long meetingId);
    }
}
