from django.shortcuts import render
import datetime
import hashlib

# Create your views here.

def hash(password, userId):
    salt = str(datetime.date) + str(datetime.time) + userId;
    print(salt)
    print(hashlib.sha256(password+salt))
    return hashlib.sha256(password+salt);
