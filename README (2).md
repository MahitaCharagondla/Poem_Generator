# 🧠✨ Poetry Generation Pipeline with NLP, Web Scraping, Text-to-Image, and Text-to-Audio

This project is an interactive, multi-stage pipeline built in Python using Jupyter Notebook. It combines **web scraping**, **natural language processing (NLP)**, **poem generation**, **image synthesis**, and **text-to-speech audio rendering** to create an immersive multimedia output.

---

## 🧩 Project Workflow

1. **Web Scraping**  
   Extracts textual content from websites using `requests` and `BeautifulSoup`. The scraped data serves as the source material for poetry generation.

2. **Natural Language Processing with SpaCy**  
   Processes the scraped content using SpaCy to identify named entities, nouns, and verbs to craft poetic lines.

3. **Poem Generation**  
   Leverages linguistic features to structure original poetic stanzas or sentences based on the analysis.

4. **Text-to-Image Generation**  
   Uses models from the `diffusers` library (e.g., Stable Diffusion) to visualize the generated poem as an artistic image.

5. **Text-to-Audio (WAV Format)**  
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
