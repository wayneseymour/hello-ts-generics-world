/*
is a concrete type referring to a generic function.
<T>() => T means: "a function whose caller specifies a type T and which returns a value of type T."
This is essentially impossible to implement safely.
 */
/**
 * Generic fn type is on the right side of the assignment operator (=).
 */
type FuncGenericReturn = <T>() => T;

/*
Here, FuncConcreteReturn is a generic type referring to a concrete function.
It would be more accurate to say that FuncConcreteReturn is not really a type;
it's more like a type operator which takes an input type T and produces an output type () => T.
 */
/**
 * Generic type is on the left side of the assignment operator (=).
 */
type FuncConcreteReturn<T> = () => T;

/*
funcReturnsNumber is not a generic function. It is a concrete function that always returns a number.
And FuncConcreteReturn<T> is a generic type, where the value of T is chosen when the type is written out.
Since these types are function types,
the type T is chosen by the implementer of these functions, and not by the caller
 */
const funcReturnsNumber: FuncConcreteReturn<number> = () => 1;
const funcReturnsString: FuncConcreteReturn<string> = () => "";
