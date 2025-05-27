
# 📜 Poetry Web Scraper & NLP Analysis - Edgar Allan Poe

This project scrapes poems by Edgar Allan Poe from *mypoeticside.com* and applies Natural Language Processing (NLP) techniques to analyze, generate, visualize, and narrate poetry using spaCy, Stable Diffusion, and SpeechT5.

---

## 📥 Project Steps

### 1. **Web Scraping Poems**
We mimic a web browser to avoid being blocked and scrape all poem links and their contents.

```python
# code omitted for brevity (already explained above)
```

**✅ Output:**  
Scrapes poem titles and URLs successfully.

---

### 2. **Storing Poems and Titles**
Each poem's title and text content are extracted.

**📝 Output (sample titles):**
```
A Dream Within A Dream
Annabel Lee
The Raven
...
```

---

### 3. **Data Preprocessing and Analysis**
The poems are processed using `spaCy` for tokenization, lemmatization, and stop-word removal.

---

### 4. **Frequency Distribution**
Visualizes common poetic lemmas using a bar chart.

---

### 5. **Save Poems to CSV**
Creates `allan_poems.csv` with all scraped poem data.

---

### 6. **Sentence and Lemma Extraction**
Splits poems into sentences and lemmatizes them using custom `docs_to_sentences()` and `lemmatize()` functions.

---

## 🔁 Full Creative Pipeline: From Text to Art and Sound

This project also includes a **multi-modal generation system** that creates and presents poetry with visuals and audio.

---

### ✍️ 1. Poem Generation using spaCy

```python
def generate_poem(seed_text, n_lines=4):
    doc = nlp(seed_text)
    tokens = [token.text for token in doc if token.pos_ in ["NOUN", "VERB", "ADJ"]]
    poem = []
    for _ in range(n_lines):
        line = " ".join(random.sample(tokens, min(5, len(tokens))))
        poem.append(line.capitalize())
    return "\n".join(poem)
```

**📜 Output:**
```
Midnight pondered dreary weak soul
Shadow silence broken weary eyes
Raven dreams fading scream
Darkness grief ancient breath
```

---

### 🎨 2. Text to Image using Diffusers

```python
image = pipe(generated_poem).images[0]
image.save("poem_image.png")
```

**🖼️ Output:**  
Generates an image that reflects the poem's mood.

---

### 🔊 3. Text to Audio using SpeechT5

```python
inputs = processor(text=generated_poem, return_tensors="pt")
speech = model.generate_speech(inputs["input_ids"], speaker_embeddings=speaker_embeddings, vocoder=vocoder)
torchaudio.save("poem_audio.wav", speech.unsqueeze(0), 16000)
```

**🔉 Output:**  
Narrates the AI-generated poem in a human-like voice.

---

## 🧾 Summary

This project covers:

- 📄 Scraping and analyzing Edgar Allan Poe’s poetry
- ✍️ Generating new poems using NLP
- 🎨 Creating visuals from poems using Stable Diffusion
- 🔊 Converting poems to audio using SpeechT5

---

## 🔧 Requirements

```bash
pip install beautifulsoup4 spacy pandas matplotlib diffusers transformers torchaudio
python -m spacy download en_core_web_sm
```

---

## 🚀 The Complete Flow

```text
Edgar Allan Poe's Corpus ➡ Text Processing ➡ AI-Generated Poem ➡ 🎨 Image + 🔊 Audio
```

Turning classic poetry into a modern multimodal experience.

