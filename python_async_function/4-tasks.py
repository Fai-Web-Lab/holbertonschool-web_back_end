#!/usr/bin/env python3
"""
This module provides an async routine that spawns multiple tasks
using the task_wait_random function.
"""
import asyncio
from typing import List

# Dynamic imports as per project style
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay.

    Args:
        n (int): Number of tasks to spawn.
        max_delay (int): Maximum delay for each task.

    Returns:
        List[float]: The list of all delays in ascending order.
    """
    delays = []
    # Create a list of Task objects
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # Use as_completed to yield tasks as they finish
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
