#!/usr/bin/env python3
"""
This module provides a function to safely get a value from a mapping.
"""
from typing import Mapping, Any, Union, TypeVar, Optional


# Define a type variable 'T'
T = TypeVar('T')


def safely_get_value(dct: Mapping, key: Any,
                     default: Optional[T] = None) -> Union[Any, T]:
    """
    Safely retrieves a value from a dictionary.

    Args:
        dct (Mapping): The dictionary-like object.
        key (Any): The key to look for.
        default (Optional[T]): The default value if the key isn't found.

    Returns:
        Union[Any, T]: The value from the mapping or the default value.
    """
    if key in dct:
        return dct[key]
    else:
        return default
