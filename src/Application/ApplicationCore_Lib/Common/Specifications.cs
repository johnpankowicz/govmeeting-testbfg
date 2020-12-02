﻿using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using GM.ApplicationCore.Entities.GovBodies;

// Experiment with specification pattern - (not yet used)

namespace GM.DatabaseAccess
{
    public abstract class Specification<T>
    {
        public abstract Expression<Func<T, bool>> ToExpression();

        public bool IsSatisfiedBy(T entity)
        {
            Func<T, bool> predicate = ToExpression().Compile();
            return predicate(entity);
        }
    }

    public class HasScheduledMeetings_Spec : Specification<GovBody>
    {
        public override Expression<Func<GovBody, bool>> ToExpression()
        {
            return gb => gb.ScheduledMeetings.Count > 0;
        }
    }
}