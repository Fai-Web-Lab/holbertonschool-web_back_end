#!/usr/bin/env python3
"""
This module provides a type-annotated function that creates a
tuple from a string and the square of a number.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple where the first element is k and the second
    element is the square of v as a float.

    Args:
        k (str): The string key.
        v (Union[int, float]): The value to be squared.

    Returns:
        Tuple[str, float]: A tuple containing k and v^2.
    """
    return (k, float(v**2))
