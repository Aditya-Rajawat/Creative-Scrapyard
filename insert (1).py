
from pymongo import MongoClient
connect = MongoClient("mongodb://localhost:27017")
database = connect.local
db = database.app

def create_entry():
    name=input("enter name: ")
    company = input("enter company: ")
    price = int(input("enter price: "))
    colors = input("enter colour: ")
    image = input("enter link of image: ")
    description = input("enter description: ")
    category = input("enter caterory: ")
    dic={
        "name":name,
        "company":company,
        "price": price,
        "color":colors,
        "image":image,
        "description":description,
        "catergory":category}
    return dic

def insert_entry(d):
    db.insert_one(d)
    
insert_entry(create_entry())
    