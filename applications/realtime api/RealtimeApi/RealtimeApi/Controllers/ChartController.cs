using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using RealtimeApi.DataFeatures;
using RealtimeApi.HubConfig;
using RealtimeApi.TimerFeatures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealtimeApi.Controllers
{
    [Route("api/[controller]")]
    public class ChartController : Controller
    {
        private IHubContext<ChartHub> _hub;
        public ChartController(IHubContext<ChartHub> hub)
        {
            _hub = hub;
        }
        public IActionResult Get()
        {
            var timerManagerA = new TimerManager(() => _hub.Clients.All.SendAsync("tempData", DataManager.GetData(15,25)),250);
            var timerManagerB = new TimerManager(() => _hub.Clients.All.SendAsync("pressData", DataManager.GetData(90, 110)),500);
            var timerManagerC = new TimerManager(() => _hub.Clients.All.SendAsync("windData", DataManager.GetData(0, 50)),750);
            var timerManagerD = new TimerManager(() => _hub.Clients.All.SendAsync("humData", DataManager.GetData(0, 100)),1000);
            return Ok(new { Message = "Request Completed" });
        }
    }
}
