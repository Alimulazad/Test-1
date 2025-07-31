const data = {
  cyto: { class: "Root", meaning: "কোষ", example: "Cytoplasm", explanation: "কোষের অভ্যন্তরীণ তরল পদার্থ" },
  bio: { class: "Prefix", meaning: "জীবন", example: "Biology", explanation: "জীব ও জীবনের অধ্যয়ন" },
  logy: { class: "Suffix", meaning: "অধ্যয়ন", example: "Biology", explanation: "কোনো বিষয়ের বিজ্ঞানভিত্তিক অধ্যয়ন" },
  derm: { class: "Root", meaning: "ত্বক", example: "Dermatology", explanation: "চর্ম সংক্রান্ত চিকিৎসা বিজ্ঞান" },
  auto: { class: "Prefix", meaning: "স্বয়ং", example: "Autotroph", explanation: "স্বয়ং খাদ্য তৈরিকারী জীব" },
  cytoplasm: { class: "Organelle", meaning: "সাইটোপ্লাজম", example: "The cytoplasm fills the cell.", explanation: "কোষের অভ্যন্তরীণ তরল পদার্থ" },
  nucleus: { class: "Organelle", meaning: "কেন্দ্রক", example: "The nucleus controls cell activities.", explanation: "কোষের নিয়ন্ত্রণ কেন্দ্র" },
  mitochondria: { class: "Organelle", meaning: "মাইটোকন্ড্রিয়া", example: "Mitochondria are the powerhouse of the cell.", explanation: "শক্তি উৎপাদনের অঙ্গানু" },
  chromosome: { class: "Structure", meaning: "ক্রোমোজোম", example: "Humans have 46 chromosomes.", explanation: "জিন সংরক্ষণের কাঠামো" },
  gene: { class: "Unit", meaning: "জিন", example: "Genes determine our traits.", explanation: "বংশগতির একক" },
  dna: { class: "Molecule", meaning: "ডিএনএ", example: "DNA carries genetic information.", explanation: "জিনগত তথ্য ধারণকারী অণু" },
  rna: { class: "Molecule", meaning: "আরএনএ", example: "RNA helps in protein synthesis.", explanation: "প্রোটিন সংশ্লেষে সহায়ক অণু" },
  enzyme: { class: "Protein", meaning: "এনজাইম", example: "Enzymes speed up chemical reactions.", explanation: "রাসায়নিক বিক্রিয়া তরান্বিতকারী প্রোটিন" },
  cell: { class: "Basic Unit", meaning: "কোষ", example: "All organisms are made of cells.", explanation: "জীবের মৌলিক একক" },
  tissue: { class: "Structure", meaning: "টিস্যু", example: "Muscle tissue helps in movement.", explanation: "একই রকম কোষের সমষ্টি" },
  organ: { class: "System", meaning: "অঙ্গ", example: "The heart is an organ.", explanation: "টিস্যুর সমন্বয়ে গঠিত শরীরের অংশ" },
  photosynthesis: { class: "Process", meaning: "জীবসংশ্লেষণ", example: "Photosynthesis occurs in leaves.", explanation: "গাছের খাদ্য তৈরির প্রক্রিয়া" },
  respiration: { class: "Process", meaning: "শ্বসন", example: "Respiration provides energy.", explanation: "শক্তি উৎপাদনের প্রক্রিয়া" },
  chlorophyll: { class: "Pigment", meaning: "ক্লোরোফিল", example: "Chlorophyll makes leaves green.", explanation: "সবুজ রঙের রঞ্জক পদার্থ" },
  ecosystem: { class: "System", meaning: "বাস্তুতন্ত্র", example: "An ecosystem includes all organisms.", explanation: "জীব ও পরিবেশের সম্পর্ক" },
  habitat: { class: "Environment", meaning: "আবাসস্থল", example: "A forest is a habitat.", explanation: "জীবের বসবাসের স্থান" },
  adaptation: { class: "Trait", meaning: "অভিযোজন", example: "Camels have adaptations for desert.", explanation: "পরিবেশের সঙ্গে খাপ খাওয়ানোর বৈশিষ্ট্য" },
  mutation: { class: "Change", meaning: "জিনগত পরিবর্তন", example: "Mutation can cause diseases.", explanation: "ডিএনএ তে হঠাৎ পরিবর্তন" },
  evolution: { class: "Theory", meaning: "বিবর্তন", example: "Humans evolved from primates.", explanation: "জীবের ধাপে ধাপে পরিবর্তন" },
  autotroph: { class: "Organism", meaning: "স্বপোষী", example: "Plants are autotrophs.", explanation: "আলোক বা রাসায়নিক শক্তি ব্যবহার করে খাদ্য তৈরি করে" },
  heterotroph: { class: "Organism", meaning: "পরপোষী", example: "Animals are heterotrophs.", explanation: "অন্য জীবের উপর নির্ভর করে খাদ্য গ্রহণকারী জীব" }
};

const input = document.getElementById("searchInput");
const resultDiv = document.getElementById("result");

input.addEventListener("input", () => {
  const query = input.value.trim().toLowerCase();
  resultDiv.innerHTML = "";

  if (!query) return;

  const results = Object.entries(data).filter(([key]) => key.includes(query));

  if (results.length > 0) {
    resultDiv.innerHTML = results.map(([key, word]) => `
      <div class="card">
        <div class="word">🔍 ${key}</div>
        <div><span class="label">📚 Class:</span> ${word.class}</div>
        <div><span class="label">🔤 Meaning:</span> ${word.meaning}</div>
        <div><span class="label">🧪 Example:</span> ${word.example}</div>
        <div><span class="label">📖 Explanation:</span> ${word.explanation}</div>
      </div>
    `).join('');
  } else {
    resultDiv.innerHTML = `<div class="not-found">❌ শব্দটি খুঁজে পাওয়া যায়নি</div>`;
  }
});

// Handle popup
const addWordBtn = document.getElementById("addWordBtn");
const popupForm = document.getElementById("popupForm");
const cancelWord = document.getElementById("cancelWord");
const submitWord = document.getElementById("submitWord");

addWordBtn.onclick = () => {
  popupForm.style.display = "flex";
};

cancelWord.onclick = () => {
  popupForm.style.display = "none";
};

submitWord.onclick = () => {
  const word = document.getElementById("newWord").value.trim().toLowerCase();
  const wordClass = document.getElementById("newClass").value;
  const meaning = document.getElementById("newMeaning").value;
  const example = document.getElementById("newExample").value;
  const explanation = document.getElementById("newExplanation").value;

  if (word && wordClass && meaning && example && explanation) {
    data[word] = {
      class: wordClass,
      meaning: meaning,
      example: example,
      explanation: explanation
    };
    popupForm.style.display = "none";
    input.value = word;
    input.dispatchEvent(new Event('input'));
  } else {
    alert("সব ঘর পূরণ করুন!");
  }
};
