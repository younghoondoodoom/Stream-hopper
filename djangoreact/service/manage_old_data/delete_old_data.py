from apscheduler.schedulers.background import BackgroundScheduler
from service.models import OTTservice
from datetime import datetime, timedelta
from pytz import timezone
from datetime import datetime

today = datetime.now(timezone('Asia/Seoul'))

def OTTservice_delete_old_data():
    if OTTservice.objects.filter(created_at__lte=today-timedelta(weeks=2)):
        OTTservice.objects.filter(created_at__lte=today-timedelta(weeks=2)).delete()
        print("삭제 완료!")
    else:
        print("삭제 할 게 없어")
    print("잘 실행 중..")
    print(today-timedelta(weeks=2))

def start():
    scheduler = BackgroundScheduler(timezone='Asia/Seoul')
    scheduler.add_job(OTTservice_delete_old_data, "interval", minutes=1, id="OTTservice delete old data")
    scheduler.start()