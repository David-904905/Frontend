from builtins import Exception

class BannedUser(Exception):
    """This error is raised when the user is banned."""
    def __init__(self, message="You have been banned"):
        self.message = message
        super().__init__(self.message)


# To create your custom exception, you have to subclass the Exception class that can be found in the 
# builtins module. Then add a constructor, with a message that has a default value.