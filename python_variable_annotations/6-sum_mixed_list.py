#!/usr/bin/env python3
"""
This module provides a type-annotated function to sum a list
containing both integers and floats.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Returns the sum of a list of integers and floats as a float.

    Args:
        mxd_lst (List[Union[int, float]]): A list containing ints and floats.

    Returns:
        float: The sum of the numbers in the list.
    """
    return float(sum(mxd_lst))
