

dial_codes = [
    (880, 'Bangladesh'),
    (55, 'Brazil'),
    (86, 'China'),
    (91, 'India'),
    (62, 'Indonesia'),
    (81, 'Japan'),
    (234, 'Nigeria'),
    (92, 'Pakistan'),
    (7, 'Russia'),
    (1, 'United States'),
]

country_dial = {country: code for code, country in dial_codes}
# print(country_dial)


dial_country = {code: country for code, country in dial_codes if code > 100}
# print(dial_country)


def dump(**kwargs):
    return kwargs



# print(dump( **{'x': 1}, y=2, **{'z': 4, 'x': 5})) # this will throw an error

print(dump( **{'x': 1}, y=2, **{'z': 4, 'a': 5}))

# if you have a function that takes keyword arguments, you can use ** to unpack the dictionary as arguments for the function call.

d1 = {'a': 1, 'b': 2}
d2  = {'c': 4, 'd': 5}

d3 = d1 | d2
print(d3)

# to update an existing mapping in place, use the |= operator


def get_creators(record: dict) -> list:
    match record:
        case {'type': 'book', 'api': 2, 'authors': [*names]}:
            ...
            