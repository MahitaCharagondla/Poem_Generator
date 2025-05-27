# 🧠✨ Poetry Generation Pipeline with NLP, Web Scraping, Text-to-Image, and Text-to-Audio

This project is an interactive, multi-stage pipeline built in Python using Jupyter Notebook. It combines **web scraping**, **natural language processing (NLP)**, **poem generation**, **image synthesis**, and **text-to-speech audio rendering** to create an immersive multimedia output.
# 📝 Poem Generator (Edgar Allan Poe)

This project collects poems by Edgar Allan Poe from [mypoeticside.com](https://mypoeticside.com), cleans the text data, and prepares it for natural language processing tasks such as poem generation.

## 📦 Dependencies

Make sure you have the following libraries installed:

```bash
pip install pandas numpy beautifulsoup4 spacy
```

---

## 🛠️ Project Workflow

### 1. **Web Scraping Poems**

**File:** `allan_poems.csv`

- **Goal:** Automatically extract all poems by Edgar Allan Poe from `mypoeticside.com`.
- **Steps:**
  - Send an HTTP request impersonating a browser.
  - Parse the HTML content using BeautifulSoup.
  - Find poem titles and text and save them to a CSV.

**Output:**
A file named `allan_poems.csv` with two columns:
- `title`: Title of the poem
- `text`: Raw poem text

```csv
title,text
"Alone","From childhood's hour I have not been ..."
...
```

---

### 2. **Text Cleaning & Sentence Splitting**

**Function:** `docs_to_sentences('allan_poems.csv')`

- **Goal:** Clean each poem, convert to lowercase, remove unnecessary characters, and split into individual sentences.
- **Techniques Used:**
  - Regular expressions for sentence splitting.
  - Replace unwanted characters (e.g., parentheses, colons).
  - Filter empty strings.

**Output:**
A new file called `sentences_allan_poems.csv` with two columns:
- `doc_id`: Poem number
- `sentence`: One cleaned sentence from the poem

```csv
doc_id,sentence
0,from childhood's hour i have not been
0,as others were i have not seen
...
```

---

## 🧠 What You Can Do Next

You can now use the cleaned sentences (`sentences_allan_poems.csv`) to:
- Train a text generation model (e.g., LSTM, GPT, Markov Chains).
- Perform sentiment analysis.
- Analyze literary patterns in Edgar Allan Poe's works.

---


## 📁 Output Files Summary

| File                     | Description                                |
|--------------------------|--------------------------------------------|
| `allan_poems.csv`        | Raw poems scraped from the website         |
| `sentences_allan_poems.csv` | Cleaned and sentence-tokenized data        |

---

3. **Natural Language Processing with SpaCy**  
   Processes the scraped content using SpaCy to identify named entities, nouns, and verbs to craft poetic lines.

4. **Poem Generation**  
   Leverages linguistic features to structure original poetic stanzas or sentences based on the analysis.

5. **Text-to-Image Generation**  
   Uses models from the `diffusers` library (e.g., Stable Diffusion) to visualize the generated poem as an artistic image.

6. **Text-to-Audio (WAV Format)**  
   Converts the generated poem into speech and saves it as a `.wav` audio file using libraries like `gTTS`, `pyttsx3`, or `pydub`.

---

## 🛠️ Technologies & Libraries

| Component            | Libraries Used                          |
|---------------------|------------------------------------------|
| Web Scraping        | `requests`, `beautifulsoup4`             |
| NLP & Poem Creation | `spacy`                                  |
| Text-to-Image       | `diffusers`                              |
| Text-to-Audio       | `gTTS`, `pydub`, or similar               |

> Ensure you install `ffmpeg` for proper audio file handling with `pydub`.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/poetry-nlp-pipeline.git
cd poetry-nlp-pipeline
```

### 2. Install Dependencies

```bash
pip install requests beautifulsoup4 spacy diffusers gtts pydub
```

### 3. Download SpaCy Model

```bash
python -m spacy download en_core_web_sm
```

### 4. Run the Notebook

```bash
jupyter notebook
```

Open `Pro2 (2).ipynb` and run cells sequentially.

---

## 📂 Output

- **Generated Poem** – A text output based on NLP-driven logic.
- **Image** – A visual representation of the poem.
- **Audio** – A `.wav` file that reads the poem aloud.

---

## 📌 Future Enhancements

- Implement rhyme and meter analysis for more poetic authenticity.
- Add GUI using Streamlit or Gradio.
- Support multi-language poem generation and speech synthesis.

---

## 📃 License

This project is open-source under the MIT License.
