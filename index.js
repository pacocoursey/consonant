const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function isConsonant(c) {
  return consonants.indexOf(c.toLowerCase()) !== -1;
}

function includesConsonant(s) {
  for (let i = 0; i < s.length; i += 1) {
    if (isConsonant(s.charAt(i))) return true;
  }
  return false;
}

function startsWithConsonant(s) {
  return consonants.some(v => s.toLowerCase().startsWith(v));
}

function endsWithConsonant(s) {
  return consonants.some(v => s.toLowerCase().endsWith(v));
}

module.exports = {
  consonants,
  isConsonant,
  includesConsonant,
  startsWithConsonant,
  endsWithConsonant,
};
