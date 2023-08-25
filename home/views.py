from django.http import HttpResponse
from django.shortcuts import render
import pyrebase

config = {
    "apiKey": "AIzaSyAOFpmRM5pxvWfAf-kBHDWRQb_Udm5xF_4",
    "authDomain": "apartmentlisting-22f4c.firebaseapp.com",
    "databaseURL": "https://apartmentlisting-22f4c-default-rtdb.firebaseio.com",
    "projectId": "apartmentlisting-22f4c",
    "storageBucket": "apartmentlisting-22f4c.appspot.com",
    "messagingSenderId": "386347052899",
    "appId": "1:386347052899:web:2e3aafd77eb8a44341ed56",
    "measurementId": "G-5WW7N91C4P"
}


def get_data_from_firebase():
    firebase = pyrebase.initialize_app(config)
    authe = firebase.auth()
    database = firebase.database()

    data = database.child('Data').get().val()

    return data


def index(request):
    data = get_data_from_firebase()
    return render(request, 'home/index.html', {'data': data})
