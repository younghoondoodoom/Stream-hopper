from django.apps import AppConfig


class ServiceConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'service'

    # sqlite 쓰니까 제한 사항이 많아서 스케줄러 쓰기 힘듦.. postgresql로 바꿔볼까 고민중    
    # def ready(self):
    #     print("Starting Scheduler ..")
    #     from .manage_old_data import delete_old_data
    #     delete_old_data.start()