using System.Collections.Generic;

namespace GM.Application.AppCore.Entities.Topics
{
    /// <summary>
    /// A topic of discussion
    /// </summary>
    public class Topic
    {
        public Topic()
        {
            CreateCollections();
        }
        public long Id { get; set; }
        public string Name { get; set; }
        public List<Category> Categories { get; private set; }
        public long GovernmentBodyId { get; set; }
        private void CreateCollections()
        {
            Categories = new List<Category>();
        }
    }
}
