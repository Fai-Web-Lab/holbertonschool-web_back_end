#!/usr/bin/env python3
"""
This module provides a coroutine that uses an async comprehension
to collect values from an asynchronous generator.
"""
from typing import List

# Dynamic import of async_generator
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collects 10 random numbers using an async comprehension
    over async_generator and returns them as a list.

    Returns:
        List[float]: A list of 10 random floating-point numbers.
    """
    return [i async for i in async_generator()]
