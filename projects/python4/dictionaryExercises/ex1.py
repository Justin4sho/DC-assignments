phonebook_dict = {
    'Alice' : '703-493-1834' ,
    'Bob' : '857-384-1234' ,
    'Elizabeth' : '484-584-2923'
}
#Print Elizabeth's number
print(phonebook_dict['Alice'])

#Add entry to the dictionary
phonebook_dict['Kareem'] = '938-345-2345'
print(phonebook_dict['Kareem'])

#Delete Alice's phone entry
del phonebook_dict['Alice']

#Change bob's phonenumber
phonebook_dict['Bob'] = '968-345-2345'
print(phonebook_dict['Bob'])

#Print every entry
for key, value in phonebook_dict.items():
    print(key,value)
