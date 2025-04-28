import argparse
import re

parser = argparse.ArgumentParser(
    prog= "CLI Tool",
    description='A CLI tool for managing directories',
    epilog='This is the help text'
)

parser.add_argument('filename') # positional arguments
parser.add_argument('-c', '--count', action='store_true', help='count the number of stuff.') # option that takes a value
parser.add_argument('-v', '--verbose', action='store_true')
parser.add_argument('-z', help='This is a way to use the %(prog)s name')

args = parser.parse_args()
def verify_file_ext(file: str) -> bool:
    ext_regex = r"^([a-zA-Z]+\d*)\.([a-zA-Z]{1,4})$"
    match = re.match(ext_regex, file)

    if match:
        file_name, file_ext = match.groups() # tuple unpacking.
        print(file_ext)
    
    return match is not None
    
print(verify_file_ext(args.filename))