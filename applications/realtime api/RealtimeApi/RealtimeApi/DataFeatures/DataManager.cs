using RealtimeApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealtimeApi.DataFeatures
{
    public static class DataManager
    {
        public static List<ChartModel> GetData(int min, int max)
        {
            var r = new Random();
            var date = DateTime.Now;
            return new List<ChartModel>()
            {
                new ChartModel { Data = r.Next(min, max), Label = "A", TimeStamp = date},
                new ChartModel { Data = r.Next(min, max), Label = "B", TimeStamp = date},
                new ChartModel { Data = r.Next(min, max), Label = "C", TimeStamp = date},
                new ChartModel { Data = r.Next(min, max), Label = "D", TimeStamp = date}
            };
        }
    }
}
