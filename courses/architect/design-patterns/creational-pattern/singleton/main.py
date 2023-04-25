from logger import Logger

instance1 = Logger()
instance2 = Logger()

if (instance1 == instance2 and instance2 == Logger()):
    print('Instance 1 and Instance 2 are the same!')