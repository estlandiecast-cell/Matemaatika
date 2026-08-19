"""HTML-to-text cleanup and verbatim sentence/line extraction."""

import html
import re

_BLOCK_BREAKS = re.compile(r"(?i)<\s*(br|p|/p|/li|/div|/h[1-6])\s*/?\s*>")
_TAG = re.compile(r"<[^>]+>")
_WS = re.compile(r"[ \t ]+")
_SENTENCE_SPLIT = re.compile(r"(?<=[.!?])\s+")


def html_to_lines(raw_html: str) -> list[str]:
    """Convert an HTML job description into a list of plain-text lines,
    one per block element (paragraph/list item/line break), preserving
    verbatim wording (only whitespace is normalized)."""
    if not raw_html:
        return []
    text = _BLOCK_BREAKS.sub("\n", raw_html)
    text = _TAG.sub(" ", text)
    text = html.unescape(text)
    lines = []
    for raw_line in text.split("\n"):
        line = _WS.sub(" ", raw_line).strip(" •-\t")
        if line:
            lines.append(line)
    return lines


def line_to_sentences(line: str) -> list[str]:
    """Split a text line into sentence-like units. Falls back to the
    whole line when there is no terminal punctuation (common in bullet
    points), so a match is never lost to over-splitting."""
    parts = [p.strip() for p in _SENTENCE_SPLIT.split(line) if p.strip()]
    return parts or ([line.strip()] if line.strip() else [])


def find_matching_sentences(raw_html: str, terms: list[str]) -> list[tuple[str, str]]:
    """Return [(verbatim_sentence, matched_term), ...] for every sentence
    or bullet line in raw_html that contains one of terms (case-insensitive
    substring match). The returned sentence text is verbatim (HTML-stripped,
    entities decoded, whitespace-normalized) -- no paraphrasing."""
    matches: list[tuple[str, str]] = []
    seen = set()
    for line in html_to_lines(raw_html):
        for sentence in line_to_sentences(line):
            lowered = sentence.lower()
            for term in terms:
                if term in lowered:
                    key = (sentence, term)
                    if key not in seen:
                        seen.add(key)
                        matches.append(key)
                    break
    return matches


def find_matching_sentences_in_text(plain_text: str, terms: list[str]) -> list[tuple[str, str]]:
    """Same as find_matching_sentences but for already-plain text (e.g.
    forum comments) rather than HTML."""
    matches: list[tuple[str, str]] = []
    seen = set()
    text = html.unescape(plain_text or "")
    for raw_line in text.split("\n"):
        line = _WS.sub(" ", raw_line).strip()
        if not line:
            continue
        for sentence in line_to_sentences(line):
            lowered = sentence.lower()
            for term in terms:
                if term in lowered:
                    key = (sentence, term)
                    if key not in seen:
                        seen.add(key)
                        matches.append(key)
                    break
    return matches
