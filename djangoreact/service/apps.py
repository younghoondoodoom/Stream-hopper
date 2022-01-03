from django.apps import AppConfig


class ServiceConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'service'

    def ready(self):
        print("Starting Scheduler ..")
        from .manage_old_data import delete_old_data
        delete_old_data.start()