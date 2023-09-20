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
