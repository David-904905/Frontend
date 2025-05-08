import argparse
import os
import shutil

from  myutils import get_extensions, make_folders
from organizer import sort_by_extension, sort_by_size

main_parser = argparse.ArgumentParser(
    prog="David Nduonofit's Sort",
    description='A CLI tool to sort your files',
    epilog='Yeah this is an epilog, you get the idea'
)

main_parser.add_argument('--by', type=str, required=True, help='What do you want to sort this folder by?')
main_parser.add_argument('--path', type=str, required=True, default='./', help='Directory path to the files')

args = main_parser.parse_args()

match args.by:
    case "extension" | "e":
        sort_by_extension(args.path)
    case "date" | "d":
        ...
    case "size" | "s":
        sort_by_size(args.path)
    case _:
        print(f"Invalid option: {args.by}\nUse extension or e , date or d, size or s, to sort the folder")

