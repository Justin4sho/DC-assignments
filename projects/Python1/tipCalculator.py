billed = float(input('Total bill amount? '))
service = input('Level of service? ')
tip = 0

if service == 'good':
    tip = .20
elif service == 'fair':
    tip = .15
else:
    tip = .10

tipAmount = billed * tip
total = billed + tipAmount

print('Tip amount:','${:,.2f}'.format(tipAmount))
print('Total amount: ', '${:,.2f}'.format(total))
