class Person:
    def __init__(self ,name ,email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0
        self.friends_greeted = []
        self.unique_greetings = 0
    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name, self.name))
        self.greeting_count += 1
        if other_person not in self.friends_greeted:
            self.friends_greeted.append(other_person)
            self.unique_greetings += 1
    def print_contact_info(self):
        print('{}\'s email: {}, {}\'s phone number: {}'.format(self.name,self.email,self.name,self.phone))
    def add_friend(self,other_person):
        self.friends.append(other_person)
    def num_friends(self):
        return len(self.friends)
    def num_unique_people_greeted(self):
        print(self.unique_greetings)


sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')
justin = Person('Justin', 'justin@asdf.com', '343-343-3424')
sonny.greet(jordan)
sonny.greet(jordan)
sonny.greet(jordan)
sonny.greet(justin)


sonny.num_unique_people_greeted()
