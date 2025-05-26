from utils.errors.banned_error import BannedUser

def banned_users(userId: str):
    banned_users = {
        'xoxo-549',
        'ban-me64',
    }
    if userId in banned_users:
        print(userId)
        raise BannedUser("This user has been banned") 
    return userId