import argparse
import re

parser = argparse.ArgumentParser(
    prog='grep',
    description='An introduction to argparser',
    epilog='This is the epilog'
)

parser.add_argument('action')
parser.add_argument('-c', '--count', action='store_true', help='Count the number of ocurrences')
parser.add_argument('filename')
parser.add_argument('pattern')

def perform_grep(file: str, pattern: str, countme: bool = False) -> bool:
    matchme = ''
    try:
        with open(file, 'r') as read_file:
            matchme = read_file.read()
            read_file.close()
    except FileNotFoundError:
        print(f"File '{file}' not found.")            
        return
    
    result = re.findall(pattern, matchme)
    
    if countme:
        return len(result)
    return result

args = parser.parse_args()

if args.action == 'grep':
    print(perform_grep(args.filename, args.pattern, args.count))

else:
    print("Random str.")
    

