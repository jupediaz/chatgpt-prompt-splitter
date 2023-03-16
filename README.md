<h1>Long PROMPTs Splitter for ChatGPT</h1>
<h2>Overview</h2>
<p>Long PROMPTs Splitter is an open-source tool designed to help you split long text prompts into smaller chunks, making them suitable for usage with ChatGPT (or other language models with character limitations). The tool ensures that the text is divided into safe chunks of up to 15,000 characters per request. The project includes an easy-to-use web interface for inputting the long text, selecting the maximum length of each chunk, and copying the chunks individually to send them to ChatGPT.</p>
<h2>Features</h2>
<ul>
<li>Web interface for splitting text into smaller chunks</li>
<li>Customizable maximum length for each chunk</li>
<li>Copy chunks individually to send to ChatGPT</li>
<li>Instructions for ChatGPT on how to process the chunks</li>
</ul>
<h2>Getting Started</h2>
<h3>Prerequisites</h3>
<ul>
<li>Python 3.x</li>
<li>Flask</li>
</ul>
<h3>Installation</h3>
<ol>
<li>Clone the repository:</li>
</ol>
<pre class="!whitespace-pre hljs language-bash">git clone https://github.com/username/long-prompts-splitter.git</pre>
<ol start="2">
<li>Change to the project directory:</li>
</ol>
<pre class="!whitespace-pre hljs language-bash">cd long-prompts-splitter</pre>
</pre class="!whitespace-pre hljs language-bash">
<ol start="3">
<li>Install the required dependencies:</li>
</ol>
<pre class="!whitespace-pre hljs language-bash">pip install -r requirements.txt</pre>
<h3>Usage</h3>
<ol>
<li>Run the Flask application:</li>
</ol>
<pre class="!whitespace-pre hljs language-bash">python app.py
</pre>
<ol start="2">
<li><p>Open your web browser and navigate to <a href="http://localhost:5000" target="_new">http://localhost:5000</a>.</p></li>
<li><p>Input the long text prompt, select the maximum length for each chunk, and click the "Split" button.</p></li>
<li><p>Copy the chunks and send them to ChatGPT.</p></li>
</ol>
<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE" target="_new">LICENSE</a> file for details.</p>
<h2>Contributing</h2>
<p>Contributions are welcome! Please read the <a href="CONTRIBUTING.md" target="_new">CONTRIBUTING</a> file for details on how to contribute to the project.</p>
