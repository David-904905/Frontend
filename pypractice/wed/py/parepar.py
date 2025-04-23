import argparse

parent_parser = argparse.ArgumentParser(
    prog= 'Arg parser lesson',
    description= ' This was created to learn argument passing',
    epilog='This is the epilog',
    add_help=False # ensure it does not conflicts its childrens help text.
)


parent_parser.add_argument('--parent', type=int) # type specifies the type of data that will be sent alongside it


foo_parser = argparse.ArgumentParser(parents=[parent_parser])
foo_parser.add_argument('foo')
foo_parser.parse_args(['--parent', '2', 'XXX'])