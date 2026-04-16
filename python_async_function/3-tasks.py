#!/usr/bin/env python3
"""
This module provides a function that creates an asyncio.Task.
"""
import asyncio

# Dynamic import of wait_random
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Takes an integer max_delay and returns an asyncio.Task.

    Args:
        max_delay (int): The maximum delay for wait_random.

    Returns:
        asyncio.Task: A task object representing the execution of wait_random.
    """
    return asyncio.create_task(wait_random(max_delay))
