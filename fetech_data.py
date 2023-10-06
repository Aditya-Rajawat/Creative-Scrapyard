from pymongo import MongoClient
connect = MongoClient("mongodb://localhost:27017/")
database = connect.local
db = database.app

def findd():
    l=db.find()
    lis=[]
    for i in db.find():
        lis.append(i)
    return(lis)
# print(findd())