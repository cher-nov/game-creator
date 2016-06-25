﻿using App.Contracts;

namespace App.Resources
{
    /// <summary>
    /// The default app repository.
    /// </summary>
    public class AppRepository : IAppRepository
    {
        public IIndexedResourceManager<IAppSprite> Sprites { get; set; }

        public IIndexedResourceManager<IAppSound> Sounds { get; set; }

        public IIndexedResourceManager<IAppBackground> Backgrounds { get; set; }

        public IIndexedResourceManager<IAppPath> Paths { get; set; }

        public IIndexedResourceManager<IAppScript> Scripts { get; set; }

        public IIndexedResourceManager<IAppDataFile> DataFiles { get; set; }

        public IIndexedResourceManager<IAppFont> Fonts { get; set; }

        public IIndexedResourceManager<IAppTimeline> Timelines { get; set; }

        public IIndexedResourceManager<IAppObject> Objects { get; set; }

        public IIndexedResourceManager<IAppRoom> Rooms { get; set; }
    }
}
