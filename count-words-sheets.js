function COUNT_WORD(data, originalWord) {
  const text = " " + data + " ";
  const counts = 0;
  const word = originalWord.trim();  
  const count = (text.match(new RegExp(" " + word + " ", "gi")) || []).length;  
  
  return count;
}

TOOLS > Script
