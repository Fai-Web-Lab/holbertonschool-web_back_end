#!/usr/bin/env python3
"""
This module provides a type-annotated function to sum a list of floats.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Returns the sum of all elements in a list of floats.

    Args:
        input_list (List[float]): A list containing floating-point numbers.

    Returns:
        float: The sum of the numbers in the list.
    """
    return sum(input_list)
