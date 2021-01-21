﻿using GM.Application.AppCore.Entities.GovLocations;

namespace GM.Application.DTOs.GovLocations
{
    public class GovLocation_Dto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public GovlocTypes Type { get; set; }
        public int ParentLocationId { get; set; }
    }
}
