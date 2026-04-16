#!/usr/bin/env python3
"""
This module contains an async routine that spawns multiple coroutines
and returns their results in the order they complete.
"""
import asyncio
from typing import List

# Dynamic import as per project style
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with the specified max_delay.

    Args:
        n (int): Number of times to spawn wait_random.
        max_delay (int): The maximum delay for each wait_random call.

    Returns:
        List[float]: List of delays in ascending order.
    """
    delays = []
    tasks = [wait_random(max_delay) for _ in range(n)]

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
