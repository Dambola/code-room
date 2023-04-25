import threading
    
class Logger:
    _lock = threading.Lock()

    def __new__(cls):
        if not hasattr(cls, 'instance'): # Do we need to get a new instance?
            with cls._lock: # Thread Safe
                if not hasattr(cls, 'instance'): # Now that we are the 
                                                 # only ones looking - need to create?
                    cls.instance = super().__new__(cls) # Creating the new and unique Instance
        return cls.instance
