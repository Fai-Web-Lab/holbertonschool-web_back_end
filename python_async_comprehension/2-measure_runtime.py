#!/usr/bin/env python3
"""
This module provides a coroutine to measure the execution time
of four parallel async comprehensions.
"""
import asyncio
import time

# Dynamic import of async_comprehension
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel using
    asyncio.gather and measures the total runtime.

    Returns:
        float: The total runtime in seconds.
    """
    start_time = time.perf_counter()

    # asyncio.gather runs the coroutines concurrently
    await asyncio.gather(*(async_comprehension() for _ in range(4)))

    end_time = time.perf_counter()
    return end_time - start_time
