# CLI

## Argparser

- Argparse is a parser for command line options, arguments and subcommands, what it basically does is that it converts command line arguments into a python dictionary for access by the program.

- The ArgumentParser method is a container for argument specifications and has options that apply to the parser as whole.

- The add_argument method attaches individual argument specifications to the parser. It supports positional arguments, options that accept values and on/off flags.

- The argument parser calculates the usage message from the arguments it contains. The default message can be overriden with the usage keyword argument.

- A single command-line option can take multiple arguments, this can be done through specifying the argparse argument

``` Python

parser.add_argument('bar', nargs='+', help='bar help')

```

### Parents in Argparser

- A parent parser is like a base class for argument parsers, it lets you define common/shared arguments in one place, and then reuse them across multiple parsers.

- This is greate for avoiding repetition when you have multiple subcommands or tools, shared flags like --verbose, --config, etc.

``` Python



parent_parser = argparse.ArgumentParser(add_help=False)
parent_parser.add_argument('--parent', type=int)

foo_parser = argparse.ArgumentParser(parents=[parent_parser])
foo_parser.add_argument('foo')
foo_parser.parse_args(['--parent', '2', 'XXX'])
Namespace(foo='XXX', parent=2)

bar_parser = argparse.ArgumentParser(parents=[parent_parser])
bar_parser.add_argument('--bar')
bar_parser.parse_args(['--bar', 'YYY'])
Namespace(bar='YYY', parent=None)




```
