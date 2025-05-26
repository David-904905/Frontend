def check_valid_id(id: str):
    if not id.startswith(('isbn-', 'imbd-')):
        raise ValueError('Invalid ID format, it must start with "isbn-" or "imbd-"')
    return id