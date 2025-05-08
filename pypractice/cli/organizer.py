from typing import List
import os
import re
import json


def sort_by_extension(folder: List[str], base_dir: str) -> bool:
    """
    Description: Function to move files into their respective folders based on extensions
    Params:
        folder: List[str]
        base_dir: str
    Returns:
        bool
    """
    extension_regex = r"^([a-zA-Z]+\d*)\.([a-zA-Z]{1,4})$"
    
    for file in folder:
        match = re.match(extension_regex, file)
        if match:
            file_name, file_ext = match.groups()
            destination = base_dir + f'/{file_ext}/{file_name}.{file_ext}'
            source = base_dir + f'/{file_name}.{file_ext}'
            os.rename(source, destination)



def sort_by_size(directory: str = None, subdirectory:str = None) -> bool:
    """
    Description: This function takes a directory and then sorts all the items in that directory
    based on size.

    Params:
        directory: str
    
    Returns:
        bool -> In order to indicate if the operation was successful or not
    """

    actions: List[dict] = []
    
    # base_dir = os.getcwd()
    # seperator = os.sep # it is better to make use of os.path.join when joining files together, this is a more
    # modern approach and makes it more readable and easy to use.

    base_dir = directory if directory else os.getcwd()

    os.makedirs('cli_sort_large', exist_ok=True) # the exist_ok=True prevents it from throwing an error if finds that the folder already exists
    os.makedirs('cli_sort_medium', exist_ok=True)
    os.makedirs('cli_sort_small', exist_ok=True)


    small_destination = 'cli_sort_small'
    medium_destination = 'cli_sort_medium'
    large_destination = 'cli_sort_large'

    try:
        for entry in os.scandir(base_dir):
            if entry.is_file():

                file_size = entry.stat().st_size

                source = entry.path
        
                if file_size  < 10_240:
                    destination = os.path.join(base_dir, small_destination, entry.name)

                elif file_size < 1_048_576:
                    destination = os.path.join(base_dir, medium_destination, entry.name)

                else:
                    destination = os.path.join(base_dir, large_destination, entry.name)

                os.rename(source, destination)
                actions.append(
                    {"action": f"mv {source} {destination}"}
                )
            elif entry.is_dir():
                actions.append(
                    {
                        "action": f"cd {entry.path}"
                    }
                )
                sort_by_size(base_dir, entry.path)

        logpath = os.path.join(base_dir, "logs", "logfile.jsonl")

        with open(logpath, "a") as f:
            for value in actions:
                f.write(json.dumps(value) + "\n")
        return True
    except Exception as e:
        print(f"An error occurred: {e}")
        return False
if __name__ == "__main__":
    sort_by_size()