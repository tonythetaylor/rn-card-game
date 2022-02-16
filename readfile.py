dict = {'id': '', 'text': '', 'uri': ''}
file = open('yomommajokes.txt')
f = file.readlines()

for index, line in enumerate(f):
    dict['id'] = index
    dict['text'] = line
    print(dict)