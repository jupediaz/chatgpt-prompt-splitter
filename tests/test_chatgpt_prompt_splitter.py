import unittest
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from api.index import split_prompt

class TestChatGPTPromptSplitter(unittest.TestCase):

    def test_split_prompt_single_chunk(self):
        input_text = "This is a short text."
        max_length = 50
        chunks = split_prompt(input_text, max_length)
        self.assertEqual(len(chunks), 1)
        self.assertIn(input_text, chunks[0]['content'])

    def test_split_prompt_multiple_chunks(self):
        input_text = "This is a long text that should be split into multiple chunks."
        max_length = 20
        chunks = split_prompt(input_text, max_length)
        self.assertEqual(len(chunks), 4)

    def test_split_prompt_chunk_length(self):
        input_text = "This is a long text that should be split into multiple chunks with a specified maximum length."
        max_length = 30
        chunks = split_prompt(input_text, max_length)
        for chunk in chunks:
            self.assertLessEqual(len(chunk), max_length)

    def test_split_prompt_empty_input(self):
        input_text = ""
        max_length = 50
        chunks = split_prompt(input_text, max_length)
        self.assertEqual(len(chunks), 0)

    def test_split_prompt_negative_max_length(self):
        input_text = "This is a short text."
        max_length = -10
        with self.assertRaises(ValueError):
            split_prompt(input_text, max_length)
