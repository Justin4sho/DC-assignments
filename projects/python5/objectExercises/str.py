class Person:
    def __init__(self ,name ,email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0
    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name, self.name))
        self.greeting_count += 1
    def print_contact_info(self):
        print('{}\'s email: {}, {}\'s phone number: {}'.format(self.name,self.email,self.name,self.phone))
    def add_friend(self,other_person):
        self.friends.append(other_person)
    def num_friends(self):
        return len(self.friends)
    def __str__(self):
        return 'Person: {} {} {}'.format(self.name, self.email, self.phone)

sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')
print(jordan)
