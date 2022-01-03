from apscheduler.schedulers.background import BackgroundScheduler
from service.models import OTTservice
from datetime import datetime, timedelta
from pytz import timezone
from datetime import datetime

today = datetime.now(timezone('Asia/Seoul'))

def OTTservice_delete_old_data():
        OTTservice.objects.filter(created_at__lte=today-timedelta(months=3)).delete()
        
def start():
    scheduler = BackgroundScheduler(timezone='Asia/Seoul')
    scheduler.add_job(OTTservice_delete_old_data, "interval", days=1, id="OTTservice delete old data")
    scheduler.start()