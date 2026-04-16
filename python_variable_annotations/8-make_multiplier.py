#!/usr/bin/env python3
"""
This module provides a function that returns a multiplier function.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Creates a function that multiplies a float by a given multiplier.

    Args:
        multiplier (float): The multiplier to be used.

    Returns:
        Callable[[float], float]: A function that takes a float and
        returns the product.
    """
    def multiplier_func(n: float) -> float:
        """ Multiplies n by the outer multiplier """
        return n * multiplier

    return multiplier_func
