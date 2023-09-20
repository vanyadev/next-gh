export async function fetchLanguages(languages_url: string) {
  const response = await fetch(languages_url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_KEY || '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'}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
