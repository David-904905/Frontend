from collections import OrderedDict


def get_creators(record: dict) -> list:
    match record:
        case {'type': 'book', 'api': 2, 'authors': [*names]}:
            return names
        case {'type': 'book', 'api': 1, 'authors': name}:
            return [name]
        case {'type': 'book'}:
            raise ValueError(f"Invalid book record: {record!r}")
        case {'type': 'movie', 'director': name}:
            return [name]
        case _:
            raise ValueError(f'Invalid record: {record!r}')


b1 = dict(api=1, authors='Douglas Hofstadter', type='book', title='Godel, Escher, Bach')
print(get_creators(b1))

# ordered dict maintains a strict order of keys which were first inserted.
b2 = OrderedDict(
    api= 2,
    type= 'book',
    title= 'Python in a Nutshell',
    authors='Martelli Ravenscroft Holden'.split()
)

print(get_creators(b2))

# The order of keys in the above pattern is irrelevant, even if the subject is an OrderedDict.

