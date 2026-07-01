// Production Level Content Filter
// PeakCheap - contentFilter.js

const BLOCKED_EXACT = [
    'xxx',
    'porn',
    'pornography',
]

const BLOCKED_PATTERNS = [
  /\bsex\b/i,
  /\badult only\b/i,
  /\bnude\b/i,
  /\bnaked\b/i,
  /\bporn\b/i,
  /\berotic\b/i,
  /\bfetish\b/i,
  /\bbondage\b/i,
  /\bplayboy\b/i,
  /\bpenthouse\b/i,
  /\bhustler mag\b/i,
]

export const isContentSafe = (text) => {
    if(!text) return true;

    const lower = text.toLowerCase();

    // Check exact blocked words
    if(BLOCKED_EXACT.some(word => lower === word)) return false;

    // Check patterns
    if(BLOCKED_PATTERNS.some(pattern => pattern.test(text))) return false;

    return true;
}