#!/usr/bin/env python3
"""
This module provides a type-checked function to zoom into a tuple.
"""
from typing import Tuple, List


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    """
    Creates a zoomed-in version of a tuple by repeating elements.

    Args:
        lst (Tuple): The input tuple to zoom in on.
        factor (int): The number of times to repeat each element.

    Returns:
        List: A list containing the repeated elements.
    """
    zoomed_in: List = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = (12, 72, 91)

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, 3)
