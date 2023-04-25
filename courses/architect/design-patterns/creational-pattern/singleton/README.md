# Concept

- Restricts the instanciation of a class to a singular intance
- In "X" instanciations of "Y" you will find only one "Y" object and the "X" instances are actually the same

# Consequences

- Strict control over how and when clients access it
- Avoids polluting the namespace with global variables
- Subclassing allows configuring the application with an instance of the class you need at runtime
- Multiple instance can be allowed without having to alter the client
- Violates the single responsibility principle

# Related Patterns

- Abstract Factory: Can be implemented as a Singleton
- Builder: Can be implemented as a Singleton
- Prototype: Can be implemented as a Singleton
- State: State objects are often implemented as Singletons