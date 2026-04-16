#!/usr/bin/env python3
"""
This module provides a function to measure the average execution time
of the wait_n coroutine.
"""
import time
import asyncio

# Dynamic import of wait_n
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for wait_n(n, max_delay)
    and returns total_time / n.

    Args:
        n (int): Number of repetitions.
        max_delay (int): The maximum delay for each coroutine.

    Returns:
        float: The average time per task.
    """
    start_time = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.perf_counter()

    total_time = end_time - start_time
    return total_time / n
