export type DescriptionChunk =
  | string
  | {
      href: string;
      text: string;
      logo: string;
    };

export function parseDescription(description: string): DescriptionChunk[] {
  const parts: DescriptionChunk[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;

  for (const match of description.matchAll(regex)) {
    const [fullMatch, text, href] = match;
    const matchIndex = match.index!;

    if (matchIndex > lastIndex) {
      parts.push(description.slice(lastIndex, matchIndex));
    }

    parts.push({
      href,
      text,
      logo: getLogoName(text),
    });

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < description.length) {
    parts.push(description.slice(lastIndex));
  }

  return parts;
}

export function getLogoName(name: string) {
  return name.replaceAll(" ", "").replaceAll(",", "");
}
