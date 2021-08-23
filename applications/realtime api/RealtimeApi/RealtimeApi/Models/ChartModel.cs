using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealtimeApi.Models
{
    public class ChartModel
    {
        public int Data { get; set; }
        public string Label { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
