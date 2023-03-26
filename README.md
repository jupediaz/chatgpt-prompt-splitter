<p align="center">
  <img src="static/chatgpt_prompt_splitter.png" width="150" alt="ChatGPT PROMPTs Splitter" />
  <h1 align="center">ChatGPT PROMPTs Splitter</h1>
</p>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjupediaz%2Fchatgpt-prompt-splitter)

### ❓ Have you ever received a message from ChatGPT about sending too much data and needing to send a shorter text?

#### **Here's a great alternative to bypass this limitation!** 🚀

![Error Message Too Long](/static/screenshots/screenshot_error_message_too_long.png)
## Overview

**ChatGPT PROMPTs Splitter** is an open-source tool designed to help you split long text prompts into smaller chunks, making them suitable for usage with ChatGPT (or other language models with character limitations).

The tool ensures that the text is divided into safe chunks of up to 15,000 characters per request as default, although can be changed.

The project includes an easy-to-use web interface for inputting the long text, selecting the maximum length of each chunk, and copying the chunks individually to paste them to ChatGPT.

## Post on Medium

You can read the full article on Medium: [ChatGPT PROMPTs Splitter: Split long text prompts into smaller chunks for ChatGPT](https://medium.com/@josediazmoreno/break-the-limits-send-large-text-blocks-to-chatgpt-with-ease-6824b86d3270)

## How it works

The tool uses a simple algorithm to split the text into smaller chunks. The algorithm is based on the following rules:

1. Divide the prompt into chunks based on the specified maximum length.

2. Add information to the first chunk to instruct the AI on the process of receiving and acknowledging the chunks, and to wait for the completion of chunk transmission before processing subsequent requests.

## Features

- Python 3.9
- Web interface for splitting text into smaller chunks
- Customizable maximum length for each chunk
- Copy chunks individually to send to ChatGPT
- Instructions for ChatGPT on how to process the chunks
- Tests included
- Easy deployment to Vercel included

## Usage example

Follow these simple steps to use the ChatGPT Prompt Splitter web application, illustrated with screenshots.

### Step 1: Access the application
Open your web browser and navigate to the application URL.

https://chatgpt-prompt-splitter.jjdiaz.dev/

You should see the main screen, displaying the input fields for your long text prompt and maximum chunk length.

![Set Max Length](/static/screenshots/screenshot_main_screen.png)

### Step 2: Input the long prompt
Enter the text you want to split into smaller chunks for use with ChatGPT.

You can also specify custom length for each chunk by entering the number of characters in the *"Max chars length..."* field.

In this example, we are gonna split into chunks of just 25 characters.

![Input Text](/static/screenshots/screenshot_example_text.png)

### Step 3: Click "Split"
Click the "Split" button to process the text and divide it into smaller chunks.

![Click Split](/static/screenshots/screenshot_example_text_splitted.png)

### Step 4: Copy the chunks
The application will display the text divided into smaller chunks. You can copy each chunk individually by clicking the "Copy" button next to it.

![Copy Chunks](/static/screenshots/screenshot_example_copy_chunks.png)

### Step 5: Paste the chunks into ChatGPT
Now that you have your chunks copied, you can paste them into ChatGPT or any other language model with character limitations.

![Paste Chunks](/static/screenshots/screenshot_example_paste_chunks.png)

That's it! You've successfully split a **long PROMPT** into smaller, manageable chunks using the **ChatGPT Prompt Splitter**.

## Getting Started

### Prerequisites

- Python 3.x
- Flask

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jupediaz/chatgpt-prompt-splitter.git
```

2. Change to the project directory:

```bash
cd chatgpt-prompt-splitter
```

3. Install the required dependencies:

```bash
pip install -r requirements.txt
```

### Usage

#### Running the Flask application in development mode

1. Run the Flask application:

```bash
vercel dev
```

2. Open your web browser and navigate to <http://localhost:3000>.

#### Deploy the Flask application to production

1. Deploy the Flask application:

```bash
vercel --prod
```

2. Open your web browser and navigate to <https://chatgpt-prompt-splitter.jjdiaz.dev/>.

## Running Tests

This project includes a suite of unit tests to ensure the proper functionality of the tool. To run the tests, follow these steps:

1. Make sure you have the required dependencies installed:

```bash
pip install -r requirements.txt
```

2. Run the tests using the unittest module:

```bash
python3 -m unittest discover tests
```

The test suite will run, and the results will be displayed in the terminal.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) file for details on how to contribute to the project.

## Contact

If you have any questions or suggestions, please contact me at [hello@jjdiaz.dev](mailto:hello@jjdiaz.dev).

## Disclaimer

This project is not affiliated with OpenAI, Microsoft, or any other entity. The project is provided "as is" without warranty of any kind, express or implied. The author is not responsible for any damages or losses arising from the use of this project.

## Changelog

### 1.0.0

- Initial release
