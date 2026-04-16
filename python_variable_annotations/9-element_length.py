#!/usr/bin/env python3
"""
This module provides a function that calculates the length of
elements in an iterable.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes an iterable of sequences and returns a list of tuples.
    Each tuple contains the sequence and its corresponding length.

    Args:
        lst (Iterable[Sequence]): An iterable containing sequences.

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples (sequence, length).
    """
    return [(i, len(i)) for i in lst]
